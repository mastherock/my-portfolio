
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts as fallbackPosts } from '@/data/blog';
import type { BlogPost } from '@/lib/types';
import { firestore } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { AnimatedDiv } from '@/components/shared/animated-div';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read articles and tutorials on web development, design, and technology from Mashuk.',
};

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const postsCollection = collection(firestore, 'posts');
    const querySnapshot = await getDocs(postsCollection);
    
    if (querySnapshot.empty) {
      console.log('No posts found in Firestore, using fallback data.');
      return fallbackPosts;
    }
    
    const posts = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      slug: doc.id,
    })) as BlogPost[];

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  } catch (error) {
    console.warn('Could not fetch posts from Firestore. Using fallback data. Error:', error);
    return fallbackPosts;
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-32">
      <AnimatedDiv>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-center">
          From the Blog
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto">
          Thoughts on software development, digital creation, and life.
        </p>
      </AnimatedDiv>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {posts.map((post, index) => (
          <AnimatedDiv key={post.slug} delay={`${index * 0.1}s`}>
            <Link href={`/blog/${post.slug}`} className="group block bg-card rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:scale-105 hover:border-primary border">
              <div className="overflow-hidden">
                <Image
                  src={post.image || 'https://placehold.co/600x400'}
                  alt={post.title}
                  width={600}
                  height={400}
                  data-ai-hint="blog post"
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mt-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-muted-foreground line-clamp-3">{post.excerpt}</p>
                <div className="mt-4 flex items-center text-primary font-semibold">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </AnimatedDiv>
        ))}
      </div>
    </div>
  );
}

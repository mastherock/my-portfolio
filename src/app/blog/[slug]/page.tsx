
import { blogPosts as fallbackPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { AnimatedDiv } from '@/components/shared/animated-div';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/lib/types';
import { firestore } from '@/lib/firebase';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

type Props = {
  params: { slug: string };
};

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const docRef = doc(firestore, 'posts', slug);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { ...docSnap.data(), slug: docSnap.id } as BlogPost;
    } else {
      // Post not in Firestore, try finding it in fallback data.
      return fallbackPosts.find((p) => p.slug === slug) || null;
    }
  } catch (error) {
    console.warn(`Could not fetch post '${slug}' from Firestore. Using fallback data. Error:`, error);
    // On error, find the post in fallback data.
    return fallbackPosts.find((p) => p.slug === slug) || null;
  }
}

async function getAllPostSlugs(): Promise<{ slug: string }[]> {
   try {
    const postsCollection = collection(firestore, 'posts');
    const querySnapshot = await getDocs(postsCollection);
    // If Firestore is empty or there's an issue, we still return fallback slugs to build pages.
    if (querySnapshot.empty) {
      return fallbackPosts.map((post) => ({ slug: post.slug }));
    }
    const firestoreSlugs = querySnapshot.docs.map(doc => ({ slug: doc.id }));
    // Combine and deduplicate slugs to be safe
    const allSlugs = [...firestoreSlugs, ...fallbackPosts.map(p => ({slug: p.slug}))];
    const uniqueSlugs = Array.from(new Map(allSlugs.map(item => [item.slug, item])).values());
    return uniqueSlugs;
  } catch (error) {
    console.warn('Could not fetch slugs from Firestore. Using fallback slugs. Error:', error);
    return fallbackPosts.map((post) => ({ slug: post.slug }));
  }
}


// This function generates the metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

// This function generates the static paths for all blog posts
export async function generateStaticParams() {
  return await getAllPostSlugs();
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-32">
      <article className="max-w-4xl mx-auto">
        <AnimatedDiv>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>
          <p className="text-muted-foreground mb-4">
            Published on {post.date}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags?.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </AnimatedDiv>

        <AnimatedDiv delay="0.1s">
          <Image
            src={post.image || 'https://placehold.co/1200x600'}
            alt={post.title}
            width={1200}
            height={600}
            data-ai-hint="blog post header"
            className="w-full rounded-lg object-cover mb-12"
          />
        </AnimatedDiv>

        <AnimatedDiv
          delay="0.2s"
          className="prose prose-lg dark:prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
          dangerouslySetInnerHTML={{ __html: post.content }}
        >
        </AnimatedDiv>
      </article>
    </div>
  );
}

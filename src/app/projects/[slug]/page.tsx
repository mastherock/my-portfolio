import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { AnimatedDiv } from '@/components/shared/animated-div';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.images[0]],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-4xl mx-auto">
        <AnimatedDiv>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4 mb-12">
            {project.links.live && (
              <Button asChild>
                <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <Globe />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </AnimatedDiv>
        
        <div className="space-y-8">
          {project.images.map((image, index) => (
            <AnimatedDiv key={index} delay={`${index * 0.1 + 0.1}s`}>
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                width={1200}
                height={800}
                data-ai-hint="project image"
                className="w-full rounded-lg object-cover shadow-lg"
              />
            </AnimatedDiv>
          ))}
        </div>

        <AnimatedDiv
          delay="0.5s"
          className="prose prose-lg dark:prose-invert max-w-none mt-16 prose-p:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: project.details }}
        >
        </AnimatedDiv>
      </div>
    </div>
  );
}

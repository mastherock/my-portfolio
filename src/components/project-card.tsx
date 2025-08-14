'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight } from 'lucide-react';
import { AnimatedDiv } from './shared/animated-div';

interface ProjectCardProps {
  project: Project;
  delay?: string;
}

export function ProjectCard({ project, delay = '0s' }: ProjectCardProps) {
  return (
    <AnimatedDiv delay={delay}>
      <Link href={`/projects/${project.slug}`} className="group block" data-cursor-hover>
        <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 hover:border-primary border">
          <div className="overflow-hidden">
            <Image
              src={project.images[0]}
              alt={project.title}
              width={500}
              height={300}
              data-ai-hint="project thumbnail"
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <CardHeader>
            <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
            <CardDescription className="line-clamp-2">{project.summary}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 3).map((t) => (
                <Badge key={t} variant="secondary">{t}</Badge>
              ))}
            </div>
            <div className="mt-4 flex items-center text-primary font-semibold">
              View Case Study
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </AnimatedDiv>
  );
}

'use client';

import { useState, useMemo } from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from '../project-card';
import { AnimatedDiv } from '../shared/animated-div';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ProjectsSectionProps {
  isHomePage?: boolean;
}

export default function ProjectsSection({ isHomePage = false }: ProjectsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const allTechs = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(p => p.tech.forEach(t => techSet.add(t)));
    return ['All', ...Array.from(techSet)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') {
      return projects;
    }
    return projects.filter(p => p.tech.includes(selectedFilter));
  }, [selectedFilter]);

  const displayedProjects = isHomePage ? projects.slice(0, 3) : filteredProjects;

  return (
    <section id="projects" className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <AnimatedDiv>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
            A glimpse into the solutions I've crafted. Click a tag to filter.
          </p>
        </AnimatedDiv>

        {!isHomePage && (
          <AnimatedDiv delay="0.1s" className="flex flex-wrap justify-center gap-2 mt-12">
            {allTechs.map(tech => (
              <button
                key={tech}
                onClick={() => setSelectedFilter(tech)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border",
                  selectedFilter === tech
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {tech}
              </button>
            ))}
          </AnimatedDiv>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} delay={`${index * 0.1}s`} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && !isHomePage && (
          <AnimatedDiv className="text-center mt-12 text-muted-foreground">
            <p>No projects found for the selected filter.</p>
          </AnimatedDiv>
        )}

        {isHomePage && projects.length > 3 && (
          <AnimatedDiv className="text-center mt-16">
            <Button asChild size="lg">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </AnimatedDiv>
        )}
      </div>
    </section>
  );
}

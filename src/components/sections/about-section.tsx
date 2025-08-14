
'use client';

import { AnimatedDiv } from '../shared/animated-div';
import { Button } from '../ui/button';
import Link from 'next/link';
import {
  Code,
  Database,
  Cloud,
  PenTool,
  Rocket,
  Briefcase,
  Smile,
  Award,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { CountUp } from '../shared/count-up';

const stats = [
  { icon: Briefcase, value: 5, label: 'Years of Experience' },
  { icon: Award, value: 20, label: 'Projects Completed' },
  { icon: Smile, value: 15, label: 'Happy Clients' },
];

const skills = [
  { icon: Code, title: 'Frontend', description: 'Building beautiful and responsive user interfaces with React, Next.js, and Tailwind CSS.' },
  { icon: Database, title: 'Backend', description: 'Developing robust server-side applications and APIs with Node.js and Firebase.' },
  { icon: Cloud, title: 'Deployment', description: 'Deploying and managing applications on platforms like Vercel and Firebase Hosting.' },
  { icon: PenTool, title: 'WordPress/Shopify', description: 'Crafting custom themes and solutions for popular CMS and e-commerce platforms.' },
];

const techStack = [
    'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js',
    'HTML5 & CSS3', 'Tailwind CSS', 'Firebase', 'WordPress', 'Shopify', 'Git & GitHub',
    'SEO', 'Content Marketing', 'Google Analytics', 'Social Media Marketing', 'PPC Advertising', 'Email Marketing', 'Content Writing'
];

interface AboutSectionProps {
  isHomePage?: boolean;
}

export default function AboutSection({ isHomePage = false }: AboutSectionProps) {
  return (
    <section id="about" className="bg-secondary py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <AnimatedDiv>
          <h2 className="text-3xl md:text-4xl font-bold text-center tracking-tight">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
            A passionate Full-Stack Developer with a knack for building beautiful, functional, and scalable web applications.
          </p>
        </AnimatedDiv>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Profile Picture */}
          <AnimatedDiv className="md:col-span-4 lg:col-span-3 flex justify-center">
            <div className="relative w-48 h-48 md:w-full md:h-auto md:aspect-square">
              <img
                src="/mashuk-profile.jpg"
                alt="Mashuk"
                data-ai-hint="profile picture"
                className="w-full h-full rounded-full md:rounded-lg object-contain shadow-lg border-4 border-primary/20"
              />
            </div>
          </AnimatedDiv>

          {/* Bio and Philosophy */}
          <div className="md:col-span-8 lg:col-span-9 space-y-8">
            <AnimatedDiv delay="0.1s">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a self-taught developer and digital marketer driven by a passion for technology and creativity. I specialize in turning complex ideas into high-performance web solutions. My journey in tech is fueled by continuous learning and a desire to build things that make a difference.
              </p>
            </AnimatedDiv>
            <AnimatedDiv delay="0.2s">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Rocket className="w-8 h-8 text-primary" />
                My Philosophy
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of clean code, user-centric design, and continuous learning. My goal is to transform complex problems into elegant, intuitive solutions that not only meet business needs but also provide a delightful user experience. I thrive in collaborative environments and am always eager to take on new challenges.
              </p>
            </AnimatedDiv>
          </div>
        </div>

        {/* Stats Section */}
        {!isHomePage && (
           <div className="my-24 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <AnimatedDiv delay={`${index * 0.1}s`} key={index}>
                <Card className="text-center p-6 bg-card">
                  <stat.icon className="w-10 h-10 mx-auto text-primary mb-3" />
                  <p className="text-4xl font-bold">
                    <CountUp end={stat.value} />+
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
        )}
       

        {/* Skills Section */}
        <div className="mt-24">
          <AnimatedDiv>
            <h3 className="text-3xl font-bold text-center mb-12">Core Competencies</h3>
          </AnimatedDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <AnimatedDiv delay={`${index * 0.1}s`} key={index}>
                <Card className="text-center group p-6 transition-all duration-300 hover:bg-card/80 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                  <CardHeader className="p-0 items-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                      <skill.icon className="w-10 h-10 text-primary transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl mb-2">{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground text-sm">{skill.description}</p>
                  </CardContent>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        {!isHomePage && (
          <div className="mt-24">
            <AnimatedDiv>
              <h3 className="text-3xl font-bold text-center mb-12">My Tech Stack</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {techStack.map((tech, index) => (
                  <AnimatedDiv delay={`${index * 0.05}s`} key={tech}>
                    <Badge variant="secondary" className="text-lg py-2 px-4 border border-transparent hover:border-primary transition-all duration-300 hover:scale-110 cursor-pointer">
                      {tech}
                    </Badge>
                  </AnimatedDiv>
                ))}
              </div>
            </AnimatedDiv>
          </div>
        )}
        
        {isHomePage && (
          <AnimatedDiv className="text-center mt-16">
            <Button asChild size="lg">
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </AnimatedDiv>
        )}
      </div>
    </section>
  );
}

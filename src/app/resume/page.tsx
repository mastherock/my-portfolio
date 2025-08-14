
import type { Metadata } from 'next';
import { Briefcase, User, Mail, Phone, MapPin, Linkedin, Github, Twitter, Code, Award, GraduationCap, Star, MessageCircle, Link as LinkIcon } from 'lucide-react';
import { AnimatedDiv } from '@/components/shared/animated-div';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'The professional resume of Mashuk, a Full-Stack Developer.',
};

const resumeData = {
  name: 'Mashuk',
  title: 'Full-Stack Developer',
  contact: {
    email: 'mastherock15@gmail.com',
    phone: '+91 9205838459',
    location: 'Delhi, India',
    linkedin: 'https://www.linkedin.com/in/mas-huk-a9a41137a/',
    github: 'https://github.com/mastherock',
    twitter: 'https://twitter.com/mastherock15',
  },
  summary: 'Results-driven Full-Stack Developer with over 5 years of freelance experience, specializing in creating high-performance web applications using modern technologies like Next.js, React, and Node.js. Proven ability to translate complex client requirements into elegant, user-centric solutions. Seeking to leverage my technical expertise and problem-solving skills to contribute to an innovative and forward-thinking team.',
  experience: [
    {
      title: 'Freelance Full-Stack Developer',
      company: 'Self-Employed',
      period: '2019 - Present',
      description: 'Successfully designed, developed, and deployed over 20 web applications for a diverse client base, including e-commerce stores, portfolio sites, and business platforms. Managed the full project lifecycle, from initial client consultation and UI/UX design to backend development, deployment, and ongoing maintenance. Specialized in creating scalable solutions with a focus on clean code and optimal performance.'
    },
  ],
  education: {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Jamia Hamdard',
    period: '2022 - 2025',
  },
  technicalSkills: [
    'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js',
    'HTML5 & CSS3', 'Tailwind CSS', 'Firebase', 'WordPress', 'Shopify', 'Git & GitHub',
    'SEO', 'Content Marketing', 'Google Analytics', 'Social Media Marketing', 'PPC Advertising', 'Email Marketing', 'Content Writing'
  ],
  softSkills: [
    'Problem Solving', 'Effective Communication', 'Team Collaboration', 'Project Management', 'Client Relations', 'Adaptability'
  ],
  languages: [
    { name: 'English', proficiency: 'Professional Working Proficiency' },
    { name: 'Hindi', proficiency: 'Native or Bilingual Proficiency' },
  ],
  projects: projects.slice(0, 3)
};

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-32 max-w-6xl">
      <AnimatedDiv className="bg-card p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl border shadow-primary/10">
        
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{resumeData.name}</h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mt-2">{resumeData.title}</h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8">
            <AnimatedDiv>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-3 text-sm">
                <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"><Mail className="w-5 h-5 text-primary/80" /> {resumeData.contact.email}</a>
                <a href={`tel:${resumeData.contact.phone}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"><Phone className="w-5 h-5 text-primary/80" /> {resumeData.contact.phone}</a>
                <div className="flex items-center gap-3 text-muted-foreground"><MapPin className="w-5 h-5 text-primary/80" /> {resumeData.contact.location}</div>
              </div>
            </AnimatedDiv>
            
            <Separator />
            
            <AnimatedDiv>
              <h3 className="text-xl font-bold mb-4">Links</h3>
              <div className="space-y-3 text-sm">
                 <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5 text-primary/80" /> LinkedIn</a>
                 <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub"><Github className="w-5 h-5 text-primary/80" /> GitHub</a>
                 <a href={resumeData.contact.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5 text-primary/80" /> Twitter</a>
              </div>
            </AnimatedDiv>

            <Separator />

            <AnimatedDiv delay="0.1s">
              <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.technicalSkills.map(skill => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </AnimatedDiv>

             <Separator />

            <AnimatedDiv delay="0.2s">
              <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.softSkills.map(skill => (
                  <Badge key={skill} variant="outline">{skill}</Badge>
                ))}
              </div>
            </AnimatedDiv>

            <Separator />

            <AnimatedDiv delay="0.3s">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div>
                <h4 className="font-semibold">{resumeData.education.degree}</h4>
                <p className="text-muted-foreground text-sm">{resumeData.education.institution}</p>
                <p className="text-muted-foreground text-sm">{resumeData.education.period}</p>
              </div>
            </AnimatedDiv>

            <Separator />

             <AnimatedDiv delay="0.4s">
              <h3 className="text-xl font-bold mb-4">Languages</h3>
               <div className="space-y-1">
                {resumeData.languages.map(lang => (
                  <div key={lang.name}>
                    <p className="font-semibold text-sm">{lang.name} <span className="text-xs text-muted-foreground">({lang.proficiency})</span></p>
                  </div>
                ))}
              </div>
            </AnimatedDiv>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-12">
            <AnimatedDiv delay="0.1s">
              <h3 className="flex items-center gap-3 text-2xl font-bold mb-4 text-primary"><User className="w-7 h-7" /> Summary</h3>
              <p className="text-muted-foreground leading-relaxed">{resumeData.summary}</p>
            </AnimatedDiv>

            <AnimatedDiv delay="0.2s">
              <h3 className="flex items-center gap-3 text-2xl font-bold mb-6 text-primary"><Briefcase className="w-7 h-7" /> Work Experience</h3>
              <div className="space-y-8 relative before:absolute before:inset-y-0 before:w-0.5 before:bg-border before:left-3">
                {resumeData.experience.map((job, index) => (
                  <div key={index} className="pl-10 relative">
                    <div className="absolute left-0 top-1.5 w-3 h-3 bg-primary rounded-full border-4 border-card"></div>
                    <p className="text-sm text-muted-foreground mb-1">{job.period}</p>
                    <h4 className="text-lg font-semibold">{job.title}</h4>
                    <p className="font-medium text-primary/90">{job.company}</p>
                    <p className="mt-2 text-muted-foreground leading-relaxed text-sm">{job.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedDiv>

            <AnimatedDiv delay="0.3s">
              <h3 className="flex items-center gap-3 text-2xl font-bold mb-6 text-primary"><Code className="w-7 h-7" /> Featured Projects</h3>
              <div className="space-y-6">
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-background/50 hover:border-primary/50 hover:bg-card/50 transition-all">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                        <h4 className="font-semibold">{project.title}</h4>
                        {project.links.live && (
                           <Button variant="link" size="sm" asChild className="p-0 h-auto">
                             <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                               View Project <LinkIcon className="ml-1 w-4 h-4" />
                              </a>
                           </Button>
                        )}
                    </div>
                    <p className="mt-1 text-muted-foreground text-sm">{project.summary}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {project.tech.map(t => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}
                    </div>
                  </div>
                ))}
                 <Button asChild className="w-full mt-4">
                    <Link href="/projects">View All Projects</Link>
                 </Button>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
}

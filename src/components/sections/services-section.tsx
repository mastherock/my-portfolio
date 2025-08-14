
'use client';

import { services } from '@/data/services';
import { AnimatedDiv } from '../shared/animated-div';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  isHomePage?: boolean;
}

export default function ServicesSection({ isHomePage = false }: ServicesSectionProps) {
  const displayedServices = isHomePage ? services.slice(0, 3) : services;
  
  return (
    <section id="services" className="bg-secondary py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <AnimatedDiv>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            What I Offer
          </h2>
          <p className="text-lg text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
            From concept to deployment, I provide a complete suite of services to bring your digital vision to life.
          </p>
        </AnimatedDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {displayedServices.map((service, index) => (
            <AnimatedDiv key={service.title} delay={`${index * 0.1}s`}>
              <Dialog>
                <DialogTrigger asChild>
                  <Card 
                    className="group relative h-full text-center cursor-pointer transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 hover:border-primary overflow-hidden" 
                    data-cursor-hover
                  >
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150 blur-3xl"></div>
                    <CardHeader className="relative z-10">
                      <div className="mb-4">
                        <service.icon className="w-12 h-12 mx-auto text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.summary}</CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                       <div className="flex items-center justify-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                       </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-2xl">
                      <service.icon className="w-8 h-8 text-primary" />
                      {service.title}
                    </DialogTitle>
                    <DialogDescription className="pt-4 text-left">
                      {service.details}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </AnimatedDiv>
          ))}
        </div>

        {isHomePage && services.length > 3 && (
          <AnimatedDiv className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">Explore All Services</Link>
            </Button>
          </AnimatedDiv>
        )}
      </div>
    </section>
  );
}

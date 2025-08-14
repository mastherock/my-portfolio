import { AnimatedDiv } from '../shared/animated-div';
import { ContactForm } from '../contact-form';
import { Card, CardContent } from '../ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-secondary py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <AnimatedDiv>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Let's Build Something Great
          </h2>
          <p className="text-lg text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
            Ready to start your next project? I'm here to help. Fill out the form or use one of the channels below.
          </p>
        </AnimatedDiv>
        
        <div className="mt-20">
          <Card className="max-w-6xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <AnimatedDiv className="p-8 md:p-12 bg-card">
                  <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                  <p className="text-muted-foreground mb-8">Fill in the form to start a conversation</p>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <Mail className="h-5 w-5 text-primary"/>
                      <span>mastherock15@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="h-5 w-5 text-primary"/>
                      <span>+91 9205838459</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="h-5 w-5 text-primary"/>
                      <span>Delhi, India</span>
                    </div>
                  </div>
              </AnimatedDiv>

              <AnimatedDiv delay="0.1s" className="p-8 md:p-12 bg-background/50">
                <ContactForm />
              </AnimatedDiv>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

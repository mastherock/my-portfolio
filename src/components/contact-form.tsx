'use client';

import { useEffect, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitContactForm, type FormState } from '@/app/contact/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Loader2, Send, User, Mail, Phone, MessageSquare } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Send Message
        </>
      )}
    </Button>
  );
}

export function ContactForm() {
  const { toast } = useToast();
  const [state, formAction] = useActionState<FormState, FormData>(submitContactForm, {
    message: '',
    status: 'idle',
  });
  
  const { register, reset, formState: { errors: clientErrors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: 'Success!',
        description: state.message,
      });
      reset();
    } else if (state.status === 'error') {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast, reset]);

  const serverErrors = state.errors;

  return (
    <Card className="w-full max-w-lg border-none shadow-none bg-transparent">
      <CardContent className="p-0">
        <form action={formAction} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input id="name" {...register('name')} placeholder="Your Name" className="pl-10" />
            {(clientErrors.name || serverErrors?.name) && <p className="text-sm text-destructive mt-1">{clientErrors.name?.message || serverErrors?.name?.[0]}</p>}
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input id="email" type="email" {...register('email')} placeholder="your.email@example.com" className="pl-10" />
            {(clientErrors.email || serverErrors?.email) && <p className="text-sm text-destructive mt-1">{clientErrors.email?.message || serverErrors?.email?.[0]}</p>}
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input id="phone" type="tel" {...register('phone')} placeholder="Phone (Optional)" className="pl-10"/>
            {(clientErrors.phone || serverErrors?.phone) && <p className="text-sm text-destructive mt-1">{clientErrors.phone?.message || serverErrors?.phone?.[0]}</p>}
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
            <Textarea id="message" {...register('message')} placeholder="How can I help you?" rows={5} className="pl-10" />
            {(clientErrors.message || serverErrors?.message) && <p className="text-sm text-destructive mt-1">{clientErrors.message?.message || serverErrors?.message?.[0]}</p>}
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}

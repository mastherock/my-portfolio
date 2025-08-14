'use server';

import { z } from 'zod';
import { firestore } from '@/lib/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type FormState = {
  message: string;
  status: 'success' | 'error' | 'idle';
  errors?: Record<string, string[] | undefined>;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check your input.',
      status: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const enquiriesCollection = collection(firestore, 'enquiries');
    await addDoc(enquiriesCollection, {
      ...validatedFields.data,
      createdAt: serverTimestamp(),
    });

    return {
      message: 'Message sent successfully! Thank you for reaching out.',
      status: 'success',
    };
  } catch (error) {
    console.error('Error saving to Firestore:', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      status: 'error',
    };
  }
}

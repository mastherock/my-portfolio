import type { BlogPost } from '@/lib/types';

export const blogPosts: BlogPost[] = [
  {
    title: 'The Rise of Server Components in Next.js',
    slug: 'rise-of-server-components',
    excerpt: 'A deep dive into React Server Components and how they are changing the game for web development with Next.js.',
    date: 'October 26, 2023',
    image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmV4dC5qc3xlbnwwfHwwfHx8MA%3D%3D',
    tags: ['Next.js', 'React', 'Web Development'],
    content: `
      <p>React Server Components (RSCs) represent a paradigm shift in how we build web applications. By allowing components to run exclusively on the server, we can significantly reduce the amount of JavaScript shipped to the client, leading to faster initial page loads and a better user experience.</p>
      <p>In this post, we'll explore the core concepts of RSCs, their benefits, and how to effectively use them in your Next.js 13+ applications. We'll cover patterns for data fetching, state management, and interactivity in this new world.</p>
    `,
  },
  {
    title: 'Mastering Tailwind CSS for Rapid UI Development',
    slug: 'mastering-tailwind-css',
    excerpt: 'Learn how to leverage the full power of Tailwind CSS to build beautiful, custom user interfaces faster than ever before.',
    date: 'September 15, 2023',
    image: 'https://images.unsplash.com/photo-1731839329389-906c44fa1328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGFpbHdpbmQlMjBDU1N8ZW58MHx8MHx8fDA%3D',
    tags: ['CSS', 'Tailwind CSS', 'UI/UX'],
    content: `
      <p>Tailwind CSS is more than just a utility-first CSS framework; it's a design system in a box. It empowers developers to build complex, responsive layouts without writing a single line of custom CSS.</p>
      <p>This guide will walk you through advanced techniques, including custom theme configuration, creating plugins, and optimizing your CSS for production to ensure your UIs are both beautiful and performant.</p>
    `,
  },
  {
    title: 'Why TypeScript is a Must-Have for Modern Projects',
    slug: 'why-typescript-is-must-have',
    excerpt: 'An exploration of the benefits of using TypeScript for building robust, scalable, and maintainable applications.',
    date: 'August 01, 2023',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VHlwZVNjcmlwdCUyMGpzfGVufDB8fDB8fHww',
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    content: `
      <p>TypeScript has become an indispensable tool for modern web development. By adding static types to JavaScript, it helps catch errors during development, improves code quality, and makes large codebases easier to manage.</p>
      <p>We'll discuss the key advantages of TypeScript, such as improved autocompletion, refactoring confidence, and creating self-documenting code. If you're not using TypeScript yet, this post will convince you to start.</p>
    `,
  },
  {
    title: 'The Power of Headless CMS for Modern Web Development',
    slug: 'power-of-headless-cms',
    excerpt: 'Discover how decoupling your frontend from your backend with a Headless CMS can lead to more flexible and scalable web solutions.',
    date: 'July 20, 2023',
    image: 'https://images.unsplash.com/photo-1563884705074-7c8b15f16295?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q01TJTIwZm9yJTIwTW9kZXJufGVufDB8fDB8fHww',
    tags: ['CMS', 'Headless', 'Jamstack', 'WordPress'],
    content: `
      <p>A Headless CMS separates the content management backend from the presentation layer (the "head"). This architecture gives developers the freedom to build frontends with any technology they choose, like Next.js or React, while content creators use a friendly interface to manage content.</p>
      <p>This post explores the benefits of going headless, such as improved performance, enhanced security, and omni-channel content delivery. We'll also compare popular headless CMS options.</p>
    `,
  },
  {
    title: 'Digital Marketing for Developers: A Primer',
    slug: 'digital-marketing-for-developers',
    excerpt: 'As a developer, understanding the basics of digital marketing can significantly boost your project\'s success. Learn the essentials of SEO, content, and social media.',
    date: 'June 05, 2023',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGlnaXRhbCUyME1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    tags: ['Marketing', 'SEO', 'Developers', 'Business'],
    content: `
      <p>You've built an amazing app, but how do you get people to use it? This is where digital marketing comes in. Understanding core concepts like Search Engine Optimization (SEO), content marketing, and user engagement can make a huge difference.</p>
      <p>In this article, we break down the key pillars of digital marketing from a developer's perspective, providing actionable tips you can implement in your own projects to increase visibility and attract users.</p>
    `,
  },
  {
    title: 'Building a High-Converting E-commerce Site with Shopify',
    slug: 'building-high-converting-ecommerce-site',
    excerpt: 'A step-by-step guide to the best practices for creating a Shopify store that not only looks great but also drives sales effectively.',
    date: 'May 10, 2023',
    image: 'https://plus.unsplash.com/premium_photo-1681488350342-19084ba8e224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RSUyMGNvbW1lcmNlfGVufDB8fDB8fHww',
    tags: ['E-commerce', 'Shopify', 'UI/UX', 'CRO'],
    content: `
      <p>Launching an e-commerce store is easier than ever, but building one that converts visitors into customers requires careful planning. From a seamless user journey to a fast and secure checkout, every detail matters.</p>
      <p>This guide covers essential strategies for designing and developing a successful Shopify store, including mobile-first design, optimizing product pages, and leveraging apps to enhance functionality and boost conversion rates (CRO).</p>
    `,
  },
];

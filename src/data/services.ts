import { Code, Layout, Search, type LucideIcon, ShoppingCart, Newspaper, Lightbulb } from 'lucide-react';

export const services: {
  icon: LucideIcon;
  title: string;
  summary: string;
  details: string;
}[] = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    summary: 'End-to-end development of web applications, from database to UI.',
    details:
      'I provide comprehensive web development services using modern technology stacks. Whether you need a dynamic single-page application, a robust e-commerce platform, or a custom API, I can deliver a high-quality, scalable, and maintainable solution tailored to your specific needs.',
  },
  {
    icon: Layout,
    title: 'UI/UX Design & Strategy',
    summary: 'Creating intuitive and beautiful user interfaces that users love.',
    details:
      'A great product starts with a great user experience. I focus on creating user-centric designs that are not only visually appealing but also easy to use. My process involves wireframing, prototyping, and user testing to ensure the final product is both beautiful and functional.',
  },
  {
    icon: Search,
    title: 'SEO & Performance',
    summary: 'Optimizing your web presence for search engines and speed.',
    details:
      'In today\'s competitive digital landscape, visibility and speed are crucial. I offer services to improve your website\'s ranking on search engines and optimize its performance for lightning-fast load times. This includes technical SEO, on-page optimization, and performance tuning.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    summary: 'Building scalable and user-friendly online stores.',
    details:
      'I create complete e-commerce solutions using platforms like Shopify or custom-built systems. From product catalogs and payment gateways to user account management, I deliver online stores that drive sales and provide a seamless shopping experience.',
  },
  {
    icon: Newspaper,
    title: 'CMS Development',
    summary: 'Developing custom websites using CMS platforms like WordPress.',
    details:
      'I specialize in developing and customizing websites using Content Management Systems like WordPress. This allows you to easily manage your website content, from blog posts to page updates, without needing any technical expertise.',
  },
  {
    icon: Lightbulb,
    title: 'Content Strategy',
    summary: 'Planning and creating engaging content for your digital platforms.',
    details:
      'Content is king. I help devise a content strategy that aligns with your brand and business goals. From engaging blog posts that drive traffic to compelling website copy that converts visitors into customers, I can help you tell your story effectively.',
  },
];

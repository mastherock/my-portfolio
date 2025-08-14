export interface Project {
  title: string;
  slug: string;
  summary: string;
  tech: string[];
  images: string[];
  links: {
    live?: string;
  };
  details: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  image: string;
  tags: string[];
  content: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description?: string;
}

export interface SystemRequirement {
  title: string;
  specs: string[];
}

export interface HeroSection {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export interface AboutSection {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
}

export interface NewsletterForm {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}
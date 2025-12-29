
export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  email: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

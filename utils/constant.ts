interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Jane Doe',
    role: 'IT Manager',
    company: 'TechCorp',
    quote: 'SoftSell made selling our unused licenses a breeze. Fast, secure, and great support!',
  },
  {
    name: 'John Smith',
    role: 'CFO',
    company: 'Innovate Ltd.',
    quote: 'The valuation was fair, and we got paid quickly. Highly recommend SoftSell!',
  },
];
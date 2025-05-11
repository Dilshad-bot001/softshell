# SoftSell - Software License Resale Platform

SoftSell is a responsive, single-page marketing website for a fictional software resale startup, built with TypeScript for type safety. It uses Next.js (App Router), Tailwind CSS, Clerk for authentication, and Framer Motion for animations. The project includes all required features plus bonus points.

## Features Implemented
- **Hero Section**: Bold headline, subheading, and CTA button ("Get a Quote") with Clerk authentication.
- **How It Works**: Three-step process (Upload License, Get Valuation, Get Paid) with icons and animations.
- **Why Choose Us**: Four tiles with icons and descriptions highlighting benefits.
- **Customer Testimonials**: Two dummy reviews with name, role, and company.
- **Contact Form**: Form with name, email, company, license type (dropdown), and message, including frontend validation.
- **Chat Widget**: Mock LLM-powered chat with predefined questions and responses.
- **Bonus Features**:
  - Placeholder logo and favicon.
  - SEO meta tags and page title.
  - Light/dark mode toggle.
  - Framer Motion animations for smooth transitions.
  - Clerk authentication for secure sign-in.
  - TypeScript for type-safe code.

## Design Choices
- **Color Palette**: Blue (`#1E3A8A`, `#3B82F6`) for trust and professionalism, with yellow (`#F59E0B`) as an accent for CTAs.
- **Typography**: Inter font for clean, modern readability.
- **UI/UX**: Responsive grid layout, mobile-first design, and subtle animations inspired by Dribbble references.
- **Chat Widget**: Positioned bottom-right, with mock responses to simulate an LLM. Predefined questions improve UX.
- **Dark Mode**: Toggled via a button, using Tailwind's dark mode classes.
- **Authentication**: Clerk provides a seamless sign-in experience for the "Get a Quote" CTA.
- **TypeScript**: Interfaces and types ensure robust code, especially for form data, component props, and state.

## Time Spent
- Planning and setup: 1 hour
- UI design and Tailwind styling: 2 hours
- Component development: 3 hours
- Animations and chat widget: 1.5 hours
- Clerk integration and TypeScript typing: 1.5 hours
- README and documentation: 0.5 hours
- **Total**: ~9.5 hours

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

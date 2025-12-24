# Premium Developer Portfolio

A futuristic, premium portfolio website built with Next.js, TypeScript, and Framer Motion. Designed to showcase senior-level development skills with a modern, Apple/Vercel-inspired aesthetic.

## Features

- **Modern Design**: Glassmorphism effects, subtle animations, and premium typography
- **Responsive**: Mobile-first design that works across all devices
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **Interactive**: Smooth animations and micro-interactions using Framer Motion
- **Accessible**: Semantic HTML and keyboard navigation support

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography
- **TypeScript**: Full type safety throughout the application

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Customization

### Personal Information
Update the following files with your information:
- `components/Hero.tsx` - Main headline and introduction
- `components/About.tsx` - Professional summary and focus areas
- `components/Projects.tsx` - Featured projects and case studies
- `components/Experience.tsx` - Work history and achievements
- `components/CallToAction.tsx` - Contact information

### Design System
The design system is configured in `tailwind.config.js`:
- **Colors**: Dark base, graphite, and accent colors (blue, violet, emerald)
- **Typography**: Inter for headings, JetBrains Mono for code
- **Animations**: Custom keyframes for glow and float effects

### Content Structure

#### Hero Section
- Compelling headline with gradient text
- Professional subtitle
- Two clear CTAs (View Work, Book a Call)
- Animated background with particles

#### About Section
- Professional narrative (4-5 sentences)
- Tech focus cards with icons
- Emphasis on experience and leadership

#### Skills Section
- Categorized technical skills
- Hover tooltips with context
- Clean, organized layout

#### Projects Section
- Featured project cards
- Problem statements and solutions
- Technology stacks and impact metrics
- Links to case studies and demos

#### Experience Timeline
- Chronological work history
- Key achievements for each role
- Visual timeline with animated elements

#### Call to Action
- Clear contact methods
- Professional availability status
- Gradient background effects

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Performance Considerations

- Images are optimized using Next.js Image component
- Animations are GPU-accelerated where possible
- Code splitting is handled automatically by Next.js
- CSS is purged in production builds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
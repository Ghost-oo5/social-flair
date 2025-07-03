
# SocialFlair
AI-powered video creation platform designed for modern marketers. Create professional UGC and commercial video ads in minutes, not weeks, with advanced AI technology.

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Environment Variables](#environment-variables)
5. [Scripts](#scripts)
6. [Project Structure](#project-structure)
7. [Deployment](#deployment)
8. [Contributing](#contributing)
9. [License](#license)

## Features
- **UGC Studio**: Authentic creator-style videos with realistic AI actors and environments.
- **Commercial Studio**: Professional brand videos optimized for marketing ROI.
- **Templates & Magic AI**: Pre-built templates and proprietary prompt optimization for superior video quality.
- **Examples Gallery**: Filterable showcase of real customer videos by category (UGC, Commercial, Product Demos).
- **Pricing Toggle**: Switch between monthly and annual pricing with discounts.
- **Authentication**: User signup/login powered by [Clerk](https://clerk.com).
- **Responsive UI**: Built with React, Next.js and Tailwind CSS for a seamless experience on all devices.

## Tech Stack
- **Framework**: Next.js 15  
- **Language**: TypeScript, React  
- **Styling**: Tailwind CSS  
- **Authentication**: Clerk  
- **Icons**: lucide-react  

## Getting Started
1. **Clone the repo**  
   ```bash
   git clone https://github.com/ghost-oo5/social-flair.git
   cd social-flair


2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Add environment variables**

   * Copy `.example.env` to `.env.local` and fill in your Clerk keys.

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

## Scripts

* `dev`: Start development server with Turbopack
* `build`: Build for production
* `start`: Start the production server
* `lint`: Run ESLint

## Project Structure

```
├── app/
│   ├── components/       # UI components (Hero, Features, FAQ, etc.)
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout with Header & Footer
│   └── page.tsx          # Home page combining sections
├── middleware.ts         # Clerk middleware
├── next.config.ts        # Next.js configuration
├── package.json          # Scripts & dependencies
├── tsconfig.json         # TypeScript config
└── .example.env          # Environment variable template
```

## Deployment

Deploy easily on [Vercel](https://vercel.com):

1. Connect your GitHub repo.
2. Add environment variables in Vercel dashboard.
3. Deploy!

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT © SocialFlair Team

```
```

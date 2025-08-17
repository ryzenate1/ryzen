# RYZEN STUDIO - Deployment Guide

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fryzenate1%2Fryz)

## 📋 Prerequisites

1. **Node.js 18+** (Vercel requirement)
2. **Sanity Studio** account and project
3. **Resend** account for email functionality
4. **Vercel** account

## 🛠️ Environment Variables

Set these in your Vercel dashboard under **Settings > Environment Variables**:

```env
PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your-sanity-read-token
SANITY_API_WRITE_TOKEN=your-sanity-write-token
RESEND_API_KEY=your-resend-api-key
SITE_URL=https://your-domain.vercel.app
```

## 🔧 Manual Deployment Steps

1. **Fork/Clone Repository**
   ```bash
   git clone https://github.com/ryzenate1/ryz.git
   cd ryz
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Configure Environment**
   - Copy `.env.example` to `.env.local`
   - Fill in your API keys and configuration

4. **Deploy to Vercel**
   ```bash
   vercel
   ```

## 🎯 Features Included

- ✅ **Terminal Bootloader** - Interactive SSH-style welcome screen
- ✅ **Portfolio Showcase** - Dynamic project gallery
- ✅ **Contact System** - Email integration with Resend
- ✅ **Sanity CMS** - Content management at `/admin`
- ✅ **SEO Optimized** - Meta tags, sitemap, robots.txt
- ✅ **Performance** - Image optimization, caching headers
- ✅ **Security** - Security headers, XSS protection
- ✅ **PWA Ready** - Service worker, web manifest

## 📱 Pages Structure

- `/` - Main portfolio with bootloader
- `/ambition` - Interactive terminal experience
- `/fun` - Fun zone with particles and games
- `/admin` - Sanity Studio CMS
- `/imprint` - Legal information

## 🎨 Customization

- **Branding**: Update `src/lib/config/site.ts`
- **Colors**: Modify `tailwind.config.js`
- **Content**: Manage via Sanity Studio at `/admin`
- **Bootloader**: Edit `src/components/layout/bootloader.tsx`

## 🔍 Key Technical Details

- **Framework**: Astro with React components
- **Styling**: Tailwind CSS with custom animations
- **CMS**: Sanity Studio integrated
- **Email**: Resend API for contact forms
- **Deployment**: Vercel with serverless functions
- **Image Optimization**: Configured for performance

## 🚨 Troubleshooting

### Build Issues
- Ensure Node.js 18+ is used
- Clear `node_modules` and reinstall if needed
- Check environment variables are set

### Bootloader Not Working
- Clear browser localStorage
- Check console for JavaScript errors
- Verify all React components load properly

### Email Not Sending
- Verify Resend API key is correct
- Check domain verification in Resend dashboard
- Ensure `SITE_URL` matches your deployment URL

## 📞 Support

For issues or questions, check the repository discussions or create an issue.

---

**Built with 💻 by RYZEN STUDIO**

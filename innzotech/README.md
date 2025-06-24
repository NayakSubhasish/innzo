# Innzotech Solutions - Zoho Consulting Website

A modern, responsive website for Innzotech Solutions, a professional Zoho consulting and implementation company. Built with React, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional design inspired by modern SaaS websites
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations using Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Optimized for speed and performance

## Pages

- **Home**: Hero section, services overview, benefits, and call-to-action
- **Services**: Detailed service offerings (CRM, Books, People, Creator)
- **About**: Company story, values, and achievements
- **FAQ**: Common questions and answers
- **Contact**: Contact form and company information

## Technologies Used

- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **Vite**: Fast build tool

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd innzotech
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation component
│   └── Footer.js       # Footer component
├── pages/              # Page components
│   ├── Home.js         # Home page
│   ├── Services.js     # Services page
│   ├── About.js        # About page
│   ├── FAQ.js          # FAQ page
│   └── Contact.js      # Contact page
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        // ... other shades
        600: '#2563eb',
      },
      secondary: {
        // ... secondary colors
      }
    }
  }
}
```

### Content
All content is in English and can be easily modified in the respective component files.

### Styling
The website uses Tailwind CSS classes for styling. You can modify the design by changing these classes or adding custom CSS.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### Other Platforms
The built files in the `dist` directory can be deployed to any static hosting service.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact us at contact@innzotech.com

---

Built with ❤️ by Innzotech Solutions 
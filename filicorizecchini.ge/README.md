# Filicori Zecchini Georgia - Coffee Brand Portfolio Website

## Overview
A modern, lightweight bilingual portfolio website for the Italian coffee brand Filicori Zecchini, specifically designed for the Georgian market. The website features separate language versions (English and Georgian) with dedicated pages for each language.

## Features
- **Bilingual Support**: English (/en/) and Georgian (/ka/) language versions
- **Responsive Design**: Mobile-friendly layout with modern CSS Grid and Flexbox
- **Brand Colors**: Custom CSS variables using the official brand color palette
- **Fast Loading**: Lightweight structure with placeholder images for optimal performance
- **Professional Forms**: Contact forms, order requests, and rental inquiries
- **Modern UI**: Clean, minimalist design following current web design trends

## Brand Color Palette
- Light Beige: #EAE2CC
- Gray-Olive: #99967D
- Brown: #78604A
- Dark Green: #1C664D
- Bright Yellow: #E7CB0E

## Typography
- **Primary Font**: Montserrat (for headings)
- **Secondary Font**: Open Sans (for body text)
- **Fallback**: System sans-serif fonts

## File Structure
```
filicorizecchini.ge/
├── www/
│   ├── index.html              # Main redirect page
│   ├── styles.css              # Main stylesheet
│   ├── script.js               # JavaScript functionality
│   ├── en/                     # English version pages
│   │   ├── home.html          # Home page (EN)
│   │   ├── about.html         # About Us (EN)
│   │   ├── products.html      # Products (EN)
│   │   ├── rental.html        # Machine Rental (EN)
│   │   ├── contact.html       # Contact (EN)
│   │   └── order.html         # Order/Quote (EN)
│   └── ka/                     # Georgian version pages
│       ├── home.html          # Home page (KA)
│       ├── about.html         # About Us (KA)
│       ├── products.html      # Products (KA)
│       ├── rental.html        # Machine Rental (KA)
│       ├── contact.html       # Contact (KA)
│       └── order.html         # Order/Quote (KA)
└── README.md                   # This file
```

## Pages Structure
Each language version includes the following pages:

### 1. Home (/en/home, /ka/home)
- Brand banner with slogan
- About section with company history
- Product showcase (Coffee Beans, Capsules, Tea, Chocolate)
- Machine rental information
- "Why choose us" features list
- Call-to-action sections

### 2. About Us (/en/about, /ka/about)
- Company history and legacy
- Core values and mission
- Team information
- Certifications and achievements

### 3. Products (/en/products, /ka/products)
- Premium coffee beans
- Espresso capsules
- Tea collection
- Italian chocolate
- Professional equipment

### 4. Machine Rental (/en/rental, /ka/rental)
- Rental benefits and options
- Available equipment
- Rental process
- Pricing plans
- Support services

### 5. Contact (/en/contact, /ka/contact)
- Contact information
- Department contacts
- Contact form
- Business hours
- Location information

### 6. Order (/en/order, /ka/order)
- Purchase equipment forms
- Rental inquiry forms
- Service request forms
- Training inquiry forms

## Technical Features

### CSS Custom Properties
All brand colors are defined as CSS custom properties in `:root` for easy maintenance and consistency.

### Responsive Design
- Mobile-first approach
- CSS Grid and Flexbox layouts
- Media queries for different screen sizes
- Optimized for mobile, tablet, and desktop

### JavaScript Functionality
- Language switching between EN/KA versions
- Form validation and submission handling
- Smooth scrolling for anchor links
- Mobile menu functionality

### Image Placeholders
All images use placeholder elements with specified dimensions and alt text for easy replacement with actual content.

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

## Performance Features
- Lightweight CSS and JavaScript
- Optimized font loading with preconnect
- Minimal external dependencies
- Fast loading times

## Getting Started

### 1. Local Development
1. Clone or download the project files
2. Open `www/index.html` in a web browser
3. Navigate to `/en/home` for English version or `/ka/home` for Georgian version

### 2. Web Server Deployment
1. Upload all files to your web server
2. Ensure the server supports HTML5 routing
3. Set up proper redirects for language switching

### 3. Customization
- Replace placeholder images with actual brand photos
- Update contact information and business details
- Modify content to match specific business requirements
- Adjust color scheme if needed using CSS custom properties

## Content Management
- All text content is easily editable in HTML files
- Language versions are maintained separately for easy updates
- Forms can be connected to backend systems or email services
- Placeholder images are clearly marked for easy replacement

## SEO Features
- Proper HTML5 semantic structure
- Meta descriptions and titles for each page
- Alt text for all images
- Clean URL structure
- Mobile-friendly design (Google ranking factor)

## Support and Maintenance
- Regular content updates
- Form functionality testing
- Cross-browser compatibility checks
- Performance monitoring
- Security updates

## Contact Information
For technical support or customization requests:
- Email: [Your Email]
- Website: [Your Website]
- Phone: [Your Phone]

---

**Note**: This website is designed as a lightweight, fast-loading portfolio site. For production use, consider adding analytics, security measures, and backend functionality for forms and content management.

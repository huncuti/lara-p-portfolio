# Hosting Guide - Lara Petrović Portfolio Website

## 🌐 Live Website
Your portfolio website is now live at: **https://jcg2xbuc6o6vw.ok.kimi.link**

## 📁 Project Structure
```
/mnt/okcomputer/output/
├── index.html              # Main landing page
├── about.html              # About & education page
├── research.html           # Research experience page
├── contact.html            # Contact form page
├── main.js                 # Core JavaScript functionality
├── design.md               # Design philosophy
├── interaction.md          # Interaction design
├── outline.md              # Project outline
├── HOSTING_GUIDE.md        # This guide
└── resources/              # Media assets
    ├── hero-workspace.png  # Hero background image
    └── paper-texture.png   # Paper texture background
```

## 🚀 How to Host Your Website Publicly

### Option 1: GitHub Pages (Recommended - Free & Easy)

1. **Create a GitHub Account**
   - Go to [github.com](https://github.com) and sign up
   - Verify your email address

2. **Create a New Repository**
   - Click "New" or go to [github.com/new](https://github.com/new)
   - Name your repository: `lara-petrovic-portfolio`
   - Make it **Public**
   - Don't initialize with README
   - Click "Create repository"

3. **Upload Your Files**
   - Download all files from `/mnt/okcomputer/output/` to your computer
   - On GitHub, click "uploading an existing file"
   - Drag and drop all files and the `resources` folder
   - Commit the files

4. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click Save
   - Your site will be live at: `https://yourusername.github.io/lara-petrovic-portfolio/`

### Option 2: Netlify (Free & Professional)

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com) and sign up
   - You can use GitHub login

2. **Deploy Your Site**
   - Drag your entire `output` folder to Netlify dashboard
   - Your site will be live instantly with a custom URL
   - You can customize the domain name

### Option 3: Vercel (Free & Fast)

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com) and sign up

2. **Deploy Your Site**
   - Import your GitHub repository (if using Option 1)
   - Or drag and drop your files directly
   - Your site will be live with automatic HTTPS

## 🛠️ Customization Instructions

### Updating Content
1. **Edit HTML files** to update text content
2. **Replace images** in the `resources/` folder
3. **Modify colors** in CSS sections of HTML files
4. **Update contact information** in `contact.html`

### Design Customization
- **Colors**: Modify CSS variables in each HTML file
- **Fonts**: Change Google Fonts imports in `<head>` section
- **Animations**: Adjust parameters in `main.js`
- **Paper Texture**: Replace `resources/paper-texture.png`

### Adding New Pages
1. Create new HTML file following existing structure
2. Copy CSS styles from existing pages
3. Update navigation in all pages
4. Add to `main.js` for consistent interactions

## 📱 Responsive Design Features
- Mobile-first responsive layout
- Touch-friendly interactions
- Optimized for all screen sizes
- Fast loading with optimized assets

## 🔧 Technical Features Implemented
- **Typewriter Effects**: Authentic typing animations
- **Scroll Animations**: Smooth reveal on scroll
- **Interactive Timeline**: Expandable research details
- **Audio Feedback**: Typewriter sound effects
- **Paper Texture**: Vintage aesthetic overlay
- **Contact Form**: Functional with validation
- **Responsive Grid**: Adapts to all devices

## 🎨 Design Features
- Vintage typewriter aesthetic
- Academic paper styling
- Warm, muted color palette
- Authentic typography (Special Elite, Courier Prime)
- Subtle aging effects
- No modern UI elements

## 📊 Performance Optimizations
- Optimized images with proper compression
- Efficient CSS and JavaScript
- Minimal external dependencies
- Fast loading times
- SEO-friendly structure

## 🔗 External Libraries Used
- **Anime.js**: Animation engine
- **Typed.js**: Typewriter effects
- **Splitting.js**: Text manipulation
- **Google Fonts**: Typography (Special Elite, Courier Prime)

## 📧 Contact Integration
The contact form is set up to work with:
- Formspree (free): Add your email to form action
- Netlify Forms: Automatic if hosted on Netlify
- Custom backend: Update form action URL

## 🔄 Maintenance
- Regular updates to research content
- Check for broken links
- Update contact information as needed
- Monitor performance and accessibility

## 🆘 Support
If you need help with hosting or customization:
1. Check the original design files (`design.md`, `interaction.md`)
2. Review the project structure in `outline.md`
3. Test locally before deploying changes
4. Use browser developer tools for debugging

## 🎯 Next Steps
1. **Test the live site**: Visit https://jcg2xbuc6o6vw.ok.kimi.link
2. **Choose hosting option**: GitHub Pages recommended
3. **Customize content**: Update with your latest information
4. **Share your portfolio**: Add to LinkedIn, CV, email signature
5. **Keep it updated**: Regular content updates

Your portfolio is now ready to showcase your impressive research background in psychology! The typewriter aesthetic perfectly complements your academic credentials and creates a memorable, professional impression.
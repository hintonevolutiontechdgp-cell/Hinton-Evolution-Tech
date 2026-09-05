const fs = require('fs');
const path = require('path');

const seoData = {
  'FaqPage.tsx': { title: "FAQ | Hinton Evolution Tech", desc: "Frequently asked questions about our web development, SEO, and digital growth services." },
  'PolicyPage.tsx': { title: "Policies | Hinton Evolution Tech", desc: "Legal, privacy, and refund policies for Hinton Evolution Tech." },
  'PortfolioPage.tsx': { title: "Portfolio | Hinton Evolution Tech", desc: "View our recent website design, software engineering, and digital growth projects." },
  'PricingPage.tsx': { title: "Pricing & Packages | Hinton Evolution Tech", desc: "Transparent, value-driven pricing packages for website development and digital marketing." },
  'ProcessPage.tsx': { title: "Our Process | Hinton Evolution Tech", desc: "How we build high-performing, revenue-driving websites and digital solutions." },
  'SolutionsPage.tsx': { title: "Digital Solutions | Hinton Evolution Tech", desc: "Tailored software and performance marketing solutions to scale your business." },
};

const pagesDir = path.join(__dirname, 'src/components/pages');

for (const [filename, seo] of Object.entries(seoData)) {
  const filePath = path.join(pagesDir, filename);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('import { SEO }')) continue;

  // 1. Add import
  content = content.replace(/(import .*?;)/, `$1\nimport { SEO } from '../SEO';`);

  // 2. Add SEO component at start of return
  const returnMatch = content.match(/return\s*\(\s*(<div|<section|<main|<motion\..*?>)/);
  if (returnMatch) {
    const seoComponent = `\n    <>\n      <SEO \n        title="${seo.title}"\n        description="${seo.desc}"\n      />\n      ${returnMatch[1]}`;
    content = content.replace(returnMatch[0], `return (${seoComponent}`);
    
    // 3. Add closing fragment
    const lastTagMatch = content.match(/(\s*<\/(?:div|section|main|motion\..*?)>)\s*\);\s*}\s*$/);
    if (lastTagMatch) {
       content = content.replace(lastTagMatch[0], `${lastTagMatch[1]}\n    </>\n  );\n}`);
    } else {
       console.log(`Failed to close fragment for ${filename}`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filename}`);
  } else {
    console.log(`Failed to find return for ${filename}`);
  }
}

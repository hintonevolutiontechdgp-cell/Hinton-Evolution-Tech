import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  schema?: Record<string, any>;
}

export function SEO({ title, description, canonical, type = 'website', schema }: SEOProps) {
  // Default Organization Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hinton Evolution Tech",
    "url": "https://www.hintonevolution.com/",
    "logo": "https://www.hintonevolution.com/android-chrome-512x512.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Bengali", "Hindi"]
    }
  };

  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {canonical && <link rel="canonical" href={canonical} />}

      {/* Structured Data (Schema.org) */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
}

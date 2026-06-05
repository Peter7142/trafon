import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SITE_URL = 'https://www.trafon.sk';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export const SEOHead = ({
  title,
  description,
  keywords = 'trafostanice, transformátory, revízie VN/NN, kenotrónovanie, TRAFON',
  image,
  url,
}: SEOHeadProps) => {
  const resolvedUrl = url
    ? (url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`)
    : (typeof window !== 'undefined' ? window.location.href : SITE_URL);
  const resolvedImage = image
    ? (image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`)
    : DEFAULT_IMAGE;
  const fullTitle = `${title} | TRAFON`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={resolvedUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={resolvedUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:site_name" content="TRAFON" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={resolvedUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedImage} />
    </Helmet>
  );
};

import React from 'react';
import { Helmet } from 'react-helmet';
import { useSeoQuery } from './Seo.graph';

function SEO({ title, description, lang }: { title?: string; description?: string; lang?: string }) {
  const { site, preview } = useSeoQuery();

  const seo = {
    title: title || lang === 'es' ? 'Jesús David Bossa | Portafolio' : site.siteMetadata.title,
    description:
      description || lang === 'es'
        ? 'Portafolio de Jesús David Bossa. Aqui comparto mi experiencia dando a conocer mis proyectos y como es mi forma de trabajo'
        : site.siteMetadata.description,
    image: `https://jesusbossa.dev${preview.childImageSharp.gatsbyImageData.images.fallback.src}`,
    url: site.siteMetadata.siteUrl,
    lang: lang || 'en',
  };

  return (
    <Helmet title={seo.title} titleTemplate={seo.title} htmlAttributes={{ lang: seo.lang }}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="makinox" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}

      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap"
        as="style"
        onload="this.onload=null;this.rel='stylesheet'"
      />
      <noscript>{`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" />`}</noscript>
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
        as="style"
        onload="this.onload=null;this.rel='stylesheet'"
      />
      <noscript>{`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" />`}</noscript>
    </Helmet>
  );
}
export default SEO;

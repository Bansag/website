import { Helmet } from "react-helmet-async";

const SITE_NAME = "Bansag";
const BASE_URL = "https://bansag.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-default.png`;

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  keywords?: string;
  schemaJson?: object | object[];
}

export default function SeoHead({
  title,
  description,
  canonicalPath,
  ogImage = DEFAULT_OG_IMAGE,
  keywords,
  schemaJson,
}: SeoHeadProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;

  const schemas = schemaJson
    ? Array.isArray(schemaJson)
      ? schemaJson
      : [schemaJson]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_PH" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Helmet>
  );
}

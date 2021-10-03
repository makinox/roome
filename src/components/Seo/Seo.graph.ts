import { useStaticQuery, graphql } from 'gatsby';
import { SeoQuery } from '../../../graphql-types';

export const useSeoQuery = () => {
  const data: SeoQuery = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            keywords
          }
        }
        preview: file(relativePath: { eq: "preview.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              height: 630
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              transformOptions: { fit: COVER, cropFocus: NORTH }
            )
          }
        }
      }
    `
  );
  return data;
};

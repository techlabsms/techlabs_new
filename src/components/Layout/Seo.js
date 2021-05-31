import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"
import { useStaticQuery, graphql } from "gatsby"
import OGImage from "../../assets/images/startPage.png"

// plugins

const Seo = ({ title, description, lang, canonical, url, image }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          image
          title
          url
        }
      }
    }
  `)

  const metaTitle = title ? `${title} | TechLabs` : data.site.siteMetadata.title
  const metaDescription = description || data.site.siteMetadata.description
  const metaImage = image
    ? `${data.site.siteMetadata.url}${image}`
    : `${data.site.siteMetadata.url}${OGImage}`

  return (
    <>
      <GatsbySeo
        title={metaTitle}
        description={metaDescription}
        language={lang || "en"}
        canonical={canonical || data.site.siteMetadata.url}
        openGraph={{
          url: url || data.site.siteMetadata.url,
          title: metaTitle,
          description: metaDescription,
          locale: lang || "en",
          images: [
            {
              url: metaImage,
              width: 800,
              height: 600,
              alt: metaTitle,
            },
            {
              url: metaImage,
              width: 900,
              height: 800,
              alt: metaImage,
            },
          ],
          site_name: metaTitle,
        }}
      />
    </>
  )
}

export default Seo

import React from "react"
import { Helmet } from "react-helmet"
import thumbnail from "../assets/images/jpg-png/thumbnail.png"

const SEO = () => {
  return (
    <Helmet
      title="Ken Javier"
      meta={[
        {
          property: `og:title`,
          content: "Ken Javier",
        },
        {
          property: `og:type`,
          content: `portfolio`,
        },
        {
          property: `og:image`,
          content: thumbnail,
        },
      ]}
    />
  )
}

export default SEO

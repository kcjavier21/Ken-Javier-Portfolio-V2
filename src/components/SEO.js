import React from "react"
import {Helmet} from "react-helmet"
// import thumbnail from "../assets/images/jpg-png/thumbnail.png"

const SEO = () => {
    return (
        <Helmet>
            <meta property="og:title" content="Ken Javier" />
            <meta property="og:image" content="../assets/images/jpg-png/thumbnail.png"/>
            <title>Ken Javier</title>
        </Helmet>
    )
}

export default SEO

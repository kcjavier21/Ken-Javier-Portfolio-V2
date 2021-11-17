import React from "react"
import {Helmet} from "react-helmet"
import thumbnail from "../assets/images/jpg-png/thumbnail.png"

const SEO = () => {
    return (
        <Helmet>
            <title>Ken Javier</title>
            <meta property="og:image" content={thumbnail}/>
        </Helmet>
    )
}

export default SEO

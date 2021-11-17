import React from "react"
import {Helmet} from "react-helmet"
import thumbnail from "../assets/images/jpg-png/thumbnail.png"

const SEO = () => {
    return (
        <Helmet>
            <meta name="title" content="Ken Javier" />
            <meta name="image" content={thumbnail}/>
            <title>Ken Javier</title>
        </Helmet>
    )
}

export default SEO

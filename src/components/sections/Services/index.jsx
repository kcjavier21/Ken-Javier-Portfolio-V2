import React from "react"
import Services from "./Services"
import Tools from "./Tools"
// @ts-ignore
import * as styles from "./styles/css/services.module.css"

const ServicesAndTools = () => {
  return (
    <main className={styles.services}>
      <Services />
      <Tools />
    </main>
  )
}

export default ServicesAndTools

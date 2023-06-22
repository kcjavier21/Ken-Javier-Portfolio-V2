import React from 'react'
import DevTools from './DevTools'
import DesignTools from './DesignTools'

// @ts-ignore
import * as styles from './styles/css/services.module.css'

const Tools = () => {
  return (
    <section className={styles.tools}>
      <h1>Equipped with these tools!</h1>
      <DevTools />
      <DesignTools />
    </section>
  )
}

export default Tools

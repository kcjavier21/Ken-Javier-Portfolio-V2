import React from 'react'
import { designTools } from '../../../assets/data/tools'

// @ts-ignore
import * as styles from './styles/css/services.module.css'

const DesignTools = () => {
  return (
    <>
      <h3>In Designing</h3>
      <div className={styles.devTools}>
        {designTools.map(tool => (
          <div className={styles.devTool} key={tool.name}>
            <img
              src={tool.image.default}
              className={styles[tool.name]}
              alt={tool.name}
            />
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default DesignTools

import React from 'react'
import { devTools } from '../../../assets/data/tools'

// @ts-ignore
import * as styles from './styles/css/services.module.css'

const DevTools = () => {
  return (
    <>
      <h3>In Developing</h3>
      <div className={styles.devTools}>
        {devTools.map(tool => (
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

export default DevTools

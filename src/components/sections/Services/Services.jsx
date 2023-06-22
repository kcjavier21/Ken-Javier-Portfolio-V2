import React from 'react'
import { servicesList } from "../../../assets/data/tools"

// @ts-ignore
import * as styles from './styles/css/services.module.css'

const Services = () => {
  return (
    <>
      {/* === SERVICES ==== */}
      <h1>What I can do for you</h1>

      <div className={styles.serviceCards}>
        {servicesList.map(item => (
          <div className={styles.serviceCard} key={item.name}>
            <img src={item.image.default} alt={item.alternative} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Services

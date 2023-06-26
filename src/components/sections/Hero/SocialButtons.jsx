import React from 'react'
import { socialMediaLinks } from '../../../assets/data/socialMediaLinks'

// @ts-ignore
import * as styles from './styles/css/hero.module.css'

const SocialButtons = () => {
  return (
    <>
      {/* === Buttons of Social Networking sites ====*/}
      <div className={styles.socialButtons}>
        {socialMediaLinks.map(item => (
          <a href={item.link} target="_blank" rel="noreferrer" key={item.site}>
            <img src={item.image.default} alt={`Ken Javier on ${item.site}`} />
          </a>
        ))}
      </div>
    </>
  )
}

export default SocialButtons

import React from 'react';
import * as styles from './styles/css/services.module.css';

import webDev from '../../../assets/images/svg/WebDev.svg';
import webDesign from '../../../assets/images/svg/WebDesign.svg';
import uiuxDesign from '../../../assets/images/svg/UI-UXDesign.svg';

const Services = () => {
    return (
        <main className={styles.services} >
            <h1>What I can do for you</h1>

            <div className={styles.serviceCards}>
                <div className={styles.serviceCard}>
                    <img src={webDev} alt="Ken Javier can develop websites and web apps for you." />
                    <h3>Web Development</h3>
                    <p>Have a stylish, responsive, and mobile-friendly website and web applications made with top and powerful tech tools!</p>
                </div>

                <div className={styles.serviceCard}>
                    <img src={webDesign} alt="Ken Javier can design websites and web apps for you." />
                    <h3>Web Design</h3>
                    <p>Have a stylish, responsive, and mobile-friendly website and web applications made with top and powerful tech tools!</p>
                </div>

                <div className={styles.serviceCard}>
                    <img src={uiuxDesign} alt="Ken Javier can design user interfaces for you." />
                    <h3>UI/UX Design</h3>
                    <p>Have a stylish, responsive, and mobile-friendly website and web applications made with top and powerful tech tools!</p>
                </div>
            </div>
        </main>
    )
}

export default Services

import React from 'react';
import * as styles from './styles/css/services.module.css';

import webDev from '../../../assets/images/svg/WebDev.svg';
import webDesign from '../../../assets/images/svg/WebDesign.svg';
import uiuxDesign from '../../../assets/images/svg/UI-UXDesign.svg';

// ==== DATA ======
import { devTools, designTools } from '../../../assets/data/tools';

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


            <section className={styles.tools}>
                <h1>Equipped with these tools!</h1>
                { console.log(devTools) }

                <h3>In Developing</h3>
                <div className={styles.devTools}>

                    { devTools.map((tool) => <div className={styles.devTool} key={tool.name}>
                        <img src={tool.image.default} className={styles[tool.name]} alt={tool.name} />
                        <p>{tool.name}</p>
                    </div>)}
                    
                </div>

                <h3>In Designing</h3>
                <div className={styles.devTools}>

                    { designTools.map((tool) => <div className={styles.devTool} key={tool.name}>
                        <img src={tool.image.default} className={styles[tool.name]} alt={tool.name} />
                        <p>{tool.name}</p>
                    </div>)}
                    
                </div>



            </section>
        </main>
    )
}

export default Services

import React from 'react';
import * as styles from './styles/css/services.module.css';

// ==== DATA ======
import { devTools, designTools, servicesList } from '../../../assets/data/tools';

const Services = () => {

    return (
        <main className={styles.services} >
            {/* === SERVICES ==== */}
            <h1>What I can do for you</h1>

            <div className={styles.serviceCards}>

                { servicesList.map((item) => 
                    <div className={styles.serviceCard} key={item.name}>
                        <img src={item.image.default} alt={item.alternative}/>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div> )}

            </div>

            {/* === TOOLS ==== */}
            <section className={styles.tools}>
                <h1>Equipped with these tools!</h1>

                <h3>In Developing</h3>
                <div className={styles.devTools}>

                    { devTools.map((tool) => 
                        <div className={styles.devTool} key={tool.name}>
                            <img src={tool.image.default} className={styles[tool.name]} alt={tool.name} />
                            <p>{tool.name}</p>
                        </div>)}
                    
                </div>

                <h3>In Designing</h3>
                <div className={styles.devTools}>

                    { designTools.map((tool) => 
                        <div className={styles.devTool} key={tool.name}>
                            <img src={tool.image.default} className={styles[tool.name]} alt={tool.name} />
                            <p>{tool.name}</p>
                        </div>)}
                    
                </div>

            </section>
        </main>
    )
}

export default Services

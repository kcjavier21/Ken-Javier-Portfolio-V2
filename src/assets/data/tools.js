const html = require('../images/svg/HTML.svg');
const css = require('../images/svg/CSS.svg');
const sass = require('../images/svg/Sass.svg');
const bootstrap = require('../images/svg/Bootstrap.svg');
const javaScript = require('../images/svg/JS.svg');
const typeScript = require('../images/svg/TS.svg')
const git = require('../images/svg/Git.svg');
const react = require('../images/svg/React.svg');
const gatsby = require('../images/svg/Gatsby.svg');
const graphQL = require('../images/svg/GraphQL.svg');
const next = require('../images/svg/Next.svg');
const node = require('../images/svg/Node.svg');
const express = require('../images/svg/Express.svg');
const springBoot = require('../images/svg/SpringBoot.svg');
const mongoDB = require('../images/svg/MongoDB.svg');
const firebase = require('../images/svg/Firebase.svg');
const photoshop = require('../images/svg/Photoshop.svg');
const illustrator = require('../images/svg/Illustrator.svg');
const figma = require('../images/svg/Figma.svg');
const canva = require('../images/svg/Canva.svg');

const webDev = require('../images/svg/WebDev.svg');
const webDesign = require('../images/svg/WebDesign.svg');
const uiuxDesign = require('../images/svg/UI-UXDesign.svg');


const servicesList = [
    { 
        name: "Web Development",
        description: "Have a stylish, responsive, and mobile-friendly website and web applications made with top and powerful tech tools!",
        image: webDev,
        alternative: "Ken Javier can develop websites and web apps for you."
    },

    { 
        name: "Web Design",
        description: "Have a stylish, responsive, and mobile-friendly website and web applications made with top and powerful tech tools!",
        image: webDesign,
        alternative: "Ken Javier can design websites and web apps for you."
    },

    { 
        name: "UI/UX Design",
        description: "Have a stylish, responsive, and mobile-friendly website and web applications made with top and powerful tech tools!",
        image: uiuxDesign,
        alternative: "Ken Javier can design user interfaces for you."
    }
];


const devTools = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "Sass", image: sass },
    { name: "Bootstrap", image: bootstrap },
    { name: "JavaScript", image: javaScript },
    { name: "TypeScript", image: typeScript },
    { name: "Git", image: git },
    { name: "React", image: react },
    { name: "Gatsby", image: gatsby },
    { name: "Next", image: next },
    { name: "Node", image: node },
    { name: "Express", image: express },
    { name: "Spring Boot", image: springBoot },
    { name: "MongoDB", image: mongoDB },
    { name: "Firebase", image: firebase },
    { name: "GraphQL", image: graphQL },
];

const designTools = [
    { name: "Photoshop", image: photoshop },
    { name: "Illustrator", image: illustrator },
    { name: "Figma", image: figma },
    { name: "Canva", image: canva },
]

module.exports.servicesList = servicesList;
module.exports.devTools = devTools;
module.exports.designTools = designTools;
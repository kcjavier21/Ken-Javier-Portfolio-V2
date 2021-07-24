const html = require('../images/svg/HTML.svg');
const css = require('../images/svg/CSS.svg');
const sass = require('../images/svg/Sass.svg');
const bootstrap = require('../images/svg/Bootstrap.svg');
const javaScript = require('../images/svg/JS.svg');
const git = require('../images/svg/Git.svg');
const react = require('../images/svg/React.svg');
const gatsby = require('../images/svg/Gatsby.svg');
const graphQL = require('../images/svg/GraphQL.svg');
//const next = require('../images/svg/Next.svg');
const node = require('../images/svg/Node.svg');
const express = require('../images/svg/Express.svg');
const mongoDB = require('../images/svg/MongoDB.svg');
const photoshop = require('../images/svg/Photoshop.svg');
const illustrator = require('../images/svg/Illustrator.svg');
const figma = require('../images/svg/Figma.svg');
const canva = require('../images/svg/Canva.svg');


const devTools = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "Sass", image: sass },
    { name: "Bootstrap", image: bootstrap },
    { name: "JavaScript", image: javaScript },
    { name: "Git", image: git },
    { name: "React", image: react },
    { name: "Gatsby", image: gatsby },
    { name: "GraphQL", image: graphQL },
    { name: "Node", image: node },
    { name: "Express", image: express },
    { name: "MongoDB", image: mongoDB },
];

const designTools = [
    { name: "Photoshop", image: photoshop },
    { name: "Illustrator", image: illustrator },
    { name: "Figma", image: figma },
    { name: "Canva", image: canva },
]

module.exports.devTools = devTools;
module.exports.designTools = designTools;
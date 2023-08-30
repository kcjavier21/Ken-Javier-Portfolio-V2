const fieldworkStudio = require("../images/jpg-png/FieldworkStudio.png")
const algoFilipino = require("../images/jpg-png/AlgoFilipino.png")
const gdsc = require("../images/jpg-png/GDSC.png")
const plmcss = require("../images/jpg-png/PLM CSS.png")
const matrix = require("../images/jpg-png/Matrix-Co.png")
const dashlabs = require("../images/jpg-png/DashlabsAI.png")
const goMedia = require("../images/svg/GoMedia.svg")

const organizations = [
  { name: "Algo Filipino", image: algoFilipino, className: "algoFilipino" },
  {
    name: "Google Developer Students Club - Pamantasan ng Lungsod ng Maynila",
    image: gdsc,
    className: "gdsc",
  },
  {
    name: "Fieldwork Studio",
    image: fieldworkStudio,
    className: "fieldworkStudio",
  },
  {
    name: "GoMedia",
    image: goMedia,
    className: "gomedia",
  },
  { name: "Dashlabs.ai", image: dashlabs, className: "dashlabs" },
  {
    name: "PLM Computer Science Society",
    image: plmcss,
    className: "plmcss",
  },
]

module.exports.organizations = organizations

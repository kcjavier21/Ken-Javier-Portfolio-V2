const facebook = require('../images/svg/Facebook.svg');
const linkedin = require('../images/svg/Linkedin.svg');
const github = require('../images/svg/Github.svg');
const instagram = require('../images/svg/Instagram.svg');

const facebook2 = require('../images/svg/FacebookBlue.svg');
const linkedin2 = require('../images/svg/LinkedinBlue.svg');
const github2 = require('../images/svg/GithubBlue.svg');
const instagram2 = require('../images/svg/InstagramBlue.svg');

const location = require('../images/svg/LocationBlue.svg');
const phone = require('../images/svg/MobilePhoneBlue.svg');
const email = require('../images/svg/EmailBlue.svg');

const socialMediaLinks = [
    {
        site: "Facebook",
        image: facebook,
        image2: facebook2,
        link: "https://www.facebook.com/kcjavier21/" 
    },
    {
        site: "LinkedIn",
        image: linkedin,
        image2: linkedin2,
        link: "https://www.linkedin.com/in/kcjavier21/" 
    },
    {
        site: "GitHub",
        image: github,
        image2: github2,
        link: "https://github.com/kcjavier21" 
    },
    {
        site: "Instagram",
        image: instagram,
        image2: instagram2,
        link: "https://www.instagram.com/kcjavier21/" 
    },
];

const basicContactDetails = [
    { name: "Location", image: location, details: "86 Kaluag Street, Barangay Bagong Bayan, City of Malolos, Bulacan, Philippines 3000" },
    { name: "Mobile phone number", image: phone, details: "0955 387 7030" },
    { name: "Email", image: email, details: "kcdjavier@gmail.com" },
]




module.exports.socialMediaLinks = socialMediaLinks;
module.exports.basicContactDetails = basicContactDetails;
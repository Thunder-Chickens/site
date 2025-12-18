import { v4 as uuidv4 } from "uuid"; 
import tc1 from '../Images/tc1.jpg'
import tc3 from '../Images/tc3.jpg';
import tc4 from '../Images/tc4.jpg';
import tc5 from '../Images/thunderchkn.jpg';
import impromp from '../Images/Improp.mov';
import grace_scarlette from '../Images/grace_scarlett.JPG'
import tim_scarlette from '../Images/tim_scarlett_awards.jpeg'

const video = false;
const image = true; 

const dataSlider = [
    {
        id: uuidv4(),
        title: "Grace and Scarlette",
        text: "˚˖𓍢ִ໋💅🏻✧˚.🎀༘⋆ ꧁𝔂𝓪𝓼𝓼 𝓺𝓾𝓮𝓮𝓷꧂ ✨🔥🎀 𝔅𝔢𝔞𝔲𝔱𝔦𝔣𝔲𝔩 ℭ𝔥𝔞𝔬𝔰 💅💝💕 ꧁DIVA꧂",
        type: image, 
        img: grace_scarlette
    },
    {
        id: uuidv4(),
        title: "Tim and Scarlette",
        text: "Tim and Scarlette winning literally everthing MWAHAHA",
        type: image, 
        img: tim_scarlette
    },
    {
        id: uuidv4(),
        title: "Noah Woo Impromptu",
        text: " \"... so that you don't end up pooping your guts out\"",
        type: video,
        vid: impromp
    },
    {
        id: uuidv4(),
        title: "Dark Thunderchicken Rises",
        text: "Black feathered Thunderchicken rises above the volcanoes. ",
        type: image, 
        img: tc3
    },
    {
        id: uuidv4(),
        title: "Thunderchicken (absolutely not AI)",
        text: "A real life Thunderchicken mascot",
        type: image, 
        img: tc1
    },
]

export default dataSlider; 
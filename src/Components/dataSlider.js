import { v4 as uuidv4 } from "uuid"; 
import tc1 from '../Images/tc1.jpg'
import tc3 from '../Images/tc3.jpg';
import tc4 from '../Images/tc4.jpg';
import tc5 from '../Images/thunderchkn.jpg';
import impromp from '../Images/Improp.mov';
import grace_scarlette from '../Images/grace_scarlett.JPG'
import tim_scarlette from '../Images/tim_scarlett_awards.jpeg'
import peter_cool from '../Images/peter_cool.jpg'

const video = false;
const image = true; 

const dataSlider = [
    {
        id: uuidv4(),
        title: "Grace and Scarlette",
        text: "˚Clashies, so cool",
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
        title: "Peter",
        text: "Random photo of me cuz I'm maintaining this site and I can >:)",
        type: image, 
        img: peter_cool
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
import { v4 as uuidv4 } from "uuid"; 
import tc1 from '../Images/tc1.jpg'
import tc3 from '../Images/tc3.jpg';
import tc4 from '../Images/tc4.jpg';
import tc5 from '../Images/thunderchkn.jpg';
import impromp from '../Images/Improp.mov';

const video = false;
const image = true; 

const dataSlider = [
    {
        id: uuidv4(),
        title: "Noah Woo Impromptu",
        text: " \"... so that you don't end up pooping your guts out\"",
        type: video,
        vid: impromp
    },
    {
        id: uuidv4(),
        title: "Thunderchicken Photo",
        text: "Completely real and authentic photo of a real live Thunderchicken",
        type: image, 
        img: tc1
    },
    {
        id: uuidv4(),
        title: "Majestic Thunderchicken",
        text: "One artist's portrayal of an angry Thunderchicken.",
        type: image, 
        img: tc5
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
        title: "The Return of the Thunderchicken King",
        text: "This Thunderchicken destroyed a ring without losing a finger. ",
        type: image, 
        img: tc4
    },
]

export default dataSlider; 
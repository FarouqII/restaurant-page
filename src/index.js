import "./styles.css";
import logo from './assets/YasmineLogo.png';
import { homeLoader } from './loadhome';
import { sliderAnimation } from "./slideranimation";

console.log("Working");
homeLoader();
sliderAnimation();

const img = document.createElement('img');
img.src = logo;
img.alt = 'Logo';
img.classList.add('logo');

const header = document.querySelector('header');
header.prepend(img);
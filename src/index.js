import "./styles.css";
import logo from './assets/YasmineLogo.png';
import { homeLoader } from './loadhome';

console.log("Working");
homeLoader();

const img = document.createElement('img');
img.src = logo;
img.alt = 'Logo';
img.classList.add('logo');

const header = document.querySelector('header');
header.prepend(img);
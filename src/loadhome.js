import logo from './assets/YasmineLogo.png';
import slider1 from './assets/slider/slider-1.jpg';
import slider2 from './assets/slider/slider-2.jpg';
import slider3 from './assets/slider/slider-3.jpg';
import slider4 from './assets/slider/slider-4.jpg';

export const homeLoader = () => {
    const contentDiv = document.getElementById("content");
    let divsArray = [];
    for (let i = 0; i < 4; i++) {
        let div = document.createElement("div");
        div.className = i < 3 ? "home-section" : "";
        divsArray.push(div);
    }
    divsArray[0].id = "home";
    divsArray[1].id = "about";
    divsArray[2].id = "find-us";
    divsArray[3].id = "footer";

    divsArray[0].innerHTML = `
    <h1>
        <span>The scent of <b>home</b>,</span>
        <span>The taste of <b>tradition</b>.</span>
    </h1>
    <p>Vibrant flavors and rich palettes</p>
    `
    divsArray[1].innerHTML = `
    <div id="story-text">
        <img class="logo" src=${logo} alt="Logo"}>
        <h3>The Story</h3>
        <p>A modern Levantine kitchen inspired by the flavors and spirit of the Eastern Mediterranean.</p>
        <p>Founded in Brooklyn in 2015, Yasmine brings together timeless recipes, warm hospitality, and the aromatic beauty of jasmine.</p>
        <p>With locations in New Jersey, Toronto, and Montreal, we serve vibrant mezze, fire-grilled dishes, and fresh breads in a setting that honors tradition with a contemporary touch.</p>
    </div>
    <div id="slider-container">
        <div id="slider-track">
            <img class="slider-img" src=${slider1} alt="Slider Image">
            <img class="slider-img" src=${slider2} alt="Slider Image">
            <img class="slider-img" src=${slider3} alt="Slider Image">
            <img class="slider-img" src=${slider4} alt="Slider Image">

            <img class="slider-img" src=${slider1} alt="Slider Image">
            <img class="slider-img" src=${slider2} alt="Slider Image">
            <img class="slider-img" src=${slider3} alt="Slider Image">
            <img class="slider-img" src=${slider4} alt="Slider Image">
        </div>
    </div>
    `

    divsArray[2].innerHTML = `
    <h1 style="transform: rotate(270deg);
    margin-right: -3vw;">FIND US</h1>
    <button class="location-tile brooklyn">
        <h3>Brooklyn</h3>
        <p>New York City</p>
        <span id="flagship">FLAGSHIP</span>
    </button>
    <button class="location-tile city-jc">
        <h3>Jersey City</h3>
        <p>New Jersey</p>
    </button>
    <button class="location-tile city-montreal">
        <h3>Montreal</h3>
        <p>Quebec</p>
    </button>
    <button class="location-tile city-toronto">
        <h3>Toronto</h3>
        <p>Ontario</p>
    </button>
    <h1 style="transform: rotate(90deg);
    margin-left: -3vw;">FIND US</h1>
    `
    divsArray[3].innerHTML = `
    <hr>
    <img class="logo">
    <ul>
        <li><button>INSTAGRAM</button></li>
        <li><button>X</button></li>
        <li><button class="github-logo">GITHUB</button></li>
    </ul>
    <ul>
        <li><button>RESERVATIONS</button></li>
        <li><button>LOCATIONS</button></li>
        <li><button>CONTACT US</button></li>
    </ul>
    `
    for (let i = 0; i < divsArray.length; i++) contentDiv.appendChild(divsArray[i]);
}
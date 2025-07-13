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
        <span>The sent of <b>home</b>,</span>
        <span>The taste of <b>tradition</b>.</span>
    </h1>
    <p>Vibrant flavors and rich palettes</p>
    `
    divsArray[1].innerHTML = `
    <div id="story-text">
        <p>The Story</p>
        <h2>Yasmine</h2>
        <p></p>
    </div>
    <div id="story-image"></div>
    `
    divsArray[2].innerHTML = `
    <button class="location-tile">
        <h3>Brooklyn</h3>
        <p>New York City</p>
    </button>
    <button class="location-tile">
        <h3>Jersey City</h3>
        <p>New Jersey</p>
    </button>
    <button class="location-tile">
        <h3>Montreal</h3>
        <p>Quebec</p>
    </button>
    <button class="location-tile">
        <h3>Toronto</h3>
        <p>Ontario</p>
    </button>
    `
    divsArray[3].innerHTML = `
    <hr>
    <img class="logo">
    <div>
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
    </div>
    `
    for (let i = 0; i < divsArray.length; i++) contentDiv.appendChild(divsArray[i]);
}
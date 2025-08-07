import './menu.css';
import logo from './assets/YasmineLogo.png';

export const loadMenu = () => {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = '';
    contentDiv.innerHTML = `
        <div id="content">
            <div class="menu-section" id="landing-page">
                <h1>Menu</h1>
            </div>

            <div class="menu-section" id="menu-container">
                <button class="menu-btn" id="appetizer-btn">
                    <span>Appetizers</span>
                </button>
                <button class="menu-btn" id="main-btn">
                    <span>Main Courses</span>
                </button>
                <button class="menu-btn" id="desserts-btn">
                    <span>Desserts</span>
                </button>
                <button class="menu-btn" id="drinks-btn">
                    <span>Drinks</span>
                </button>
            </div>
            <div id="footer">
                <hr>
                <div class="menu-section" id="footer-content">
                    <img class="logo" src=${logo} alt="Logo">
                    <ul>
                        <li><button>INSTAGRAM</button></li>
                        <li><button>X</button></li>
                        <li><button class="github-logo"><a href="https://github.com/FarouqII/restaurant-page">GITHUB</a></button></li>
                    </ul>
                    <ul>
                        <li><button id="reserve">RESERVATIONS</button></li>
                        <li><button>LOCATIONS</button></li>
                        <li><button>CONTACT US</button></li>
                    </ul>
                    <span>© 2025 <a href="https://github.com/FarouqII/">FarouqII</a></span>
                </div>
            </div>
        </div>
        `;
}
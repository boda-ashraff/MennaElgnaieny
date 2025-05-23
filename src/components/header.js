/**
 * Header Component
 * Modern and visually appealing header component for Menna Elgnainey website
 * with improved animations, transitions, and mobile responsiveness.
 */

function createHeader() {
  // Determine if we're on the home page or in a subfolder
  const path = window.location.pathname;
  const isHomePage =
    path === "/" ||
    path.endsWith("index.html") ||
    path.endsWith("My-BRAND/") ||
    path === "/My-BRAND";
  const isInSrcPages = path.includes("/src/pages/");
  const isInViews = path.includes("/views/");

  // Define base paths based on current location
  let basePath;
  let indexPath;

  if (isHomePage) {
    basePath = "./src/";
    indexPath = "./";
  } else if (isInSrcPages) {
    // More specific path handling for src/pages directory
    basePath = "../";
    indexPath = "../../";
  } else if (isInViews) {
    basePath = "../";
    indexPath = "../";
  } else {
    basePath = "./";
    indexPath = "./";
  }

  const imgPath = isHomePage ? "./src/images/" : "../images/";

  // Determine current page for active navigation highlighting
  const currentPath = window.location.pathname;
  const isActive = (path) => {
    // Check if path is in the current URL or if it's a hash anchor
    if (path.startsWith("#")) {
      return window.location.hash === path ? "active-nav-item" : "";
    }
    return currentPath.includes(path) ? "active-nav-item" : "";
  };

  // Create a proper navigation link that handles both direct page links and anchor links
  const createNavLink = (path, isAnchor = false) => {
    if (isAnchor) {
      return isHomePage ? path : `${indexPath}index.html${path}`;
    }
    return path;
  };

  // Create the header element with all necessary HTML
  const header = document.createElement("header");
  header.className =
    "fixed top-0 left-0 right-0 z-50 bg-header-bg bg-opacity-95 backdrop-blur-sm transition-all duration-300 border-b border-gray-800/50 shadow-lg py-3 px-4";
  header.id = "main-header";
  header.innerHTML = `
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <a href="${indexPath}index.html" class="flex items-center group transition-all duration-300" aria-label="Menna Elgnainey Home">
        
          <span class="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent transform transition-all duration-300 group-hover:from-yellow-300 group-hover:to-yellow-500">Menna Elgnainey</span>
        </a>
      </div>

      <div class="flex items-center gap-4">
        <!-- Social Media Icons -->
        <div class="hidden md:flex gap-3">
          <a href="https://www.linkedin.com/in/menna-elgnainey-944a46364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
             class="header-social-link" 
             aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/mennaelgnainey27_?igsh=MTNsZDF2amdmcXNsYQ==" 
             class="header-social-link" 
             aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

        <!-- Theme Toggle -->
        <button id="theme-toggle" class="bg-secondary/50 p-2 rounded-full border border-gray-700 hover:border-yellow-500 transition-all duration-300" aria-label="Toggle theme">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
          </svg>
        </button>

        <!-- Mobile Menu Button -->
        <div class="block lg:hidden">
          <button id="mobile-menu-button" class="flex items-center p-2 rounded-lg border border-gray-700 hover:border-yellow-500 bg-secondary/50 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-1">
          <a href="${createNavLink(
            "#aboutme",
            true
          )}" class="nav-link ${isActive("#aboutme")}">About</a>
          <a href="${createNavLink("#core", true)}" class="nav-link ${isActive(
    "#core"
  )}">Competencies</a>
          <a href="${createNavLink(
            "#projects",
            true
          )}" class="nav-link ${isActive("#projects")}">Projects</a>
          <a href="${createNavLink(
            "#contactme",
            true
          )}" class="nav-link ${isActive("#contactme")}">Contact</a>
        </nav>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div id="mobile-menu" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] transform translate-x-full transition-transform duration-300 lg:hidden">
      <div class="h-full w-3/4 ml-auto bg-secondary border-l border-gray-800 overflow-y-auto">
        <div class="flex justify-between items-center p-4 border-b border-gray-800">
          <h2 class="text-xl font-bold text-yellow-400">Menu</h2>
          <button id="close-menu" class="p-2 text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav class="p-4 flex flex-col space-y-4">
          <a href="${indexPath}index.html" class="mobile-nav-link ${isActive(
    "index.html"
  )}">Home</a>
          <a href="${createNavLink(
            "#aboutme",
            true
          )}" class="mobile-nav-link ${isActive("#aboutme")}">About</a>
          <a href="${createNavLink(
            "#core",
            true
          )}" class="mobile-nav-link ${isActive("#core")}">Competencies</a>
          <a href="${createNavLink(
            "#projects",
            true
          )}" class="mobile-nav-link ${isActive("#projects")}">Projects</a>
          <a href="${createNavLink(
            "#contactme",
            true
          )}" class="mobile-nav-link ${isActive("#contactme")}">Contact</a>
          <div class="flex gap-4 pt-4">
            <a href="https://www.linkedin.com/in/menna-elgnainey-944a46364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
               class="mobile-social-link" 
               aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/mennaelgnainey27_?igsh=MTNsZDF2amdmcXNsYQ==" 
               class="mobile-social-link" 
               aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </div>
  `;

  return header;
}

/**
 * Insert the header at the beginning of the body and add necessary styles
 */
function loadHeader() {
  // Add custom styles for the header
  addHeaderStyles();

  // Create and insert header
  const header = createHeader();
  document.body.insertBefore(header, document.body.firstChild);

  // Add padding to body to account for fixed header
  const headerHeight = header.offsetHeight;
  document.body.style.paddingTop = `${headerHeight}px`;

  // Set up theme toggle button functionality
  setupThemeToggle();

  // Ensure mobile menu is properly initialized
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    // Keep it hidden with transform but ensure it's in the DOM
    mobileMenu.style.display = "block";
    mobileMenu.classList.add("translate-x-full");
  }

  // Set up mobile nav functionality
  setupMobileNav();

  // Set up scroll effects
  setupScrollEffects();

  // Add event listeners to handle anchor links properly
  setupNavLinks();
}

/**
 * Set up event handlers for navigation links
 */
function setupNavLinks() {
  // Add click handlers for anchor links
  document.querySelectorAll('a[href*="#"]').forEach((link) => {
    if (link.getAttribute("href").startsWith("#")) return; // Skip pure anchor links

    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.includes("#") && !href.startsWith("#")) {
        e.preventDefault();

        // Split the href into page and anchor parts
        const [page, anchor] = href.split("#");

        // Navigate to the page and then to the anchor
        window.location.href = page + "#" + anchor;
      }
    });
  });
}

/**
 * Add custom styles needed for the header
 */
function addHeaderStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .nav-link {
      position: relative;
      padding: 0.5rem 1rem;
      font-weight: 500;
      transition: all 0.3s;
      border-radius: 0.375rem;
    }
    
    .nav-link:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: #facc15;
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: #facc15;
      transition: all 0.3s;
      transform: translateX(-50%);
    }
    
    .nav-link:hover::after {
      width: 60%;
    }
    
    .nav-link.active-nav-item {
      color: #facc15;
    }
    
    .nav-link.active-nav-item::after {
      width: 60%;
    }
    
    .mobile-nav-link {
      display: block;
      padding: 0.75rem;
      border-left: 3px solid transparent;
      transition: all 0.3s;
      font-weight: 500;
      color: white;
      text-decoration: none;
      font-size: 1rem;
    }
    
    .mobile-nav-link:hover {
      background-color: rgba(255, 255, 255, 0.05);
      border-left-color: #facc15;
      color: #facc15;
      padding-left: 1rem;
    }
    
    .mobile-nav-link.active-nav-item {
      border-left-color: #facc15;
      color: #facc15;
      background-color: rgba(250, 204, 21, 0.1);
    }
    
    .header-scrolled {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
      background-color: rgba(17, 17, 33, 0.98) !important;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
    }
    
    /* Social media icon styles */
    .header-social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.05);
      color: #facc15;
      transition: all 0.3s;
    }
    
    .header-social-link:hover {
      background-color: #facc15;
      color: #111111;
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(250, 204, 21, 0.4);
    }
    
    .mobile-social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.1);
      color: #facc15;
      transition: all 0.3s;
    }
    
    .mobile-social-link:hover {
      background-color: #facc15;
      color: #111111;
      transform: scale(1.1);
    }
    
    /* Mobile menu specific styles */
    #mobile-menu {
      height: 100vh;
      width: 100%;
    }
    
    #mobile-menu .mobile-nav-link {
      color: #ffffff;
      opacity: 1;
      visibility: visible;
    }
    
    #mobile-menu > div {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    #mobile-menu > div > nav {
      flex: 1;
      overflow-y: auto;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Set up the theme toggle button functionality
 */
function setupThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      if (document.body.classList.contains("light-theme")) {
        document.body.classList.remove("light-theme");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.add("light-theme");
        localStorage.setItem("theme", "light");
      }
    });

    // Apply saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
    }
  }
}

/**
 * Set up mobile navigation functionality
 */
function setupMobileNav() {
  const menuButton = document.getElementById("mobile-menu-button");
  const closeButton = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", function () {
      // Make sure the menu is visible before animation
      mobileMenu.style.display = "block";

      // Let the browser process the display change before removing the transform
      setTimeout(() => {
        mobileMenu.classList.remove("translate-x-full");
      }, 10);

      document.body.style.overflow = "hidden";
    });
  }

  if (closeButton && mobileMenu) {
    closeButton.addEventListener("click", function () {
      mobileMenu.classList.add("translate-x-full");

      // Wait for the transition to complete before hiding
      setTimeout(() => {
        if (mobileMenu.classList.contains("translate-x-full")) {
          // Don't hide, just keep it transformed out of view
        }
      }, 300);

      document.body.style.overflow = "";
    });
  }

  // Close mobile menu when clicking on a link
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
      document.body.style.overflow = "";
    });
  });
}

/**
 * Set up scroll effects for the header
 */
function setupScrollEffects() {
  const header = document.getElementById("main-header");
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add scrolled class when scrolled down
    if (scrollTop > 50) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }

    lastScrollTop = scrollTop;
  });
}

// Load header when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadHeader);

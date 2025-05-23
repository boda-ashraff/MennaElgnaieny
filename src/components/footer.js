/**
 * Footer Component for Menna Haitham Portfolio
 * Modern and visually appealing footer with improved animations, transitions, 
 * and mobile responsiveness.
 */

function createFooter() {
  // Get the current location
  const currentLocation = window.location;
  const path = currentLocation.pathname;
  
  // Determine if we're on the home page or in a subfolder
  const isHomePage = path === '/' || 
                     path.endsWith('index.html') || 
                     path.endsWith('My-BRAND/') || 
                     path === '/My-BRAND';
  
  // Check if we're in a specific subdirectory
  const isInSrcPages = path.includes('/src/pages/');
  const isInViews = path.includes('/views/');
  
  // Compute relative paths based on current location
  let homePath = '';
  let pagesPath = '';
  let imgPath = '';
  
  if (isHomePage) {
    // On home page
    homePath = './index.html';
    pagesPath = './src/pages/';
    imgPath = './src/images/';
  } else if (isInSrcPages) {
    // In src/pages directory
    homePath = '../../index.html';
    pagesPath = './';
    imgPath = '../images/';
  } else if (isInViews) {
    // In views directory
    homePath = '../index.html';
    pagesPath = '../src/pages/';
    imgPath = '../src/images/';
  } else {
    // Default fallback
    homePath = './index.html';
    pagesPath = './src/pages/';
    imgPath = './src/images/';
  }

  // Create the footer element with all necessary HTML
  const footer = document.createElement('footer');
  footer.className = "bg-gray-900 pt-16 pb-8 border-t border-gray-800/50 relative mt-20";
  footer.id = "main-footer";
  footer.innerHTML = `
    <!-- Wave SVG for top decoration -->
    <div class="absolute top-0 left-0 w-full overflow-hidden leading-0 transform translate-y-[-85%] rotate-180">
      <svg class="relative block w-full h-[50px] md:h-[70px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="fill-current text-gray-900"></path>
      </svg>
    </div>

    <div class="max-w-6xl mx-auto px-4">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
        <!-- Column 1: Logo and About -->
        <div class="flex flex-col items-center md:items-start space-y-4">
          <div class="flex items-center group mb-4">
            <div class="overflow-hidden rounded-full mr-3">
              <img src="${imgPath}mypic2.jpg" alt="Menna Haitham" class="w-14 h-14 object-cover">
            </div>
            <span class="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Menna Haitham</span>
          </div>
          <p class="text-gray-400 leading-relaxed text-center md:text-left">
            Social Media Marketing Specialist | Event Manager
          </p>
          <div class="flex gap-5 mt-4">
            <a href="https://www.linkedin.com/in/menna-elgnainey-944a46364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" class="footer-social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/mennaelgnainey27_?igsh=MTNsZDF2amdmcXNsYQ==" class="footer-social-link" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Column 2: Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-5 relative inline-block">
            <span class="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Quick Links</span>
            <span class="absolute left-0 bottom-0 w-2/3 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-500"></span>
          </h3>
          <ul class="space-y-3 footer-links">
            <li>
              <a href="${homePath}#aboutme">About Me</a>
            </li>
            <li>
              <a href="${homePath}#core">Core Competencies</a>
            </li>
            <li>
              <a href="${homePath}#projects">Projects</a>
            </li>
          </ul>
        </div>
        
        <!-- Column 3: Contact Info -->
        <div>
          <h3 class="text-xl font-bold mb-5 relative inline-block">
            <span class="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Contact Info</span>
            <span class="absolute left-0 bottom-0 w-2/3 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-500"></span>
          </h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <div class="text-yellow-400 mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <span class="text-gray-400">01067121538</span>
            </li>
            <li class="flex items-start">
              <div class="text-yellow-400 mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <span class="text-gray-400">Suez, Egypt</span>
            </li>
          </ul>
          
          <!-- Newsletter Form -->
          <div class="mt-6">
            <h4 class="text-lg font-semibold mb-3 text-gray-300">Get In Touch</h4>
            <form class="flex">
              <input type="email" placeholder="Your email" class="bg-gray-800 text-gray-200 px-3 py-2 rounded-l-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-yellow-400 w-full" required>
              <button type="submit" class="bg-yellow-500 hover:bg-yellow-600 text-black px-4 rounded-r-md transition-colors duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <!-- Footer Bottom -->
      <div class="pt-6 border-t border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; 2025. All rights reserved.
          </p>
          <p class="text-sm text-gray-500">
            Social Media Marketing Specialist | <span class="text-yellow-500">Suez, Egypt</span>
          </p>
        </div>
      </div>
    </div>
  `;

  return footer;
}

/**
 * Insert the footer at the end of the body and add necessary styles
 */
function loadFooter() {
  // Add custom styles for the footer
  addFooterStyles();
  
  // Create and insert footer
  const footer = createFooter();
  document.body.appendChild(footer);
  
  // Add scroll-to-top button
  addScrollToTopButton();
  
  // Set up newsletter form
  setupNewsletterForm();
}

/**
 * Add custom styles needed for the footer
 */
function addFooterStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .footer-social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.05);
      color: #facc15;
      transition: all 0.3s;
    }
    
    .footer-social-link:hover {
      background-color: #facc15;
      color: #111111;
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(250, 204, 21, 0.4);
    }
    
    .footer-links a {
      color: #9ca3af;
      transition: all 0.3s;
      position: relative;
      display: inline-block;
      padding-left: 1rem;
    }
    
    .footer-links a::before {
      content: '→';
      position: absolute;
      left: 0;
      opacity: 0;
      transition: all 0.3s;
    }
    
    .footer-links a:hover {
      color: #facc15;
      padding-left: 1.5rem;
    }
    
    .footer-links a:hover::before {
      opacity: 1;
    }
    
    .scroll-to-top {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: #facc15;
      color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transform: translateY(10px);
      transition: all 0.3s;
      box-shadow: 0 4px 14px rgba(250, 204, 21, 0.5);
      z-index: 40;
    }
    
    .scroll-to-top.visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    
    .scroll-to-top:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 20px rgba(250, 204, 21, 0.7);
    }
  `;
  document.head.appendChild(style);
}

/**
 * Add a scroll-to-top button to the page
 */
function addScrollToTopButton() {
  const scrollButton = document.createElement('button');
  scrollButton.className = 'scroll-to-top';
  scrollButton.setAttribute('aria-label', 'Scroll to top');
  scrollButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  `;
  document.body.appendChild(scrollButton);
  
  // Show/hide scroll button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollButton.classList.add('visible');
    } else {
      scrollButton.classList.remove('visible');
    }
  });
  
  // Scroll to top when clicked
  scrollButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Set up newsletter form functionality
 */
function setupNewsletterForm() {
  const form = document.querySelector('#main-footer form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = e.target.querySelector('input[type="email"]').value;
      if (email) {
        // Here you would typically send this to your backend
        alert(`Thank you for your message. We'll contact you at: ${email}`);
        e.target.reset();
      }
    });
  }
}

// Load footer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadFooter);
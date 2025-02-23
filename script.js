// for the hamburger icon
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// for the blinking text
document.addEventListener('DOMContentLoaded', function() {
  const jobTitles = ["Software Developer", "Data Engineer", "Data Analyst"];
  const textElement = document.querySelector('.section__text__p2');
  let currentIndex = 0;

  setInterval(function() {
    currentIndex = (currentIndex + 1) % jobTitles.length;
    textElement.classList.add('blink');
    setTimeout(function(){
      textElement.textContent = jobTitles[currentIndex];
      textElement.classList.add('smooth-transition');
      textElement.classList.remove('blink');
    }, 800);

    setTimeout(function(){
      textElement.classList.remove('smooth-transition');
    }, 1200);
  }, 3000);
});


document.addEventListener('DOMContentLoaded', function() {
  const themeToggles = [
    document.getElementById('theme-toggle'),
    document.getElementById('theme-toggle-1')
  ];

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggles.forEach(toggle => toggle.checked = theme === 'dark');
  }

  function handleToggleChange() {
    const theme = this.checked ? 'dark' : 'light';
    applyTheme(theme);
  }

  themeToggles.forEach(toggle => toggle.addEventListener('change', handleToggleChange));

  // Set the initial theme based on user preference
  const currentTheme = localStorage.getItem('theme') || 'light';
  applyTheme(currentTheme);
});




document.addEventListener('DOMContentLoaded', function() {
  const projectsContainer = document.getElementById('projects-grid');

  // Function to add a new project
  function addProject(imageUrl, title, link) {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';
    projectDiv.innerHTML = `
      <img src="${imageUrl}" alt="${title}" class="project-img" />
      <h2 class="project-title">${title}</h2>
      <button class="new_btn" onclick="location.href='${link}'">Github</button>
    `;
    projectsContainer.appendChild(projectDiv);
  }

  // Example projects to add
  addProject('./assets/sign_language.jpeg', 'Sign Language Recognition', 'https://github.com/musketeer07/American-Sign-Language');
  addProject('./assets/netflix.jpeg', 'Recommendation Engine', 'https://github.com/musketeer07/movie-recommendation-engine.git');
  addProject('./assets/flight_tracker.png', 'Flight Tracker', 'https://github.com/musketeer07/Flight-Tracker');
  addProject('./assets/wecare.png','We Care', 'https://github.com/musketeer07/We-Care.git');
  addProject('./assets/indianStartups.png', 'Startup Funding Trends', 'https://github.com/musketeer07/Startup-Funding-Trends.git');
});


// Ensure smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });

      // Update the URL without reloading the page
      history.pushState(null, null, `#${targetId}`);
    }
  });
});

// Ensure smooth scrolling for down arrow and footer links
document.querySelectorAll('.fa-angles-down, footer a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });

      // Update the URL without reloading the page
      history.pushState(null, null, `#${targetId}`);
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const experienceContainer = document.getElementById('experience-container');

  // Function to render each experience item
  function addExperience({ company, location, duration, title, image }) {
      // Check if the experience already exists to prevent duplication
      if (document.querySelector(`[data-company="${company}"]`)) return;
      
      const experienceDiv = document.createElement('div');
      experienceDiv.className = 'experience-item';
      experienceDiv.setAttribute('data-company', company); // Add unique identifier to avoid duplicates

      experienceDiv.innerHTML = `
          <div class="exp-details-container">
              <div class="experience-img">
                  <img src="${image}" alt="Experience Image" class="company-img" />
              </div>
              <h3 class="exp-sub-title">${company}</h3>
              <h4 class="experience-location">${location}</h4>
              <p class="experience-title">${title}</p>
              <p class="experience-duration">${duration}</p>
          </div>
      `;
      
      experienceContainer.appendChild(experienceDiv);
  }

  // Add experiences dynamically
  addExperience({
    company: 'Accenture',
    location: 'Montreal, Canada',
    title: 'Senior Data Engineer',
    duration: '(Nov 2024 - Present)',
    image: './assets/accenture.png',
  });

  addExperience({
    company: 'Intact Financial Corporation',
    location: 'Montreal, Canada',
    title: 'Data Engineering Developer Intern',
    duration: '(Sept 2023- April 2024)',
    image: './assets/intact.webp',
  });

  addExperience({
    company: 'Evalueserve',
    location: 'Gurgaon, India',
    title: 'Data Engineer',
    duration: '(July 2021 - August 2022)',
    image: './assets/evalueserve.png',
  });

  addExperience({
    company: 'SpreadIt',
    location: 'New Delhi, India',
    title: 'Data Analyst Intern',
    duration: '(Dec 2020 - July 2021)',
    image: './assets/spreadit.png',
  });

  addExperience({
    company: 'Career Launcher',
    location: 'New Delhi, India',
    title: 'Machine Learning Intern',
    duration: '(May 2020 - July 2020)',
    image: './assets/career-launcher.jpeg',
  });


});





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




// // for projects infinite scrolling effect
// document.addEventListener('DOMContentLoaded', function() {
//   const projectsContainer = document.getElementById('projects-slider');

//   // Function to add a new project
//   function addProject(imageUrl, title, link) {
//     const projectDiv = document.createElement('div');
//     projectDiv.className = 'project';
//     projectDiv.innerHTML = `
//       <img src="${imageUrl}" alt="${title}" class="project-img" />
//       <h2 class="project-title">${title}</h2>
//       <button class="new_btn" onclick="location.href='${link}'">Github</button>
//     `;
//     projectsContainer.appendChild(projectDiv);
//   }

//   // Example projects to add
//   addProject('./assets/sign_language.jpeg', 'Sign Language Recognition', 'https://github.com/musketeer07/American-Sign-Language');
//   addProject('./assets/netflix.jpeg', 'Recommendation Engine', 'https://github.com/musketeer07/movie-recommendation-engine.git');
//   addProject('./assets/flight_tracker.png', 'Flight Tracker', 'https://github.com/musketeer07/Flight-Tracker');
//   addProject('./assets/wecare.png','We Care', 'https://github.com/musketeer07/We-Care.git');
//   addProject('./assets/indianStartups.png', 'Startup Funding Trends', 'https://github.com/musketeer07/Startup-Funding-Trends.git');

//   // Function to clone the project items to create a continuous scroll effect
//   function cloneProjects() {
//     const projects = document.querySelectorAll('#projects-slider .project');
//     projects.forEach(project => {
//       const clone = project.cloneNode(true);
//       projectsContainer.appendChild(clone);
//     });
//   }

//   // Clone projects to create an infinite scroll effect
//   cloneProjects();

//   // Infinite scroll effect
//   let scrollInterval;
//   function scrollProjects() {
//     const scrollAmount = 0.5; // Adjust the scroll speed
//     projectsContainer.scrollLeft += scrollAmount;

//     const firstProject = projectsContainer.firstElementChild;
//     const projectWidth = firstProject.clientWidth + parseInt(window.getComputedStyle(firstProject).marginRight);

//     // Append the first project to the end when it's completely scrolled past
//     if (projectsContainer.scrollLeft >= projectWidth) {
//       projectsContainer.scrollLeft -= projectWidth;
//       projectsContainer.appendChild(firstProject);
//     }

//     // Continue the scroll if not paused
//     if (projectsContainer.dataset.scrollPaused !== 'true') {
//       scrollInterval = requestAnimationFrame(scrollProjects);
//     }
//   }

//   // Start the scroll on mouseover
//   projectsContainer.addEventListener('mouseover', () => {
//     projectsContainer.dataset.scrollPaused = 'false';
//     scrollInterval = requestAnimationFrame(scrollProjects);
//   });

//   // Stop the scroll on mouseout
//   projectsContainer.addEventListener('mouseout', () => {
//     projectsContainer.dataset.scrollPaused = 'true';
//     cancelAnimationFrame(scrollInterval);
//   });
// });


document.addEventListener('DOMContentLoaded', function() {
  const projectsContainer = document.getElementById('projects-slider');
  const projectsSection = document.getElementById('projects');

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

  // Function to clone the project items to create a continuous scroll effect
  function cloneProjects() {
    const projects = document.querySelectorAll('#projects-slider .project');
    projects.forEach(project => {
      const clone = project.cloneNode(true);
      projectsContainer.appendChild(clone);
    });
  }

  // Clone projects to create an infinite scroll effect
  cloneProjects();

  // Infinite scroll effect
  let scrollInterval;
  function scrollProjects() {
    const scrollAmount = 0.5; // Adjust the scroll speed
    projectsContainer.scrollLeft += scrollAmount;

    const firstProject = projectsContainer.firstElementChild;
    const projectWidth = firstProject.clientWidth + parseInt(window.getComputedStyle(firstProject).marginRight);

    // Append the first project to the end when it's completely scrolled past
    if (projectsContainer.scrollLeft >= projectWidth) {
      projectsContainer.scrollLeft -= projectWidth;
      projectsContainer.appendChild(firstProject);
    }

    // Continue the scroll if not paused
    if (projectsContainer.dataset.scrollPaused !== 'true') {
      scrollInterval = requestAnimationFrame(scrollProjects);
    }
  }

  // Function to start scrolling
  function startScroll() {
    projectsContainer.dataset.scrollPaused = 'false';
    scrollInterval = requestAnimationFrame(scrollProjects);
  }

  // Function to stop scrolling
  function stopScroll() {
    projectsContainer.dataset.scrollPaused = 'true';
    cancelAnimationFrame(scrollInterval);
  }

  // Intersection Observer to detect when the projects section is in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startScroll();
      } else {
        stopScroll();
      }
    });
  }, { threshold: 0.1 });

  // Observe the projects section
  observer.observe(projectsSection);
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

// Smooth scroll for the contact info button
document.querySelector('button[onclick*="#contact"]').addEventListener('click', function(e) {
  e.preventDefault();
  const targetElement = document.getElementById('contact');

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });

    // Update the URL without reloading the page
    history.pushState(null, null, '#contact');
  }
});


document.querySelector('.heart-icon').addEventListener('click', function() {
  window.open('index1.html', '_blank');
});
let projects = [
    {
        title: "Community Science Museum", 
        image: "images/CSM.jpg",
        description: "The brief for this project was to make a website for an interactive science museum called the Community Science Museum, with a core target audience of kids/teens 7-15 as well as their parents. This site is built with HTML and CSS",
        github: "https://github.com/AndreasYager/SP1-Community-Science-Museum",
        live: "https://chipper-cactus-f27e23.netlify.app",
    },
    {
        title: "Rainy Days", 
        image: "images/RD.jpg",
        description: "This project is meant to fetch products from a Wordpress API and display them on my site. The site is designed with HTML and CSS. Required Javascript was fetching products, functioning cart, and form validation.",
        github: "https://github.com/AndreasYager/Rainy-Days-4.1",
        live: "https://symphonious-dieffenbachia-ce7925.netlify.app",
    },
    {
        title: "Oslo Ironworks",
        image: "images/OI.jpg",
        description: "The brief for this project was to make a blog. Required javascript functions were fetching posts from Wordpress API, a slider displaying posts, and form validation.",
        github: "https://github.com/AndreasYager/Oslo-Ironworks",
        live: "https://wondrous-bubblegum-1beecb.netlify.app",
    },
];


let currentProject = 0;

window.onload = function() {
    displayProject();
}

function changeProject(direction) {
    currentProject += direction;
    if (currentProject < 0) currentProject = projects.length - 1;
    if (currentProject == projects.length) currentProject = 0;
    displayProject();
}

function displayProject() {
    document.getElementById("project-title").innerText = projects[currentProject].title;
    document.getElementById("project-image").src = projects[currentProject].image;
    document.getElementById("project-description").innerText = projects[currentProject].description;
    document.getElementById("project-github").href = projects[currentProject].github;
    document.getElementById("project-live").href = projects[currentProject].live;
}


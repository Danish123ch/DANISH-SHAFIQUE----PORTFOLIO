const myprojects = [
    {
        id: 1,
        name : "NGO DONATION DATABASE",
        catagory : "DataBase",
        description: "A database system for managing donations to various NGOs, built with SQL. It allows users to track donations, manage donor information, and generate reports on donation trends. The system is designed to be user-friendly and efficient, ensuring that NGOs can easily manage their donation records.",
        url: ""
    },
    {
        id:2,
        name: "Image Gallery",
        catagory: "Web Based",
        description: "A visually appealing image gallery created using HTML, CSS, and JavaScript. This project showcases a collection of images in a grid layout, allowing users to click on thumbnails to view larger versions. The gallery is designed to be responsive, ensuring a seamless experience across various devices.",
        url: "https://danish123ch.github.io/CodeAlpha_Aesthetically/"
    },
    {
        id : 3,
        name : "Tech Product Showcase",
        catagory : "Web Based",
        description : "A dynamic web page built with HTML, CSS, and JavaScript to showcase a variety of tech products. This project features an interactive layout where users can explore different products, view detailed descriptions, and navigate through categories. The design emphasizes a modern aesthetic while ensuring functionality and responsiveness.",
        url: "https://www.linkedin.com/posts/danish-shafique-5308a6388_webdevelopment-frontend-html-ugcPost-7458491926065922050-oRnl/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF-HNXQBQizWISmmlldLi0jJ4MNWOnbtOO8"
    },
    {
        id : 4,
        name : "Uni Info Portal",
        catagory : "Web Based",
        description : "A comprehensive university information portal developed using HTML, CSS, and JavaScript. This project provides users with easy access to essential university details such as course offerings, faculty information, campus facilities, and event updates. The portal is designed to be user-friendly and responsive, ensuring a seamless experience across all devices.",
        url: "https://danish123ch.github.io/uni-portal/"
    },
    {
        id : 5,
        name : "Uog Nevigation System",
        catagory : "Console based",
        description : "An efficient campus navigation system developed in C++ to map out the University of Gujrat (UOG). Utilizing Graph data structures and Dijkstra’s/BFS algorithms in Data Structures and Algorithms (DSA), this console-based application models campus locations as nodes and pathways as edges to calculate the shortest, quickest routes between lecture halls, departments, and landmarks",
        url : "https://github.com/Danish123ch/DSA-PROJECT.git"
    },
    {
        id : 6,
        name : " School Mangement System",
        catagory : "Console based",
        description : "A comprehensive School Management System built in C++ that leverages core Object-Oriented Programming (OOP) concepts like inheritance, polymorphism, and encapsulation. The application cleanly separates and manages data for students, teachers, and courses, utilizing file handling for permanent data storage and a structured menu-driven interface.",
        url : "https://github.com/Danish123ch/OOP-PROJECT-SCHOOL-MANAGEMENT-SYSTEM-.git"
    },{
        id: 7,
        name : "Calculator",
        catagory : "Web Based",
        description: "A sleek, responsive web calculator built with HTML, CSS, and JavaScript. Designed with user experience in mind, this project features a clean, modern interface and handles core arithmetic operations flawlessly across all device sizes.",
        url: "https://danish123ch.github.io/CodeAlpha_Calculator/"
    }
];

let showingAll = false;
const initialLimit = 3;

function renderprojects(){
    const container=document.getElementById("projectsgrid");
    const btn = document.getElementById("viewAllBtn");
    container.innerHTML="";
    
    const projectsToDisplay = showingAll ? myprojects : myprojects.slice(0, initialLimit);
    projectsToDisplay.forEach(project=>{
        const card=document.createElement("div");
        card.classList.add("project");
        card.innerHTML=`
            <h2>${project.name}</h2>
            <h5>${project.catagory}</h5>
            <p>${project.description}</p>
            <a href="${project.url}" target="_blank">View Project -></a>
        `;
        container.appendChild(card);
    });

    if (showingAll) {
        btn.innerText = "Show Less";
    } else {
        btn.innerText = "View All Projects";
    }
}

document.getElementById("viewAllBtn").addEventListener("click", () => {
    showingAll = !showingAll; 
    renderprojects();         
});

renderprojects();
function toggleMenu() {
    const navLinks = document.getElementById("links");
    navLinks.classList.toggle("active");
}

function toggleMenu(){
    document.getElementById("Links").classList.toggle("show");
}
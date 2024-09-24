// Initialize EmailJS
(function() {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

// Add dynamic projects
const projects = [
    {
        title: "Biometric Attendance System",
        description: "A penetration test on a biometric attendance system with PostgreSQL.",
        link: "#"
    },
    {
        title: "Network Traffic Analysis Tool",
        description: "A network traffic analyzer with real-time logging and threat detection.",
        link: "#"
    }
];

const projectContainer = document.getElementById('project-cards');
projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'col-md-6 mb-4';
    card.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <a href="${project.link}" class="btn btn-warning">View Project</a>
            </div>
        </div>
    `;
    projectContainer.appendChild(card);
});

// Add dynamic blogs
const blogs = [
    {
        title: "Understanding Cybersecurity",
        link: "https://medium.com/@your-profile/understanding-cybersecurity",
        thumbnail: "https://via.placeholder.com/150"
    },
    {
        title: "IoT in Modern Applications",
        link: "https://medium.com/@your-profile/iot-in-modern-applications",
        thumbnail: "https://via.placeholder.com/150"
    }
];

const blogContainer = document.getElementById('blog-cards');
blogs.forEach(blog => {
    const card = document.createElement('div');
    card.className = 'col-md-6 mb-4';
    card.innerHTML = `
        <div class="card">
            <img src="${blog.thumbnail}" class="card-img-top" alt="${blog.title}">
            <div class="card-body">
                <h5 class="card-title">${blog.title}</h5>
                <a href="${blog.link}" class="btn btn-warning">Read Blog</a>
            </div>
        </div>
    `;
    blogContainer.appendChild(card);
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message, please try again later.');
        });
});

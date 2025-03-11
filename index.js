// Date Script
document.addEventListener('DOMContentLoaded', function() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Update: ${lastModified}`;
});

// Hamburger Menu Script
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.sub-header');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('show');
        }
    });
});

// Course Script
document.addEventListener('DOMContentLoaded', function() {
    const courses = [
        { code: 'CSE 110', name: 'Programming Building Blocks', credits: 3, completed: true },
        { code: 'WDD 130', name: 'Web Fundamentals', credits: 3, completed: true },
        { code: 'CSE 111', name: 'Programming with Functions', credits: 3, completed: false },
        { code: 'WDD 131', name: 'Dynamic Web Fundamentals', credits: 3, completed: false },
        { code: 'CSE 210', name: 'Programming with Classes', credits: 3, completed: true },
        { code: 'WDD 230', name: 'Web Frontend Development I', credits: 3, completed: false }
    ];

    const courseList = document.getElementById('course-list'); 
    const allCoursesButton = document.getElementById('all-courses');
    const cseCoursesButton = document.getElementById('cse-courses');
    const wddCoursesButton = document.getElementById('wdd-courses');
    const totalCreditsElement = document.getElementById('total-credits');

    function displayCourses(filter = 'all') {
        courseList.innerHTML = ''; 
        let totalCredits = 0;

        const filteredCourses = courses.filter(course => {
            if (filter === 'all') return true;
            if (filter === 'cse') return course.code.startsWith('CSE');
            if (filter === 'wdd') return course.code.startsWith('WDD');
        });

        filteredCourses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.classList.add('course-card');
            courseDiv.textContent = `${course.code} - ${course.name} (${course.credits} credits)`;

            if (course.completed) {
                courseDiv.classList.add('completed');
            }

            courseList.appendChild(courseDiv);
            totalCredits += course.credits;
        });

        totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
    }

    allCoursesButton.addEventListener('click', () => displayCourses('all'));
    cseCoursesButton.addEventListener('click', () => displayCourses('cse'));
    wddCoursesButton.addEventListener('click', () => displayCourses('wdd'));

    displayCourses();
});

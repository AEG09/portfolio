// Dropdown Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contact-btn');
    const contactMenu = document.getElementById('contact-menu');

    // Toggle menu on button click
    contactBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from bubbling to document
        contactMenu.classList.toggle('hidden');
        contactMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!contactMenu.contains(e.target) && !contactBtn.contains(e.target)) {
            contactMenu.classList.add('hidden');
            contactMenu.classList.remove('active');
        }
    });

    // Close menu when clicking an item
    contactMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            contactMenu.classList.add('hidden');
            contactMenu.classList.remove('active');
        });
    });
});

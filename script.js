// Optional JavaScript for form validation or interactivity can go here

// Example: Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

function clearInput() {
  document.getElementById('name').value = '';
}

function showSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display='flex'
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display='none'
}
// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navBar');
    const itemList = document.getElementById("itemList")
    const logo = document.getElementById("logo")
    const hamburger = this.document.getElementById("hamburger")
    if (window.scrollY > 50) { // Adjust this value as needed
      navbar.classList.add('scrolled');
      itemList.classList.add('scrolled')
      logo.classList.add('scrolled')
      hamburger.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled');
      itemList.classList.remove("scrolled")
      logo.classList.remove("scrolled")
      hamburger.classList.remove("scrolled")
    }
  });

//   Smooth scroll effect
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });

      const list = document.getElementById("itemList")
      list.style.display ="none"
    });
  });

  // Mobile hamburger effect (navbar)
  document.getElementById("hamburger").addEventListener("click", function() {
    let menu = document.getElementById("itemList");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});



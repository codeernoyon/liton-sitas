// for Mobile Menu//

const navLinks = document.getElementById("mobile_menu");
const header = document.querySelector(".header");
const hero = document.querySelector(".hero");
// function showMenu(){
//     navLinks.style.right = "0px";
// }
// function hideMenu(){
//     navLinks.style.right = "-250px";
// }



const headerOption = {
    threshold: .97,
    rootMargin: "0px",
  };
  
  const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("style");
      } else {
        header.classList.remove("style");
      }
    });
  }, headerOption);
  
  headerObserver.observe(hero);
  
  const heroOption = {
    threshold: 0,
    rootMargin: "0px",
  };
  
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        hero.classList.add("style");
      }
    });
  }, heroOption);
  
  heroObserver.observe(hero);

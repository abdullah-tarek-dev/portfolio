const refr = document.getElementById('abdullah');
const Nav = document.getElementById('nav');
const Btn = document.getElementById('menu-button');

Btn.addEventListener("click", () => {
    if (window.innerWidth <= 573) {
    if (Nav.style.display === 'block') {
        Nav.style.display = 'none';
    } else {
        Nav.style.display = 'block';
    }
}
  });
  
  refr.onclick = ()=>{
    location.reload();
}

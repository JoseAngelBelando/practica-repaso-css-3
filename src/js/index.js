// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const menuIconElement = document.getElementById('menu-icon');
const menuElement = document.getElementById('menu');

const toggleMenu = () => {
  //Preguntar si tiene la clase
  if (menuElement.classList.contains('menu-show')) {
    //Si la tiene, se la quitamos y ponemos icono de hamburguesa
    menuElement.classList.remove(menu - show);
    menuIconElement.src = './assets/images/icon-hamburger.svg';
  } else {
    //Si no la tiene, se la ponemos y ponemos ucono de cerrar
    menuElement.classList.add('menu-show');
    menuIconElement.src = './assets/images/icon-close.svg';
  }
};

menuIconElement.addEventListener('click', toggleMenu);

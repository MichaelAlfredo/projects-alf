import scrollTopButton from "./boton_scroll.js";
import slider from "./carrusel.js";
import countdown from "./cuenta_regresiva.js";
import searchFilter from "./filtro_busqueda.js";
import getGeolocation from "./geolicalizacion.js";
import hanburgerMenu from "./menu_hamburguesa.js";
import responsiveMedia from "./objeto_responsive.js";

import { digitalClock, alarm } from "./reloj.js";
import scrollSpy from "./scroll_espia.js";
import draw from "./sorteo.js";

import { moveBall, shorcuts } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";
import contactFormValidation from "./validaciones_formulario.js";
import smartVideo from "./video_inteligente.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hanburgerMenu(".panel-btn", ".panel", ".menu a");

  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Sep 10,2023", "Feliz cumpleaños 😊");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/watch?v=vnIJbg-2s7M&list=PLLRtBP5siE6claq46ZYUf2UkqfLKWamJN&index=1" target="_blank" rel="noopener">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/vnIJbg-2s7M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/p2Lz6gyWWoH9DFAn9" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25656.786708181306!2d-79.55142158437502!3d8.98296430000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8e31fbb2223%3A0x2fd43fc2ee8c3d18!2sF%26F%20Tower!5e1!3m2!1ses-419!2spa!4v1677167762180!5m2!1ses-419!2spa" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

  getGeolocation("geolocation");
  searchFilter(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidation();
});

d.addEventListener("keydown", (e) => {
  shorcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");

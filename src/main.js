'use strict';

import BlackTriangle from "./BlackTriangle";
//import style from './main.css';
import style from './style.styl';


const triangle = new BlackTriangle('#triangle');

window.setInterval(
  () => {
    triangle.rotate(10);
    triangle.render();
  },
  20
);

import { createHomepage } from "./page1";
import { createMenu } from "./page2";
import { createHomePage2 } from ".page3/"

document.querySelector('#button1').addEventListener("click", createHomepage);
document.querySelector('#button2').addEventListener("click", createMenu);
document.querySelector('#button3').addEventListener("click", createHomePage2);
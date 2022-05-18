import { createHomepage } from "./page1";
import { createMenu } from "./page2";
import { createAboutPage } from "./page3";

createHomepage();

document.querySelector('#button1').addEventListener("click", createHomepage);
document.querySelector('#button2').addEventListener("click", createMenu);
document.querySelector('#button3').addEventListener("click", createAboutPage);


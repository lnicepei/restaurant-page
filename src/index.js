import { createHomepage } from "./home";
import { createMenu } from "./menu";
import { createContactsPage } from "./contacts";
import { createMap } from "./map";

createHomepage();

document.querySelector('#button1').addEventListener("click", createHomepage);
document.querySelector('#button2').addEventListener("click", createMenu);
document.querySelector('#button3').addEventListener("click", createContactsPage);
document.querySelector('#button4').addEventListener("click", createMap);
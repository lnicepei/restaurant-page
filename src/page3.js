// function createAboutPage() {
//     const main = document.querySelector('.main');
//     main.innerHTML = "";
// }

// export {
//     createAboutPage 
// }
function createHomepage2() {
    const main = document.querySelector('.main');
    main.innerHTML = "";

    const image = document.createElement('img');
    image.src = "/src/images/ella-olsson-2IxTgsgFi-s-unsplash.jpg";
    const description = document.createElement('div');
    description.textContent = "The most delicious vegan cuisine of all times";
    
    document.body.appendChild(main);
    main.appendChild(description);
    main.appendChild(image);
}

export{
    createHomepage2
}
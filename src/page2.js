function createMenu() {
    const main = document.querySelector('.main');
    main.innerHTML = "";

    const image1 = document.createElement('img');
    image1.src = "/src/images/best-vegan-mac-and-cheese-recipe-550x757.jpg";
    main.appendChild(image1);
    
    const description1 = document.createElement('div');
    description1.textContent = "Amazing Vegan Mac and Cheese";
    main.appendChild(description1);

    const image2 = document.createElement('img');
    image2.src = "/src/images/sugar-snap-pea-and-carrot-soba-noodles-1-2-550x824.jpg";
    main.appendChild(image2);
    
    const description2 = document.createElement('div');
    description2.textContent = "Snap Pea and Carrot Soba Noodles";
    main.appendChild(description2);

    const image3 = document.createElement('img');
    image3.src = "/src/images/baked-vegetable-paella-recipe-550x824.jpg";
    main.appendChild(image3);
    
    const description3 = document.createElement('div');
    description3.textContent = "Vegetable Paella";
    main.appendChild(description3);

    const image4 = document.createElement('img');
    image4.src = "/src/images/best-lentil-soup-recipe-4-548x824.jpg";
    main.appendChild(image4);
    
    const description4 = document.createElement('div');
    description4.textContent = "Spiced Vegan Lentil Soup (AKA the Best!)";
    main.appendChild(description4);
}

export{
    createMenu
}
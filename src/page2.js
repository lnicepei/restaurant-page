function createMenu() {
    const main = document.querySelector('.main');
    main.innerHTML = "";

    const image1 = document.createElement('img');
    image1.src = "images/butternut-squash-chipotle-chili-recipe-0-1-550x822.jpg";
    
    const description1 = document.createElement('div');
    description1.textContent = "Butternut Squash Chipotle Chili with Avocado";

    const container1 = document.createElement('div');
    container1.appendChild(image1);
    container1.appendChild(description1);
    main.appendChild(container1);


    const image2 = document.createElement('img');
    image2.src = "images/sugar-snap-pea-and-carrot-soba-noodles-1-2-550x824.jpg";
    main.appendChild(image2);
    
    const description2 = document.createElement('div');
    description2.textContent = "Snap Pea and Carrot Soba Noodles";
    main.appendChild(description2);

    const container2 = document.createElement('div');
    container2.appendChild(image2);
    container2.appendChild(description2);
    main.appendChild(container2);


    const image3 = document.createElement('img');
    image3.src = "images/baked-vegetable-paella-recipe-550x824.jpg";
    main.appendChild(image3);
    
    const description3 = document.createElement('div');
    description3.textContent = "Vegetable Paella";
    main.appendChild(description3);

    const container3 = document.createElement('div');
    container3.appendChild(image3);
    container3.appendChild(description3);
    main.appendChild(container3);

    
    const image4 = document.createElement('img');
    image4.src = "images/best-lentil-soup-recipe-4-548x824.jpg";
    main.appendChild(image4);
    
    const description4 = document.createElement('div');
    description4.textContent = "Spiced Vegan Lentil Soup (AKA the Best!)";
    main.appendChild(description4);
    
    const container4 = document.createElement('div');
    container4.appendChild(image4);
    container4.appendChild(description4);
    main.appendChild(container4);
    
    
    const image5 = document.createElement('img');
    image5.src = "images/spaghetti-squash-burrito-bowls-3-1-550x824.jpg";
    main.appendChild(image5);
    
    const description5 = document.createElement('div');
    description5.textContent = "Spaghetti Squash Burrito Bowls";
    main.appendChild(description5);

    const container5 = document.createElement('div');
    container5.appendChild(image5);
    container5.appendChild(description5);
    main.appendChild(container5);
    
    
    const image6 = document.createElement('img');
    image6.src = "images/west-african-peanut-soup-recipe-4-1-550x824.jpg";
    main.appendChild(image6);
    
    const description6 = document.createElement('div');
    description6.textContent = "West African Peanut Soup";
    main.appendChild(description6);
    
    const container6 = document.createElement('div');
    container6.appendChild(image6);
    container6.appendChild(description6);
    main.appendChild(container6);
    

    const scrollContainer = document.querySelector(".main");
    scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});
}

export{
    createMenu
}
function createHomepage() {
    const main = document.querySelector('.main');
    main.innerHTML = "";
    
    const image = document.createElement('img');
    image.src = '/src/images/shawnanggg-nmpW_WwwVSc-unsplash.jpg';

    const description = document.createElement('div');
    description.textContent = "The most delicious vevdsgan cuisine of all times";
    
    main.appendChild(image);
    main.appendChild(description);
    document.body.appendChild(main);
}

export{
    createHomepage
}
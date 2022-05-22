function createHomepage() {
    const main = document.querySelector('.main');
    main.innerHTML = "";

    document.body.style.background = 'url("images/kiki-wang-TOc_JldXOX8-unsplash.jpg") no-repeat';

    const description = document.createElement('div');
    description.className = 'description';
    // description.textContent = 'Delicious vegan cuisine';
    description.innerHTML = '<marquee direction="left" scrollamount="20">Delicious vegan cuisine.  Unusual recipes.  Unrepeatable experience.  </marquee>'

    // const title = document.createElement('p');
    // title.textContent = 'We are ready to please all your tastes in vegan food'

    main.appendChild(description);
    // description.appendChild(title);
    document.body.appendChild(main);
}

export{
    createHomepage
}
function createHomepage() {
    const main = document.querySelector('.main');
    main.innerHTML = "";
    main.style.display = 'flex';

    document.body.style.background = 'url("images/kiki-wang-TOc_JldXOX8-unsplash.jpg") no-repeat';
    document.body.style.backgroundAttachment = 'fixed';

    const description = document.createElement('div');
    description.className = 'description';
    description.innerHTML = '<marquee direction="left" scrollamount="20">Delicious vegan cuisine.  Unusual recipes.  Unrepeatable experience.  </marquee>'

    const title = document.createElement('div');
    title.className = 'title';
    const svg = document.createElement('div');
    svg.innerHTML = '<svg style="width:20wv;height:20vh" viewBox="0 0 24 24"><path fill="currentColor" d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" /></svg>'
    const titleText1 = document.createElement('p');
    titleText1.textContent = 'We are ready to please all your tastes in vegan food';
    title.appendChild(svg);
    title.appendChild(titleText1);
    
    const titleText2 = document.createElement('p');
    titleText2.textContent = 'Come and have the meal you will never forget!';
    title.appendChild(titleText2);

    main.appendChild(title);
    main.appendChild(description);
    document.body.appendChild(main);
}

export{
    createHomepage
}
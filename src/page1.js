function createHomepage() {
    const main = document.querySelector('.main');
    main.innerHTML = "";

    document.body.style.background = 'url("images/rod-long-kImU-9S9uh8-unsplash.jpg") no-repeat';

    const description = document.createElement('div');
    description.textContent = "The most delicious vevdsgan cuisine of all times";
    
    main.appendChild(description);
    document.body.appendChild(main);
}

export{
    createHomepage
}
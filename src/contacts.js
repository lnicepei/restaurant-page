function createContactsPage() {
    const main = document.querySelector('.main');
    main.innerHTML = "";
    main.style.display = 'flex';

    const info = document.createElement('div');
    document.querySelector('.main').appendChild(info);
    info.className = 'info';

    const phone = document.createElement('div');
    phone.textContent = "Phone: +12145237052";
    

    const address = document.createElement('div');
    address.textContent = "Address: NYC";


    const email = document.createElement('div');
    email.textContent = "Email: veganfood@gmail.com";

    info.appendChild(phone);
    info.appendChild(address);
    info.appendChild(email);
}


export {
    createContactsPage 
}
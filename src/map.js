function createMap() {
    const main = document.querySelector('.main');
    main.innerHTML = "";
    main.style.display = 'flex';

    const mapHolder = document.createElement('div');
    document.querySelector('.main').appendChild(mapHolder);
    mapHolder.className = 'mapholder';
    mapHolder.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=mcdonalds%20new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies-online.net">fmovies</a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">website google maps</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>'
}


export {
    createMap 
}
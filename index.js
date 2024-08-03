



function fetchPics(){
    fetch("https://repo-tech2edge.github.io/tasks/sample.json") .then(
    (response)=>
     response.json()
    )
    .then ((data) => {
       console.log(data.series.img);
       var bannerTag = document.querySelector('.banner').style.background = `url(${data.series.img}) rgba(0,0,0,0.5)`
       

       console.log(data.episodes);
       var data = data.episodes;
       console.log(data);
       var items = document.querySelector('.items')
       for(obj of data){
        // console.log(obj.img);
        var image = obj.img;
        console.log(image);

        items.innerHTML += `
         <div class="item col-xl-3 col-12">
            <img class="item-image" src='${image}'/>
            <span class="item-title">${obj.id}. ${obj.title}</span>
            <span class="item-load-icon button opacity-none"><i class="fa fa-play"></i></span>
            <div class="item-description opacity-none">
                <span class="float-start">Episode ${obj.id}</span>
                 <span class="float-end">56 min</span>
            </div>
        </div>
        
        `
       }  
    })
   
    .catch (err=>console.log(err))
}

fetchPics()


// /////////////////////////////////////////////


function openModal(imageUrl) {
    document.getElementById('modal-image').src = imageUrl;
    $('#imageModal').modal('show');
}


function MouseWheelHandler(e, element) {
    var delta = 0;
    if (typeof e === 'number') {
    delta = e;
    } else {
    if (e.deltaX !== 0) {
    delta = e.deltaX;
    } else {
    delta = e.deltaY;
    }
    e.preventDefault();
    }
   
   element.scrollLeft -= (delta);
   
   }
   
   window.onload = function() {
    var carousel = {};
    carousel.e = document.getElementById('carousel');
    carousel.items = document.getElementById('carousel-items');
    carousel.leftScroll = document.getElementById('left-scroll-button');
    carousel.rightScroll = document.getElementById('right-scroll-button');
   
    carousel.items.addEventListener("mousewheel", handleMouse, false);
    carousel.items.addEventListener("scroll", scrollEvent);
    carousel.leftScroll.addEventListener("click", leftScrollClick);
    carousel.rightScroll.addEventListener("click", rightScrollClick);
   
   setLeftScrollOpacity();
    setRightScrollOpacity();
   
   function handleMouse(e) {
    MouseWheelHandler(e, carousel.items);
    }
   
   function leftScrollClick() {
    MouseWheelHandler(100, carousel.items);
    }
   
   function rightScrollClick() {
    MouseWheelHandler(-100, carousel.items);
    }
   
   function scrollEvent(e) {
    setLeftScrollOpacity();
    setRightScrollOpacity();
    }
   
   function setLeftScrollOpacity() {
    if (isScrolledAllLeft()) {
    carousel.leftScroll.style.opacity = 0;
    } else {
    carousel.leftScroll.style.opacity = 1;
    }
    }
   
   function isScrolledAllLeft() {
    if (carousel.items.scrollLeft === 0) {
    return true;
    } else {
    return false;
    }
    }
   
   function isScrolledAllRight() {
    if (carousel.items.scrollWidth > carousel.items.offsetWidth) {
    if (carousel.items.scrollLeft + carousel.items.offsetWidth === carousel.items.scrollWidth) {
    return true;
    }
    } else {
    return true;
    }
   
   return false;
    }
   
   function setRightScrollOpacity() {
    if (isScrolledAllRight()) {
    carousel.rightScroll.style.opacity = 0;
    } else {
    carousel.rightScroll.style.opacity = 1;
    }
    }
   }
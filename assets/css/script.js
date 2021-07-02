var icon = document.getElementById('icon');
icon.onclick = function(){
    document.body.classList.toggle('dark-mood');
    if(document.body.classList.contains('dark-mood')){
        icon.src = "./assets/img/sun.png";
        console.log(icon.src);
    }else{
        icon.src = "./assets/img/moon.png";
    }
}
// let sliderelement = document.getElementsByClassName('slider')[0];
//  sliderelement.appendChild = ('sliderElements1');
//  console.log(sliderelement);
// let sliderElements1 = document.createElement('div');
// sliderElements1.classList = ('slider-content');
// sliderElements1.innerHTML = `
//                 <div class="slide-img">
//                     <img src="./assets/img/1.jpg" alt="" class="img">
//                 </div>
//                 <p class="slider-text text">
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione aperiam <br> cumque tempora praesentium cum molestiae ea doloremque impedit <br> quaerat nam?
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus <br> assumenda eos reprehenderit excepturi accusantium ullam recusandae esse ipsa, eius repellendus.
//                 </p>
//                 <b class="name text">Ms ABcd</b>`
//      console.log(sliderElements1);

// let sliderElements2 = document.createElement('div');
// sliderElements2.classList= ('slider-content');
// sliderElements2.innerHTML = `
//         <div class="slide-img">
//         <img src="./assets/img/3.jpg" alt="" class="img">
//         </div>
//             <p class="slider-text text">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione aperiam <br> cumque tempora praesentium cum molestiae ea doloremque impedit <br> quaerat nam?
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus <br> assumenda eos reprehenderit excepturi accusantium ullam recusandae esse ipsa, eius repellendus.
//             </p>
//             <b class="name text">Ms ABcd</b>`




// let sliderElements3 = document.createElement('div');
//     sliderElements3.classList = ('slider-content');
//     sliderElements3.innerHTML = `
//         <div class="slide-img">
//         <img src="./assets/img/1.jpg" alt="" class="img">
//         </div>
//             <p class="slider-text text">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione aperiam <br> cumque tempora praesentium cum molestiae ea doloremque impedit <br> quaerat nam?
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus <br> assumenda eos reprehenderit excepturi accusantium ullam recusandae esse ipsa, eius repellendus.
//             </p>
//             <b class="name text">Ms ABcd</b>`



//             var i = 0;
//             var slider =[];
//             var time = 2000;

//             slider[0] = sliderElements1;
//             slider[1] = sliderElements2;
//             slider[2] = sliderElements3;

//             function sliderFunction(){
//                 document.slide.innerHTML = slider[i];
//                 if(i < slider.length -1){
//                     i++
//                 } else{
//                     i = 0
//                 }
//                 setTimeout("sliderFunction()", time);
//             }


const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.header-title, .header-text, .freelance`, {
    interval: 200
})
const img = ScrollReveal({
    origin: 'right',
    distance:'200px',
    duration:2000,
    reset: true
})
img.reveal(`.img-box, .right`,{
    interval: 200
})
const text = ScrollReveal({
    origin: 'left',
    distance:'200px',
    duration:2000,
    reset: true
})
text.reveal(`.about-text, .left`,{
    interval: 200
})
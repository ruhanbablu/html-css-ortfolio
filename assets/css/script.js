var icon = document.getElementById('icon');
icon.onclick = function(){
    document.body.classList.toggle('dark-mood');
    if(document.body.classList.contains('dark-mood')){
        icon.src = "./assets/img/sun.png";
    }else{
        icon.src = "./assets/img/moon.png";
    }
}

    
let nav = document.querySelector('.nav-bar');
    const colorPick = document.querySelectorAll('.color');
     colorPick.forEach(function(item){

         item.addEventListener('click',function(e){
             let style = e.currentTarget.classList;
             if (style.contains('green')){
                let color = document.querySelectorAll('.brand-color');
                color.forEach(function(brandColor){
                    brandColor.style.color = '#0be881'
                    let icon = document.querySelectorAll('.icon');
                    icon.forEach(function(item){
                        item.style.backgroundColor = '#0be881';
                        let bgc = document.querySelectorAll('.time-name');
                        bgc.forEach(function(time){
                            time.style.backgroundColor = '#0be881'
                        })
                        
                    })
                })
             }else if (style.contains('red')){
                let color = document.querySelectorAll('.brand-color');
                color.forEach(function(brandColor){
                    brandColor.style.color = '#ad063b'
                    let icon = document.querySelectorAll('.icon');
                    icon.forEach(function(item){
                        item.style.backgroundColor = '#ad063b'
                        let bgc = document.querySelectorAll('.time-name');
                        bgc.forEach(function(time){
                            time.style.backgroundColor = '#ad063b'
                        })
                    })
             })
             } else if (style.contains('blue')){
                let color = document.querySelectorAll('.brand-color');
                color.forEach(function(brandColor){
                    brandColor.style.color = '#3867d6'
                    let icon = document.querySelectorAll('.icon');
                    icon.forEach(function(item){
                        item.style.backgroundColor = '#3867d6'
                        let bgc = document.querySelectorAll('.time-name');
                        bgc.forEach(function(time){
                            time.style.backgroundColor = '#3867d6'
                        })
                    })
             })
            }else if (style.contains('yellow')){
                let color = document.querySelectorAll('.brand-color');
                color.forEach(function(brandColor){
                    brandColor.style.color = '#d4c815'
                    let icon = document.querySelectorAll('.icon');
                    icon.forEach(function(item){
                        item.style.backgroundColor = '#d4c815'
                        let bgc = document.querySelectorAll('.time-name');
                        bgc.forEach(function(time){
                            time.style.backgroundColor = '#d4c815'
                        })
                    })
             })
            }else if (style.contains('pink')){
                let color = document.querySelectorAll('.brand-color');
                color.forEach(function(brandColor){
                    brandColor.style.color = '#fc427b'
                    let icon = document.querySelectorAll('.icon');
                    icon.forEach(function(item){
                        item.style.backgroundColor = '#fc427b'
                        let bgc = document.querySelectorAll('.time-name');
                        bgc.forEach(function(time){
                            time.style.backgroundColor = '#fc427b'
                        })
                    })
             })
            }
            else if (style.contains('purple')){
                let color = document.querySelectorAll('.brand-color');
                color.forEach(function(brandColor){
                    brandColor.style.color = '#6f1e51'
                    let icon = document.querySelectorAll('.icon');
                    icon.forEach(function(item){
                        item.style.backgroundColor = '#6f1e51'
                        let bgc = document.querySelectorAll('.time-name');
                        bgc.forEach(function(time){
                            time.style.backgroundColor = '#6f1e51'
                        })
                    })
             })
            }

         })
     })

// var red = document.getElementsByClassName('red')[0];
// red.onclick = function(){
//     document.getElementsByClassName('brand-logo')[0].style.color ='#f53b75';
//     let icon = document.getElementsByClassName('icon');
//     let iconList = Array.from(icon);
//     iconList.forEach(function(item){
//         item.style.backgrounColor = '#f53b75';
//     })
// }
//     console.log(icon);
   
    // document.getElementsByClassName('icon')[3].style.hover.backgroundColor ='#f53b75';

// }
// var green = document.getElementsByClassName('green')[0];
// green.onclick = function(){
//     document.body.classList.toggle('green-color');
//     document.body.remove.classList('red-color,green-color, blue-color,yellow-color, pink-color, purple-color');
// }
// var blue = document.getElementsByClassName('blue')[0];
// blue.onclick = function(){
//     document.body.classList.toggle('blue-color');
//     document.body.remove.classList('red-color,blue-color green-color,yellow-color, pink-color, purple-color');
// }
// var yellow = document.getElementsByClassName('yellow')[0];
// yellow.onclick = function(){
//     document.body.classList.toggle('yellow-color');
//     document.body.remove.classList('red-color, yellow-color, blue-color, green-color, pink-color, purple-color');
// };
// var pink = document.getElementsByClassName('pink')[0];
// pink.onclick = function(){
//     document.body.classList.toggle('pink-color');
//     document.body.remove.classList('red-color, pink-color, blue-color,yellow-color, green-color, purple-color');
// };
// var purple = document.getElementsByClassName('purple')[0];
// purple.onclick = function(){
//     document.body.classList.toggle('purple-color');
//     document.body.remove.classList('red-color, purple-color, blue-color,yellow-color, pink-color, green-color');
// };
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
    distance:'50px',
    duration:1000,
    reset: true
})
img.reveal(`.img-box, .right, .grid-item, .card`,{
    interval:100
})
const text = ScrollReveal({
    origin: 'left',
    distance:'50px',
    duration:2000,
    reset: true
})
text.reveal(`.about-text, .left`,{
    interval: 200
})
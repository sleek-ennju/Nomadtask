let hamBurger = document.getElementById("burger");
const nav = document.getElementById("navigation-bar");
const chevron = document.querySelectorAll(".chevron");
// console.log(chevron);

hamBurger.addEventListener('click', ()=>{
   if(nav.style.display == "" || nav.style.display == "none"){
        nav.style.display = "block";
        nav.style.height = "auto";
        nav.style.position = "relative";
    }else{
        nav.style.display = "none";
        
    }
});

chevron.forEach((arrow) =>{
    arrow.addEventListener('click', () => {
        let boxes = document.querySelectorAll(".second_list");
        boxes.forEach((box) =>{
            if (box.style.display == "none" || box.style.display == "") {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        })
    })
})
    
// firstChevron.onclick = () =>{
//     console.log("I am here!");
// }

// chevron.forEach(arrow => {
//     arrow.addEventListener("click", () => {
//         console.log("I am here!");
//         // const list = document.querySelectorAll(".second_list");
//         // list.forEach(e =>{
//         //     if (e.style.display == "none" || e.style.display == "") {
//         //         e.style.display = "block";
//         //     } else {
//         //         e.style.display = "none";
//         //     }
//         // })
       
//     })
    
// })





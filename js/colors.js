let footer = document.getElementById("footer");
let listItem = document.querySelectorAll(".list-item a");


let btnLightVividPurple = document.querySelector(".bg-lightVividPurple");
let btnCyanVividPurple = document.querySelector(".bg-cyanVividPurple");


let btnLuminousVividAmber = document.querySelector(".bg-luminousVividAmber");
let btnLuminousVividOrange = document.querySelector(".bg-luminousVividOrange");


let btnLightCyanGreen = document.querySelector(".bg-lightCyanGreen");
let btnVividCyanGreen = document.querySelector(".bg-vividCyanGreen");


let btnPaleCyanBlue = document.querySelector(".bg-paleCyanBlue");
let btnVividCyanBlue = document.querySelector(".bg-vividCyanBlue");


function bgColorChange(){
    // bg-lightVividPurple
    btnLightVividPurple.addEventListener("click", ()=> {
        footer.classList.toggle("bg-lightVividPurple");
    })
    
    // bg-CyanVividPurple
    btnCyanVividPurple.addEventListener("click", ()=> {
        footer.classList.toggle("bg-cyanVividPurple");
    })

    // btnLuminousVividAmber
    btnLuminousVividAmber.addEventListener("click", ()=> {
        footer.classList.toggle("bg-luminousVividAmber");
    })

    // btnLuminousVividOrange
    btnLuminousVividOrange.addEventListener("click", ()=> {
        footer.classList.toggle("bg-luminousVividOrange");
    })

    // btnLightCyanGreen
    btnLightCyanGreen.addEventListener("click", ()=> {
        footer.classList.toggle("bg-lightCyanGreen");
    })

    // btnVividCyanGreen
    btnVividCyanGreen.addEventListener("click", ()=> {
        footer.classList.toggle("bg-vividCyanGreen");
    })

    // btnPaleCyanBlue
    btnPaleCyanBlue.addEventListener("click", ()=> {
        footer.classList.toggle("bg-paleCyanBlue");
    })

    // btnVividCyanBlue
    btnVividCyanBlue.addEventListener("click", ()=> {
        footer.classList.toggle("bg-vividCyanBlue");
    });

    listItem.forEach((item) => {
        btnLightVividPurple.addEventListener("click", ()=> {
            item.classList.toggle("text-lightVividPurple");
        })
        
        // bg-CyanVividPurple
        btnCyanVividPurple.addEventListener("click", ()=> {
            item.classList.toggle("text-cyanVividPurple");
        })
    
        // btnLuminousVividAmber
        btnLuminousVividAmber.addEventListener("click", ()=> {
            item.classList.toggle("text-luminousVividAmber");
        })
    
        // btnLuminousVividOrange
        btnLuminousVividOrange.addEventListener("click", ()=> {
            item.classList.toggle("text-luminousVividOrange");
        })
    
        // btnLightCyanGreen
        btnLightCyanGreen.addEventListener("click", ()=> {
            item.classList.toggle("text-lightCyanGreen");
        })
    
        // btnVividCyanGreen
        btnVividCyanGreen.addEventListener("click", ()=> {
            item.classList.toggle("text-vividCyanGreen");
        })
    
        // btnPaleCyanBlue
        btnPaleCyanBlue.addEventListener("click", ()=> {
            item.classList.toggle("text-paleCyanBlue");
        })

        btnVividCyanBlue.addEventListener("click", () => {
            item.classList.toggle("text-vividCyanBlue");
        })
    })
}
bgColorChange();



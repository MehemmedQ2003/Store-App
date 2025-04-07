const data = {
    elementor: [
        {
            id: 1,
            img: "/img/elementor/icon-01.png",
            title: "Free Shipping",
            content: "Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo."
        },
        {
            id: 2,
            img: "/img/elementor/icon-02.png",
            title: "Secure Payments",
            content: "Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo."
        },
        {
            id: 3,
            img: "/img/elementor/icon-03.png",
            title: "Order Tracking",
            content: "Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo."
        },
        {
            id: 4,
            img: "/img/elementor/icon-04.png",
            title: "Big Discounts",
            content: "Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo."
        }
    ],
    products: [
        {
            id: 1,
            img_default: "/img/home/sellings/bracelets/bracelet-01-a-100x100.jpg",
            img_overlay: "/img/home/sellings/bracelets/bracelet-01-b-100x100.jpg",
            title: "Product Name 1",
            price: 495.00,
        },
        {
            id: 2,
            img_default: "/img/home/sellings/earrings/earrings-04-a-100x100.jpg",
            img_overlay: "/img/home/sellings/earrings/earrings-04-b-100x100.jpg",
            title: "Product Name 10",
            price: 1700.00,
        },
        {
            id: 3,
            img_default: "/img/home/sellings/earrings/earrings-05-a-100x100.jpg",
            img_overlay: "/img/home/sellings/earrings/earrings-05-b-100x100.jpg",
            title: "Product Name 11",
            price: 400.00,
        },
        {
            id: 4,
            img_default: "/img/home/sellings/earrings/earrings-06-a-400x500.jpg",
            img_overlay: "/img/home/sellings/earrings/earrings-06-b-400x500.jpg",
            title: "Product Name 12",
            price: 350.00,
        }
    ],
    slider: [
        {
            id: 1,
            img: "/img/slider/logo-01.png"
        },
        {
            id: 2,
            img: "/img/slider/logo-02.png"
        },
        {
            id: 3,
            img: "/img/slider/logo-03.png"
        },
        {
            id: 4,
            img: "/img/slider/logo-04.png"
        },
        {
            id: 5,
            img: "/img/slider/logo-05.png"
        },
        {
            id: 6,
            img: "/img/slider/logo-06.png"
        },
        {
            id: 7,
            img: "/img/slider/logo-07.png"
        },
        {
            id: 8,
            img: "/img/slider/logo-08.png"
        },
        {
            id: 9,
            img: "/img/slider/logo-09.png"
        }
    ]
};


function renderContent(data) {
    // Render Slider
    let slider = document.querySelector(".slider");
    if (slider) {
        data.slider.forEach(item => {
            slider.innerHTML += `
                <div class="slide">
                    <img src="${item.img}" alt="Slider Image">
                </div>`;
        });
    }

    // Render Cards
    let cardRows = document.querySelectorAll(".card-row");
    cardRows.forEach(row => {
        data.products.forEach(item => {
            row.innerHTML += `
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 p-1">
                    <div class="card">
                        <img src="${item.img_default}" alt="Product Image">
                        <div class="overlay">
                            <img src="${item.img_overlay}" alt="Overlay Image">
                            <div class="overlay-icon">
                                <a href="#" class="mb-1"><i class="fa-solid fa-basket-shopping"></i></a>
                                <a href="#"><i class="fa-solid fa-eye"></i></a>
                            </div>
                        </div>
                        <div class="card-price">
                            <p class="font-weight-lighter font-size-24 my-1">${item.title}</p>
                            <p class="font-size-20">$${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                </div>`;
        });
    });

    // Render Elementor
    let elementors = document.querySelectorAll(".elementor");
    elementors.forEach(element => {
        data.elementor.forEach(item => {
            element.innerHTML += `
                <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2 elementor">
                    <img class="mb-1" src="${item.img}" alt="Elementor Icon">
                    <h1 class="mb-1">${item.title}</h1>
                    <p class="font-size-20 text-secondary">${item.content}</p>
                </div>`;
        });
    });
}

// Call the function with the data
renderContent(data);



// Menu Icon

let menuIcon = document.querySelector(".menu-icon");
let navMenu = document.querySelectorAll(".nav-menu");

menuIcon.addEventListener("click", () => {
    navMenu.forEach((element) =>{
        element.classList.toggle("active");
    })
});


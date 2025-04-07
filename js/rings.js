const data = {
    products:[
        {
            rings : [
                {
                    id : 1,
                    name: "Product Name 1",
                    description : "Ut non elit lorem. Duis pharetra odio vitae nisl",
                    price : 1500,
                    discount : 0,
                    stock : 10,
                    images : [
                        "/img/home/sellings/rings/ring-01-a-100x100.jpg",
                        "/img/home/sellings/rings/ring-01-b-100x100.jpg",
                        "/img/home/sellings/rings/ring-01-c-100x100.jpg",
                        "/img/home/sellings/rings/ring-dring-d-100x100.jpg"
                    ]
                },
                {
                    id : 2,
                    name: "Product Name 2",
                    description : "Ut non elit lorem. Duis pharetra odio vitae nisl",
                    price : 2200,
                    discount : 0,
                    stock : 10,
                    images : [
                        "/img/home/sellings/rings/ring-02-a-100x100.jpg",
                        "/img/home/sellings/rings/ring-02-b-100x100.jpg",
                        "/img/home/sellings/rings/ring-02-c-100x100.jpg",
                        "/img/home/sellings/rings/ring-dring-d-100x100.jpg"
                    ]
                },
                {
                    id : 3,
                    name: "Product Name 3",
                    description : "Ut non elit lorem. Duis pharetra odio vitae nisl",
                    price : 1300,
                    discount : 0,
                    stock : 10,
                    images : [
                        "/img/home/sellings/rings/ring-03-a-100x100.jpg",
                        "/img/home/sellings/rings/ring-03-b-100x100.jpg",
                        "/img/home/sellings/rings/ring-03-c-100x100.jpg",
                        "/img/home/sellings/rings/ring-dring-d-100x100.jpg"
                    ]
                },
                {
                    id : 4,
                    name: "Product Name 4",
                    description : "Ut non elit lorem. Duis pharetra odio vitae nisl",
                    price : 750,
                    discount : 0,
                    stock : 10,
                    images : [
                        "/img/home/sellings/rings/ring-04-a-100x100.jpg",
                        "/img/home/sellings/rings/ring-04-b-100x100.jpg",
                        "/img/home/sellings/rings/ring-04-c-100x100.jpg",
                        "/img/home/sellings/rings/ring-dring-d-100x100.jpg"
                    ]
                },
                {
                    id : 5,
                    name: "Product Name 5",
                    description : "Ut non elit lorem. Duis pharetra odio vitae nisl",
                    price : 1700,
                    discount : 0,
                    stock : 10,
                    images : [
                        "/img/home/sellings/rings/ring-05-a-100x100.jpg",
                        "/img/home/sellings/rings/ring-05-b-100x100.jpg",
                        "/img/home/sellings/rings/ring-05-c-100x100.jpg",
                        "/img/home/sellings/rings/ring-dring-d-100x100.jpg"
                    ]
                },
                {
                    id : 6,
                    name: "Product Name 6",
                    description : "Ut non elit lorem. Duis pharetra odio vitae nisl",
                    price : 900,
                    discount : 0,
                    stock : 10,
                    images : [
                        "/img/home/sellings/rings/ring-06-a-100x100.jpg",
                        "/img/home/sellings/rings/ring-06-b-100x100.jpg",
                        "/img/home/sellings/rings/ring-06-c-100x100.jpg",
                        "/img/home/sellings/rings/ring-dring-d-100x100.jpg"
                    ]
                }
            ]
        }
    ]
};


function renderContent(data) {
    // Render Cards
    let cardRows = document.querySelectorAll(".card-row");
    cardRows.forEach(row => {
        data.products[0].rings.forEach(item => {
            row.innerHTML += `
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 p-1">
                    <div class="card">
                        <img src="${item.images[0]}" alt="Product Image">
                        <div class="overlay">
                            <img src="${item.images[1]}" alt="Overlay Image">
                            <div class="overlay-icon">
                                <a href="#" class="mb-1"><i class="fa-solid fa-basket-shopping"></i></a>
                                <a href="#"><i class="fa-solid fa-eye"></i></a>
                            </div>
                        </div>
                        <div class="card-price">
                            <p class="font-weight-lighter font-size-24 my-1">${item.name}</p>
                            <p class="font-size-20">$${item.price}</p>
                        </div>
                    </div>
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


const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

let carrito = JSON.parse(localStorage.getItem("changuito")) || [];

productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio} $</p>
    `;
    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);
    
    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log (carrito);
        saveLocal();
    });
});

verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = ""; /*necesito que se cierre el carrito y se limpie*/
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-tittle">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "❌";
    modalbutton.className = "modal-header-button";
/* Necesito que el modal desaparezca */
    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none"; 
    });

    modalHeader.append(modalbutton);


    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
    `;

    modalContainer.append(carritoContent)
    });

    const total = carrito.reduce ((acc, el) => acc + el.precio, 0);

    const totalbuying = document.createElement("div")
    totalbuying.className = "total.content"
    totalbuying.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(totalbuying);
    
});

// storage. localstorage, necesito set y get (linea 5)//
const saveLocal = () => {

localStorage.setItem("changuito", JSON.stringify (carrito));
};

JSON.parse(localStorage.getItem("changuito"));
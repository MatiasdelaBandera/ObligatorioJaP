let carrito = {}
const templateCard = document.getElementById("template-card")
const templateFooter = document.getElementById("template-footer").content;
const templateCarrito = document.getElementById("template-carrito").content;
const items = document.getElementById("items");
const footer = document.getElementById("footer");
const fragment = document.createDocumentFragment()



function nombreUsuarioF () {
    if (nombreUsuario = null) {
        nombreUsuario === "Usuario"
    }else {
        nombreUsuario = localStorage.getItem('nombre-Usuario')
    }
    return nombreUsuario
}

nombreUsuarioF();

let htmlContentToAppend = "";
htmlContentToAppend += nombreUsuario //+ `<img src" ` + imgUsuario + ` ">`

document.getElementById("nombreUsuario").innerHTML = nombreUsuario;




document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})


/*items.addEventListener('click' e => {
    btnAccion(e)
})*/

const fetchData = async () => {
    try {
        const res = await  fetch(PRODUCTS_URL)
        const data = await res.json()
        createCards(data)
    } catch (error) {
        console.log(error)
    }
}

const createCards = data => {
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.name

        //const clone = templateCard.cloneNode(true)
        //fragment.appendChild(clone)
    });
    //items.appendChild(fragment)
}

/*const addCarrito = e => {
    
    setCarrito(e.target.parentElement)
    
    e.stopPropagation()
}*/

/*const setCarrito = object => {
    const producto = {
        titulo: producto.name,
        precio: producto.unitCost,
        cantidad: producto.count,
        moneda: producto.cuurrency
    }
    console.log(producto)
    if(carrito.hasOwnProperty(producto.name)) {
        producto.cantidad = carrito[producto.name].cantidad + 1
    }
    
    carrito[producto.name] = {...producto}
    pintarCarrito()
}*/

/*const pintarCarrito = data => {

    
    data.articles.forEach(producto => {
    
    });
        

    items.innerHTML = ""
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector("th").textContent = producto.id
        templateCarrito.querySelectorAll("td")[0].textContent = producto.titulo
        templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad
        templateCarrito.querySelector(".btn-info").dataset.id = producto.id
        templateCarrito.querySelector(".btn-danger").dataset.id = producto.id
        templateCarrito.querySelector("span").textContent = producto.cantidad * producto.precio

        const clone = templateCarrito.cloneNonde(true)
        fragment.appendChild(clone)
        
    })
    
    items.appendChild(fragment)

    pintarFooter()

}*/

/*const pintarFooter = () => {
    footer.innerHTML = "" ;
    if(Object.keys(carrito).length === 0 ) {
        footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>` 
        return
    }

    const nCantidad = Object.values(carrito).reduce( (acc, {cantidad}) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)

    templateFooter.querySelectorAll("td")[0].textContent = nCantidad
    templateFooter.querySelector("span").textContent = nPrecio

    const  clone = templateFooter.cloneNonde(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.getElementById("vaciar-carrito")
    btnVaciar.addEventListener("click", () => {
        carrito {}
        pintarCarrito()
    })

}*/

/*const btnAccion = e => {
    e.target
    //Accion de aumentar
    if(e.target.classList.contains("btn-info")){
        const producto = carrito[e.target.dataset.id]
        producto.cantidad = ++
        carrito[e.target.dataset.id] = {...producto}
        pintarCarrito()
    } 

    //Accion de disminuir
    if(e.target.classList.contains("btn-danger")) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad = --
        if(producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }
    }

    e.stopPropagation()
}*/


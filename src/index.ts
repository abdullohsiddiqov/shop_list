
import "../src/main.css"
async function Products() {

    let products = await fetch("https://fakestoreapi.com/products");
    let product = await products.json();
    let productDiv = document.querySelector(".products") as HTMLDivElement;
    let select = document.querySelectorAll("select");
    let electronics = document.querySelector(".electronics") as HTMLButtonElement;
    let jewelery = document.querySelector(".jewelery") as HTMLButtonElement;
    let mens = document.querySelector(".mens") as HTMLButtonElement;
    let women = document.querySelector(".women") as HTMLButtonElement;
    let all = document.querySelector(".all") as HTMLButtonElement;
    let clear = document.querySelector(".clear") as HTMLButtonElement;
    let cont = document.querySelector(".count") as HTMLDivElement;

    for(let i = 0; i < product.length; i++) { 
      let imgDiv = document.createElement("div");
      let cards = document.createElement("div");
      let info = document.createElement("div");
      let name = document.createElement("div");
      let prise = document.createElement("div");

      cards.classList.add("cards");
      info.classList.add("info");
      name.classList.add("name");
      prise.classList.add("price");
      imgDiv.classList.add(".img");

      info.append(name, prise);
      prise.innerHTML = `$${product[i].price}`;
      name.innerHTML = `${product[i].title}`;
      cards.appendChild(imgDiv);
      cards.appendChild(info);
      cards.setAttribute("value", `${product[i].category}`);
      const box = createBox(`https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`);
      imgDiv.append(box);
      productDiv.append(cards);

      cards.addEventListener("click", () =>{
        
      });
      console.log(product[i]);
      electronics.addEventListener("click" , ()=>{ 
          if(cards.getAttribute("value") == "electronics"){ 
            productDiv.innerHTML = "";
            productDiv.append(cards);
            electronics.style.borderBottom = "1px solid #102A42"
            mens.style.borderBottom = "none";
            jewelery.style.borderBottom = "none"
            women.style.borderBottom = "none"
            all.style.borderBottom = "none"
          }
      });
      // const rangeInput = document.getElementById('myRange') as HTMLInputElement;
      // let count = 0;

      // rangeInput.addEventListener('change', () => {
      //   count++;
      //   cont.innerHTML = `$${count}`
      // });
      jewelery.addEventListener("click" , ()=>{
          if(cards.getAttribute("value") == "jewelery"){ 
            productDiv.innerHTML = "";
            productDiv.append(cards);
            jewelery.style.borderBottom = "1px solid #102A42"
            electronics.style.borderBottom = "none"
            mens.style.borderBottom = "none"
            all.style.borderBottom = "none"
          }
      });
      mens.addEventListener("click" , ()=>{ 
        if(cards.getAttribute("value") == "men's clothing"){ 
          productDiv.innerHTML = "";
          productDiv.append(cards);
          mens.style.borderBottom = "1px solid #102A42"
          electronics.style.borderBottom = "none"
          jewelery.style.borderBottom = "none"
          all.style.borderBottom = "none"
          women.style.borderBottom = "none"
        }
      })
      women.addEventListener("click" , ()=>{ 
        if(cards.getAttribute("value") == "women's clothing"){ 
          productDiv.innerHTML = "";
          productDiv.append(cards);
          women.style.borderBottom = "1px solid #102A42"
          electronics.style.borderBottom = "none"
          jewelery.style.borderBottom = "none"
          mens.style.borderBottom = "none"
        }
      })
      all.addEventListener("click" , ()=>{
        productDiv.append(cards);
        all.style.borderBottom = "1px solid #102A42"
        electronics.style.borderBottom = "none";
        women.style.borderBottom = "none";
        jewelery.style.borderBottom = "none"
        mens.style.borderBottom = "none"
      });
      clear.addEventListener("click" , ()=>{
        productDiv.append(cards);
        all.style.borderBottom = "1px solid #102A42"
        electronics.style.borderBottom = "none";
        women.style.borderBottom = "none";
        jewelery.style.borderBottom = "none"
        mens.style.borderBottom = "none"
      });
    }
    
    let categorys = await fetch("https://fakestoreapi.com/products/categories");
    let category = await categorys.json();
    for(let j = 0; j < category.length; j++){ 
      
    }
}
Products()
import { loadImage } from "./image";
import { Spinner } from "./spinner";
import { Sort } from "./sort";
import { range } from "./range";
const images: HTMLImageElement[] = [];

function createBox(imgURL: string) {
	const box = document.createElement("div");
	box.className = "box";
	const image = document.createElement("img");
	box.appendChild(image);
	images.push(image);

	loadImage(imgURL)
		.then(() => (image.src = imgURL))
	return box;
}
Spinner();
Sort();
range();



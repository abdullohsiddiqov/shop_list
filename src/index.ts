
import "../src/main.css"
async function Products() {
    let products = await fetch("https://fakestoreapi.com/products");
    let product = await products.json();
    let productDiv = document.querySelector(".products") as HTMLDivElement;
    let select = document.querySelectorAll("select");
    select.forEach((option)=>{ 
      console.log(option);
    });
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
      console.log(product[i]);
    }
    let categorys = await fetch("https://fakestoreapi.com/products/categories");
    let category = await categorys.json();
    for(let j = 0; j < category.length; j++){ 
      console.log(category[j]);
      // let electronics = document.querySelector(".electronics") as HTMLButtonElement;
      // electronics.addEventListener("click",()=>{ 
      //   console.log(category[j]);
      //   if(electronics.value === "electronics" && category[j].category === "electronics"){ 
      //     let catg = document.querySelector(".catg") as HTMLDivElement;
      //     catg.innerHTML = '';
      //     let electronicsBox = document.createElement("div");
      //     electronicsBox.className = "catg";
      //     electronicsBox.append(`<div>jalab</div>`)
          
      //   }
      // })
      // let jewelery = document.querySelector(".jewelery") as HTMLButtonElement;
      // jewelery.addEventListener("click",()=>{ 
      //   if(jewelery.value == "jewelery"){ 
          
      //   }
      // })
      // let mens = document.querySelector(".mens") as HTMLButtonElement;
      // mens.addEventListener("click",()=>{ 
      //   if(mens.value == "men's clothing"){ 
          
      //   }
      // })
      // let women = document.querySelector(".women") as HTMLButtonElement;
      // women.addEventListener("click",()=>{ 
      //   if(women.value == "women's clothing"){
          
      //   }
      // })
    }
}
Products()
import { loadImage } from "./image";
import { Spinner } from "./spinner";
import { Sort } from "./sort";
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

 
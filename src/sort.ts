export async function Sort(){ 
    let sort = await fetch("https://fakestoreapi.com/products/categories");
    let sorted = await sort.json();
}
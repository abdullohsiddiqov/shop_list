export function Spinner(){ 
    let Spinner =  document.querySelector(".spinner-border") as HTMLDivElement;
    window.addEventListener("load",()=>{ 
        Spinner.style.display = "none";
    })
}
export function range(){ 
    const value = document.querySelector("#value");
    const input = document.querySelector("#pi_input");
    value.textContent = input.value;
    input.addEventListener("input", (event) => {
      value.innerHTML = `$${event.target.value}`;
    });
}
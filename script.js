

const inputs = window.document.querySelectorAll("input")

function changes(){
    const suffix = this.dataset.type || " ";
    console.log(this.value,suffix)
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix)
}

inputs.forEach(input => input.addEventListener("change",changes));
inputs.forEach(input => input.addEventListener("mousemove",changes));
console.log(inputs)


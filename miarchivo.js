let input1 = document.getElementById("Producto");
let input2 = document.getElementById("Cuotas");
input1.onchange = () => {console.log("valor1")};
input2.onchange = () => {console.log("valor2")};

input1.innerHTML= "<h2>Productos apto para finaciación</h2>";
input1.className="productoFinanciado";

document.body.append(input1);

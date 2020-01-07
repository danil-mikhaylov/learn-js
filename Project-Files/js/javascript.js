function print(output) {
  this.div = document.getElementById("output");
  this.p = document.createElement("p");
  this.p.innerText = output;
  this.div.appendChild(p);
}

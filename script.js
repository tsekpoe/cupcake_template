function changeColor(elementID, elementVariable) {
  elementID = document.getElementById(elementID);

  elementID.addEventListener("input", () => {
    const elementValue = elementID.value;
    document.documentElement.style.setProperty(elementVariable, elementValue);
  });
}

changeColor("containerBG", "--container-bg-color");
changeColor("headingT", "--heading-color");
changeColor("contentT", "--content-color");
changeColor("buttonBG", "--button-bg-color");
changeColor("buttonBG_hover", "--button-bg-hover-color");
changeColor("buttonT", "--button-text-color");
changeColor("buttonT_hover", "--button-text-hover-color");

const cupcakeSelect = document.getElementById("cupcakeSelect");

cupcakeSelect.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  console.log(selectedValue);

  document.documentElement.style.setProperty("--cakeURL", selectedValue);
});

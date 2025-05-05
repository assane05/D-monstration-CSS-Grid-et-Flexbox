const gridContainer = document.getElementById("grid-container");
const gridColumns = document.getElementById("grid-columns");
const gridRows = document.getElementById("grid-rows");
const gridGap = document.getElementById("grid-gap");
const gridCode = document.getElementById("grid-code");
const addGridItem = document.getElementById("add-grid-item");
const removeGridItem = document.getElementById("remove-grid-item");

const flexContainer = document.getElementById("flex-container");
const flexDirection = document.getElementById("flex-direction");
const justifyContent = document.getElementById("justify-content");
const alignItems = document.getElementById("align-items");
const flexWrap = document.getElementById("flex-wrap");
const flexCode = document.getElementById("flex-code");
const addFlexItem = document.getElementById("add-flex-item");
const removeFlexItem = document.getElementById("remove-flex-item");

gridColumns.addEventListener("change", updateGrid);
gridRows.addEventListener("change", updateGrid);
gridGap.addEventListener("change", updateGrid);
addGridItem.addEventListener("click", () =>
  addItem(gridContainer, "grid-item")
);
removeGridItem.addEventListener("click", () => removeItem(gridContainer));

flexDirection.addEventListener("change", updateFlex);
justifyContent.addEventListener("change", updateFlex);
alignItems.addEventListener("change", updateFlex);
flexWrap.addEventListener("change", updateFlex);
addFlexItem.addEventListener("click", () =>
  addItem(flexContainer, "flex-item")
);
removeFlexItem.addEventListener("click", () => removeItem(flexContainer));

function updateGrid() {
  gridContainer.style.gridTemplateColumns = gridColumns.value;
  gridContainer.style.gridTemplateRows = gridRows.value;
  gridContainer.style.gridGap = gridGap.value;

  gridCode.textContent = `.grid-container {
display: grid;
grid-template-columns: ${gridColumns.value};
grid-template-rows: ${gridRows.value};
grid-gap: ${gridGap.value};
}`;
}

function updateFlex() {
  flexContainer.style.flexDirection = flexDirection.value;
  flexContainer.style.justifyContent = justifyContent.value;
  flexContainer.style.alignItems = alignItems.value;
  flexContainer.style.flexWrap = flexWrap.value;

  flexCode.textContent = `.flex-container {
display: flex;
flex-direction: ${flexDirection.value};
justify-content: ${justifyContent.value};
align-items: ${alignItems.value};
flex-wrap: ${flexWrap.value};
}`;
}

function addItem(container, className) {
  const items = container.querySelectorAll(".item");
  const newItem = document.createElement("div");
  newItem.className = `item ${className}`;
  newItem.textContent = items.length + 1;
  container.appendChild(newItem);
}

function removeItem(container) {
  const items = container.querySelectorAll(".item");
  if (items.length > 1) {
    container.removeChild(items[items.length - 1]);
  }
}

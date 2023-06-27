// Get the .game-container element
const gameContainer = document.querySelector(".game-container");

// Get all elements with an ID
const elementsWithId = document.querySelectorAll("[id]");
console.log(elementsWithId);
// Loop through each element with an ID
elementsWithId.forEach((element) => {
  // Add a mouseover event listener to each element
  element.addEventListener("mouseover", () => {
    // Get the ID of the hovered element
    const hoveredElementId = element.id;

    // Construct the URL of the background image based on the ID
    const backgroundImageUrl = `https://github.com/CrowdedAstronaut/MIC/blob/main/assets/${hoveredElementId}.svg`;
    console.log(backgroundImageUrl);
    // Set the background image of the .game-container
    gameContainer.style.backgroundImage = `url(${backgroundImageUrl})`;
  });
});

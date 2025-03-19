// Create a business name generator by combining list of adjectives and shop name and another word

// Adjectives
const adjectives = ["Crazy", "Amazing", "Fire"];

// Shop names
const shopNames = ["Engine", "Food", "Garments"];

// Additional words
const additionalWords = ["Bros", "Limited", "Hub"];

// Function to generate business names
function generateBusinessNames() {
    let businessNames = "";

    adjectives.forEach(adjective => {
        shopNames.forEach(shopName => {
            additionalWords.forEach(additional => {
                businessNames += `${adjective} ${shopName} ${additional}\n`;
            });
        });
    });

    return businessNames;
}

// Display the generated business names
console.log(generateBusinessNames());


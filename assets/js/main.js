
// KOMMER UD I EN ARRAY - GET PRODUCT DATA FRA ISSUES 

function getProductData() {
fetch('https://dummyjson.com/products') // Replace with your API URL
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // or .text() if the response is text
    })
    .then(data => {
        console.log(data); // Process and use the data here
    });

}

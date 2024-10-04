//your JS code here. If required.
function manipulateArray() {
    // Initial array [1, 2, 3, 4]
    const numbers = [1, 2, 3, 4];

    // First promise to resolve with the array after 3 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numbers);
        }, 3000);
    });
}

// Chain the promises
manipulateArray()
    .then((data) => {
        // First transformation: filter out odd numbers
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = data.filter((num) => num % 2 === 0);
                document.getElementById('output').textContent = `Even numbers: ${evenNumbers.join(', ')}`;
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        // Second transformation: multiply even numbers by 2
        return new Promise((resolve) => {
            setTimeout(() => {
                const multipliedNumbers = evenNumbers.map((num) => num * 2);
                document.getElementById('output').textContent = `Multiplied numbers: ${multipliedNumbers.join(', ')}`;
                resolve(multipliedNumbers);
            }, 2000);
        });
    })
    .catch((error) => {
        // Handle any potential errors
        console.error("Error:", error);
    });

// Call the function to initiate the promise chain
manipulateArray();

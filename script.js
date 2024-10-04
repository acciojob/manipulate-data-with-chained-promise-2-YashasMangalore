function manipulateArray() {
    // Initial array [1, 2, 3, 4]
    const numbers = [1, 2, 3, 4];

    // First promise to resolve with the array after 1 second
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numbers);
        }, 1000); // Reducing to 1 second for quicker resolution
    });
}

// Chain the promises
manipulateArray()
    .then((data) => {
        // First transformation: filter out odd numbers
        return new Promise((resolve) => {
            const evenNumbers = data.filter((num) => num % 2 === 0);
            document.getElementById('output').textContent = evenNumbers.join(',');
            resolve(evenNumbers);
        });
    })
    .then((evenNumbers) => {
        // Second transformation: multiply even numbers by 2
        return new Promise((resolve) => {
            const multipliedNumbers = evenNumbers.map((num) => num * 2);
            setTimeout(() => {
                document.getElementById('output').textContent = multipliedNumbers.join(',');
                resolve(multipliedNumbers);
            }, 2000); // Set this timeout to 2 seconds as required
        });
    })
    .catch((error) => {
        // Handle any potential errors
        console.error("Error:", error);
    });

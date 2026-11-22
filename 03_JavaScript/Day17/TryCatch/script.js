async function github() {
    try {
        const response = await fetch('https://api.github.com/users');

        if (!response.ok) {
            throw new Error("Failed to fetch GitHub users");
        }

        const data = await response.json();
        return data;

    } catch(error) {
        throw error;
    }
}

github()
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(`Error: ${error.message}`);
    });
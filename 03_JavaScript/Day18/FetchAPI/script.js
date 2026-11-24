const URL = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {
    try {
        let response = await fetch(URL);
        console.log("Response status:",response.ok);
        console.log("Response Code:",response.status);

        if(!response.ok){
            throw new Error("HTTP ERROR: ", response.status);
        }

        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUsers();
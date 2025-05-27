const string = "ola ola mundo mundo";

const unique = []; 

string.split(" ").forEach((word) => {
    if (!unique.includes(word)) {
        unique.push(word);
    }
})

console.log(unique.join(" "));
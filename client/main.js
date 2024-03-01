const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneBtn")
const randomNumberBtn = document.getElementById("randomNumberBtn");
const removeRandomNumberBtn = document.getElementById("removeRandomNumberBtn");
const randomNumberDisplay = document.getElementById("randomNumberDisplay");
const dogComplimentBtn = document.getElementById("dogComplimentButton");



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getRandomNumber = () => {
    axios.post("http://localhost:4000/api/random-number/")
        .then(res => {
            const data = res.data;
            randomNumberDisplay.textContent = "Lucky Number: " + data.number;
    });
};

const removeRandomNumber = () => {
    axios.delete("http://localhost:4000/api/random-number/")
        .then(() => {
            randomNumberDisplay.textContent = ''; 
            alert("Random number text removed");
        })
        .catch(error => {
            console.error("Error removing random number text:", error);
        });
};

const getDogCompliment = () => { // New function for dog compliment button
    axios.get("http://localhost:4000/api/dog-compliment/") // Endpoint for dog compliments
        .then(res => {
            const data = res.data;
            alert(data);
    });
};



complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
randomNumberBtn.addEventListener('click', getRandomNumber);
removeRandomNumberBtn.addEventListener('click', removeRandomNumber);
dogComplimentBtn.addEventListener('click', getDogCompliment);

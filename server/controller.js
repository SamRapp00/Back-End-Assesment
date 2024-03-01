

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortune = ["Today it's up to you to create the peacefulness you long for.", "A friend asks only for your time not your money.", "If you refuse to accept anything but the best, you very often get it.", "A fresh start will put you on your way.", "A lifetime of happiness lies ahead of you."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getRandomNumber: (req, res) => {
        const randomNumber = Math.floor(Math.random() * 100); 
        res.status(200).json({ number: randomNumber }); 
    },
    getComplimentForDog: (req, res) => {
        const compliments = ["Your Dog Is Very Handsome", "Your Dog Is a GOOD Boy!!!", "Your Dog Know How To Sit", "Your Dog Is Good At Fetch", "Your Dog Is Very Happy"];
        let randomIndex = Math.floor(Math.random() * compliments.length);

        res.status(200).send(compliments[randomIndex]); 
    }

}

const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const newQuotes = document.getElementById('newQuotes');
const tweet = document.getElementById('tweet');

let data = '';
let quotesData = '';

const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
    window.open(tweetPost);
}
const getNewQuotes = () => {
    let rand_num = Math.floor(Math.random() * 1600);
    quotesData = data[rand_num];
    quotes.innerText = `${quotesData.text}`;
    quotesData.author === null ?
        (author.innerText = "Unknown") :
        (author.innerText = `${quotesData.author}`);
};

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        const res = await fetch(api);
        data = await res.json();
        getNewQuotes();
    }
    catch (error) {
        console.log(`The error is ${error}`);
    }
};

tweet.addEventListener('click', tweetNow);
newQuotes.addEventListener('click', getNewQuotes);
getQuotes();




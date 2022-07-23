const quoteText =document.querySelector('.quote'),
quoteBtn = document.querySelector('button'),
authorName = document.querySelector('.author .name'),
soundBtn = document.querySelector('.sound'),
copyBtn = document.querySelector('.copy'),
twitterBtn = document.querySelector('.twitter');

//random quotes function
function randomQuote(){
    // console.log('clicked')
    quoteBtn.classList.add('loading');
    quoteBtn.innerText = 'loading quote ...';
    // fetching quotes api 
    fetch('https://api.quotable.io/random').then(res=> res.json()).then(result =>{
        // console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = 'New Quote';
        quoteBtn.classList.remove('loading');
    });

};

soundBtn.addEventListener('click', ()=>{
    //speech method to read the text
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
})

copyBtn.addEventListener('click', ()=>{
    //method to copy the text
    navigator.clipboard.writeText(quoteText.innerText);
})

twitterBtn.addEventListener('click', ()=>{
    //method to add the text to the personal twitter account as a tweet
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, '_blank');
})


quoteBtn.addEventListener('click', randomQuote);
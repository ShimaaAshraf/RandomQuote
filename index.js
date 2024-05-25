const quoteButton = document.getElementById('quoteButton');
// Function to fetch a random quote
async function getRandomQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return data.content;
		
    } catch (error) {
        console.error('Error fetching quote:', error);
        return null;
    }
}
(async function()
{
   console.log("45459+6");
   const quote = await getRandomQuote();
    if (quote) {
		var container =  `<p class="fs-1">"${quote}"</p>`;
		document.getElementById("demo").innerHTML = container; 
    } else {
        updateQuoteDisplay('Failed to fetch quote.');
    }
})();

quoteButton.addEventListener('click', async () => {
    const quote = await getRandomQuote();
    if (quote) {
		var container =  `<p class="fs-1">"${quote}"</p>`;
		document.getElementById("demo").innerHTML = container; 
    } else {
        updateQuoteDisplay('Failed to fetch quote.');
    }
});
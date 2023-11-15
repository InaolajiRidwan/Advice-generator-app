var cardNumber = document.getElementById('cardnumber');
var advice = document.getElementById('advice');
var dice = document.getElementById('dice');


function loadMore () {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        cardNumber.innerHTML = `Advice #${response.slip.id}`;
        advice.innerHTML = `&#8220${response.slip.advice}&#8221`;
      })
}
 dice.addEventListener("click", loadMore);
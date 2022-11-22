var Cards = []
var sumCards = 0
var hasBlackjack = false
var isAlive = false
var message = ""
var messageEl = document.getElementById("message-el")
var sumEl = document.getElementById("sum-el")
var cards = document.getElementById("cards")
var gracz =
{
    nazwa: "Buchaj",
    kasa: 140
}
var graczId = document.getElementById("gracz")
graczId.textContent = gracz.nazwa + ": $" + gracz.kasa
function getRandomCard()
{
    var randomValue = Math.floor(Math.random() * 13) + 1
    if(randomValue === 1)
    {
        return 11
    }
    else if(randomValue >= 11  && randomValue <= 13)
    {
        return 10
    }
    else
    {
        return randomValue
    }
}
function startGame()
{
    var firstCard = getRandomCard()
    var secondCard = getRandomCard()
    Cards = [firstCard, secondCard]
    sumCards = firstCard + secondCard
    isAlive = true
    hasBlackjack = false
    renderGame()
}
function renderGame()
{
    cards.textContent = "Cards: "
    for(var i =0; i < Cards.length; i++)
    {
        cards.textContent += Cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sumCards
    if(sumCards <= 20)
    {
        message = "Draw again?"
    }
    else if(sumCards === 21)
    {
        message = "You won!"
        hasBlackjack = true
    }
    else
    {
        message = "You lost!"
        isAlive = false
    }

    messageEl.textContent = message
}
function addCard()
    {
        if(isAlive === true && hasBlackjack === false)
        {
        var newCard = getRandomCard()
        sumCards += newCard
        Cards.push(newCard)
        renderGame()
        }
    }
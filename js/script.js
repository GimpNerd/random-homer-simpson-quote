var quotes = [
    'I’ve learned that life is one crushing defeat after another until you just wish Flanders was dead.',

    'A gun is not a weapon, it’s a tool, like a hammer or a screwdriver or an alligator.',

    'Weaseling out of things is important to learn; it’s what separates us from the animals… except the weasel.',

    'Operator! Give me the number for 911!',

    'If he’s so smart, how come he’s dead?',

    'Marge, you know it’s rude to talk when my mouth is full.',

    'My beer! You never had a chance to become my urine!',

    'Stupidity got us into this mess, and stupidity will get us out.',

    'Trying is the first step towards failure.',

    'Oh yeah, what are you gonna do? Release the dogs? Or the bees? Or the dogs with bees in their mouths and when they bark, they shoot bees at you?',


]

function newQuote() {
    let randomQuote = Math.floor(Math.random() * (quotes.length));
    document.getElementById('homer-quote').innerHTML = quotes[randomQuote];
}

document.getElementById("doh").addEventListener("click", newQuote);
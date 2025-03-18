// List of Spider-Man Quotes
const quotes = [
    "With great power comes great responsibility.",
    "I'm just your friendly neighborhood Spider-Man!",
    "This is my gift, my curse. Who am I? I'm Spider-Man.",
    "I’m not a hero because I want your approval. I do it because I want to!",
    "Sometimes, to do what's right, we have to be steady and give up the thing we want the most, even our dreams.",
    "The world may change and evolve, but the one thing that will never change is the love we have for each other.",
    "I’m your friendly neighborhood Spider-Man. You know what that means.",
    "Knock knock! Mr Criminal! You can call me web head, you can call me amazing, just don't call me late for dinner. You get it?",
    "Pizza time!",
    "You want forgiveness? Get religion.",
    "Whatever comes our way, whatever battle we have raging inside us, we always have a choice",
    "Stan Lee needed a hero. Needed someone to fight for him. Justice for Stan Lee.",
    "Cheese!",
    "Where do all these guys come from?",
    "It's complicated.",
    "Hope...",
    "Uncle Ben...",
    "Hey! Study hard and I will show you some cool Spidey tricks!",
    "Olya, I love you. I love you, I love you. I love you. I love you. I love you.I love you. I love you. I love you. I love you",
    "I'm just a guy who got bit by a radioactive spider, okay?",
    "I’m not some guy who can just quit.",
    "I could've been the guy who just walked away, but I chose to keep fighting.",
    "When you have the power to do something, you have the responsibility to act.",
    "I’m not a hero because I’m special. I’m a hero because I have to be.",
    "Sometimes I wish I could have a normal life.",
    "The more things change, the more they stay the same.",
    "No one can ever know what I really go through.",
    "I can't just stop being Spider-Man. People need me.",
    "The city doesn't need me to be perfect, it just needs me to be here.",
    "I failed. But I’ll never stop trying.",
    "Being Spider-Man means making sacrifices. A lot of them.",
    "I don’t want to be the hero, but I’ll be the hero if I have to.",
    "The hardest part of being Spider-Man isn’t the villains. It’s the people I care about.",
    "I may not be the strongest or the smartest, but I’m never gonna stop trying.",
    "I've lost so much... but I can't stop fighting.",
  ];
  
  // getting dom elements
  const quoteDisplay = document.getElementById('quote-display');
  const generateButton = document.getElementById('generate-quote');
  
  // function to generate a random quotes
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
  }
  
  // event listener for btn click on browser/html
  generateButton.addEventListener('click', generateQuote);
  
var stag = {};

stag.advice = [
  "don't forget to breathe",
  "be joyfully curious",
  "make it safe to fail, then play",
  "combine focused work time and regular small breaks",
  "marie-kondo your work",
  "make sure you have a decision-making protocol",
  "git gud at single responsibility principle",
  "make the hard change easy, then make the easy change",
  "finish work in progress before starting new work",
  "lots of tiny feedback is emotionally easier than one big feedback",
  "engage regularly in collaborative idea generation",
  "be intentional",
  "be excellent to each other",
  "attend to folks' needs",
  "find one thing that's a little bit harder to do than you would like, and make it easier to do",
  "be wrong at least once per day",
  "the strike of the pickaxe which humiliates the prisoner isn't the same strike of the pickaxe as the prospector's, which grows them",
  "Spend two weeks learning LISP. When you understand it, you'll be a better programmer forever",
  "“Do not seek to follow in the footsteps of the wise; seek what they sought.” - Basho",
  "develop a shared language with your team",
  "If it ain't broke, don't fix it. But define what it means for it to ain't be broke. And measure.",
  "What you can't measure, you can't manage. However, beware the trap of managing a measure.",
  "Slow is smooth and smooth is fast.",
  "You don't rise to the occasion, you fall to the level of your training",
  "If it hurts, do it more",
  "Keep a beginner's mind",
  "Can you get eighty percent of what you need with twenty percent of the work, and is that enough?",
  "'ask for forgiveness, not permission' is nice, but really you should be in an environment where you don't have to ask for forgiveness",
  "Tension is who you think you should be. Relaxation is who you are.",
  "You are responsible for nurturing an environment in which folks can be comfortable saying 'I don't know' and 'I was wrong'.",
  "Do not underestimate the power of rituals.",
  "You can’t be “on” all the time. If you feel like you’re not being as productive as you should be, then working more won’t fix it. Schedule breaks.",
  "If you are the only one who knows something, change that.",
  "you succeed as a group and you fail as a group",
  "Find something to like in something you dislike.",
  "Never attribute to malice that which you can attribute to ignorance.",
  "They’re not called basics because they’re simple, they’re called basics because they are the base upon which you build. Master the basics.",
  "Find ways to experiment and learn in tight feedback loops. The more you know, the better decisions you can make.",
  "Never trust a person that can’t say “I don’t know”",
  "Too much freedom can be a bad thing. Tell a kid to go play outside and they may sit there blankly, but give them a stick and say “this is a sword” and they’ll create a world around it. Structure and boundaries, well executed, give you freedom to create and deliver.",
  "Small minds discuss people. Average minds discuss events. Great minds discuss ideas.",
  "It is the mark of an educated mind to be able to entertain a thought without accepting it. - Aristotle",
  "Once you believe you have reached mastery, you have stepped off the path you should be on.",
  "There is nothing worse than doing the wrong thing efficiently.",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle",
  "We make progress towards our goals when they both have intention and attention.",
  "By the inch it’s a cinch. By the mile takes a while.",
];

stag.dayTimestamp = Math.floor(new Date() / 86400000);

stag.index = stag.dayTimestamp % stag.advice.length;

function loadAdvice() {
  document.getElementById("advice").innerHTML = stag.advice[stag.index];
}

window.onload = loadAdvice;

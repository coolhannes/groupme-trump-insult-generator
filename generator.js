var quotes = require('./trump.json');

var templates = [
        ["subjectnametwice1", "user_name",  "subjectnametwice2", "user_name",  "predicate", "insult3", "kicker",],
        ["user_name", "subjectnamefirst", "predicate", "insult3", "kicker",],
        ["user_name", "subjectnamefirst", "predicate", "insult3", "kicker",],
        ["user_name", "subjectnamefirst", "predicate", "insult3", "kicker",],
        ["user_name", "subjectnamefirst", "predicate", "insult3", "kicker",],
        ["user_name", "subjectnamefirst", "predicate", "insult3", "kicker",],
        ["subjectnamesecond", "user_name",  "predicate", "insult3", "kicker",],
        ["subjectnamesecond", "user_name",  "predicate", "insult3", "kicker",],
        ["subjectnamesecond", "user_name",  "predicate", "insult3", "kicker",],
        ["subjectnamesecond", "user_name",  "predicate", "insult3", "kicker",],
        ["subjectnamesecond", "user_name",  "predicate", "insult3", "kicker",],
        ["subjectnamesecond", "user_name",  "predicate", "insult3", "kicker",],
        ["subjectnamesecond", "user_name",  "predicate", "insult3", "kicker",],
        ["subjectnamesecond", "user_name",  "predicate", "insult3", "kicker",],
        ["subjectnamesecond", "user_name",  "predicate", "insult3", "kicker",],
        ["subjectnamesecond", "user_name",  "predicate", "insult3", "kicker",],
        ];

var niceQuotes = [
  "What a beautiful person!",
  "That one should be our president!",
  "I know the best people. And that's one of them.",
  "Fantastic, yuge potential!"
];

var generateInsult = function(name) {
  if ((name.toLowerCase().indexOf('donald') > -1) ||
      (name.toLowerCase().indexOf('trump') > -1) ||
      (name.toLowerCase().indexOf('ivanka')) ) {
    return niceQuotes[getRandomInt(niceQuotes.length)];
  }

  var template = templates[getRandomInt(templates.length)];

  var newQuote = "";

  var word;
  for (index in template) {
    word = template[index];

    if (word == "user_name") {
      newQuote += name
      newQuote += ' '
    }
    else {
      newQuote += quotes[word][getRandomInt(quotes[word].length)];
    }
  }

  return newQuote;
}

function getRandomInt(n) {
  return ((Math.floor(Math.random() * 1000000) + 1) % n)
}

exports.generateInsult = generateInsult;
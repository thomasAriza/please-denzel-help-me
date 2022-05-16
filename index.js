// Q1. Create a variable called `denzel` - that can't be redeclared - and assign it the string 'please denzel, help me'
const denzel = 'please denzel, help me'
console.log(denzel)
// Q2. Use the variable `actor` to create a new variable called `inspirational` that is assigned the string "Is Denzel Washington an inspirational actor?"
const actor = 'Denzel Washington';
const inspirational = "Is "+actor+" an inspirational actor ?"
console.log(inspirational)

// Q3  Create an object called `family` and give it the following properties:
// family has been `married` on "1983" (Number)
// family is not `presidentOfTheUnitedStates` (boolean)
// family has `children` called "John David", "Katia", "Olivia" and "Malcolm" (array of strings)
const family= {
  "married":1983,
  "presidentOfTheUnitedStates":false,
  "children":["John David", "Katia", "Olivia" , "Malcolm"]
}
console.log(family)

// Q4. Change
// * the `name` stage to "A Raisin in the Sun"
// * the `year` stage to "2014"
// by using the dot notation
const stage = {
  'name': 'Fences',
  'year': '2010'
};
stage.name="A Raisin i// Q1. Create a variable called `denzel` - that can't be redeclared - and assign it the string 'please denzel, help me'
const denzel = 'please denzel, help me'
console.log(denzel)
// Q2. Use the variable `actor` to create a new variable called `inspirational` that is assigned the string "Is Denzel Washington an inspirational actor?"
const actor = 'Denzel Washington';
const inspirational = "Is "+actor+" an inspirational actor ?"
console.log(inspirational)

// Q3  Create an object called `family` and give it the following properties:
// family has been `married` on "1983" (Number)
// family is not `presidentOfTheUnitedStates` (boolean)
// family has `children` called "John David", "Katia", "Olivia" and "Malcolm" (array of strings)
const family= {
  "married":1983,
  "presidentOfTheUnitedStates":false,
  "children":["John David", "Katia", "Olivia" , "Malcolm"]
}
console.log(family)

// Q4. Change
// * the `name` stage to "A Raisin in the Sun"
// * the `year` stage to "2014"
// by using the dot notation
const stage = {
  'name': 'Fences',
  'year': '2010'
};
stage.name="A Raisin in the Sun"
stage.year="2014"
console.log(stage)
// Q5. Change the `movie` "glory" to "Training Day" using square bracket notation
const awards = {
  'movie': 'glory'
};
awards["movie"]="Training Day"
console.log(awards)
// Q6. Create an object called "earlywork"
// The key should be the movie name and the value the release year
// Movies are
// * Carbon Copy (1981)
// * A Soldier Story (1984)
// * Power (1986)
// * Cry Freedom (1987)
// * For Queen and Countryy (1988)
const earlywork ={
  "Carbon Copy":1981,
  "A Soldier Story": 1984,
  "Power": 1986,
  "Cry Freedom":1987,
  "For Queen and Countryy":1988
}
console.log(earlywork)

// Q7. Return a new array from `debaters` with all item in uppercase
const debaters = ['we do', 'what we have to do', 'in order to do', 'what we want to do'];
const new_debaters = debaters.map(debater=>debater.toUpperCase())
console.log(new_debaters)

// Q8. Using this array.
// Do the following 5 steps
const directors = ['spikelee', 'ridleyscott', 'zemeckis'];

// 1. add "tonyscott" value to the end of `directors` array
directors.push("tonyscott")
console.log(directors)
// 2. remove "spikelee" value and store it in a variable called firstDirector
const firstDirector=directors.shift("spikelee")
console.log(directors)
console.log(firstDirector)
// 3. add "himself" value to the start of `directors` array
directors.unshift("himself")
console.log(directors)
// 4. remove "ridleyscott" value from the array and store it in a variable called secondDirector
delete directors[directors.indexOf("ridleyscott")]
console.log(directors)



// 5. let 'zemeckis' in the array but put a copy of it on a variable called thirdDirector
var thirdDirectors = delete directors[directors.indexOf("zemeckis")]
console.log(thirdDirectors)


// Q9. Write the function `duplicate` that return the expected result
const duplicate = (array) => {
  duplicat = array
  
  return array.concat(duplicat)
}

console.log(duplicate(['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']));
// ❯ ['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child', 'Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']


// Q10. Refactor the current ES5-style function `police` in ES6-style.
const police = function (names) {
  const results = [];

  for (let i = 0; i < names.length; i++) {
    results.push(names[i] + 'I am the police');
  }
  return results;
};

const quotes = ['You will never see the light of... ', 'I run shit around here ', 'King Kong aint got shit on me '];

console.log(police(chorus));
 // ❯ ['You will never see the light of... I am the police', 'I run shit around here I am the police', 'King Kong aint got shit on me I am the police'];


// Q11. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// What's the query selector to get all Cast Credits titles (Live with Kelly & Ryan, The Late Show with Stephen Colbert...).
document.querySelectorAll(".right.small-12.columns>strong>a")

// Q12. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// How many http requests are performed to render the page?
1
// Q13. Related to the following api call with "curl"
// ❯ curl "http://api.tvmaze.com/people/6616"
// Could you describe and explain the response?

// Q14. Refactor the following codebase with a promise notation
fs.readFile(filePath, function(err, data) {
  if (err) {
    // handle the error, the return is important here
    // so execution stops here
    return console.log(err)
  }
  // use the data object
  console.log(data)
})

// Q15. Refactor the following codebase with async/await notation
fetch('http://api.tvmaze.com/search/people?q=denzel+washington')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const {person} = data[0];
    const {id} = person;

    return fetch(`http://api.tvmaze.com/people/${id}/castcredits?embed=show`);
  })
  .then(response => {
    return response.json();
  })
  .then(console.log);

// Q16. Give me at least 3 memorable websites that engage to continue (because of nice UX/UI AND avoid to give me facebook, airbnb etc...)
https://www.tesla.com/fr_fr
https://www.devinci.fr
https://www.airbus.com/en/products-services/defence

// Q17. Describe an ESILV project that you worked on that you’re proud of?
This year for my PI2 project, I used to work on an AI project. We needed to scrapp data, use the cloud, use NLP models and make estimations. I'm proud of it because it was the fist time that I was on an AI project from scratch.

// Q18. Describe an ESILV project that you worked on that you’re not so proud of?
In a C# project we needed to program our first application. Our back--nd was with excel and our front-end was not really pretty. So I'm not so proud of it but I'm now happy  to ssee the    pprog   ogre . 
 Q//Q19 What are some things you like about the developer tools you use?
What I like is to understand how the website works, because then it could be helpfull if I'm in need to scrapp data. For exemple the query selector.

// Q20. Last question: could you explain me - in your terms - why the title of the course is "Web Application Architecture(s)" and not "Web Application Architecture"?
Because we have see  tsen the Sun"
stage.year="2014"
console.log(stage)
// Q5. Change the `movie` "glory" to "Training Day" using square bracket notation
const awards = {
  'movie': 'glory'
};
awards["movie"]="Training Day"
console.log(awards)
// Q6. Create an object called "earlywork"
// The key should be the movie name and the value the release year
// Movies are
// * Carbon Copy (1981)
// * A Soldier Story (1984)
// * Power (1986)
// * Cry Freedom (1987)
// * For Queen and Countryy (1988)
const earlywork ={
  "Carbon Copy":1981,
  "A Soldier Story": 1984,
  "Power": 1986,
  "Cry Freedom":1987,
  "For Queen and Countryy":1988
}
console.log(earlywork)

// Q7. Return a new array from `debaters` with all item in uppercase
const debaters = ['we do', 'what we have to do', 'in order to do', 'what we want to do'];
const new_debaters = debaters.map(debater=>debater.toUpperCase())
console.log(new_debaters)

// Q8. Using this array.
// Do the following 5 steps
const directors = ['spikelee', 'ridleyscott', 'zemeckis'];

// 1. add "tonyscott" value to the end of `directors` array
directors.push("tonyscott")
console.log(directors)
// 2. remove "spikelee" value and store it in a variable called firstDirector
const firstDirector=directors.shift("spikelee")
console.log(directors)
console.log(firstDirector)
// 3. add "himself" value to the start of `directors` array
directors.unshift("himself")
console.log(directors)
// 4. remove "ridleyscott" value from the array and store it in a variable called secondDirector
delete directors[directors.indexOf("ridleyscott")]
console.log(directors)



// 5. let 'zemeckis' in the array but put a copy of it on a variable called thirdDirector
var thirdDirectors = delete directors[directors.indexOf("zemeckis")]
console.log(thirdDirectors)


// Q9. Write the function `duplicate` that return the expected result
const duplicate = (array) => {
  duplicat = array
  
  return array.concat(duplicat)
}

console.log(duplicate(['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']));
// ❯ ['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child', 'Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']


// Q10. Refactor the current ES5-style function `police` in ES6-style.
const police = function (names) {
  const results = [];

  for (let i = 0; i < names.length ? i++) {
    results.push(names[i] + 'I am the police');
  }
  return results;
};

const quotes = ['You will never see the light of... ', 'I run shit around here ', 'King Kong aint got shit on me '];

console.log(police(chorus));
 // ❯ ['You will never see the light of... I am the police', 'I run shit around here I am the police', 'King Kong aint got shit on me I am the police'];


// Q11. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// What's the query selector to get all Cast Credits titles (Live with Kelly & Ryan, The Late Show with Stephen Colbert...).
document.querySelectorAll(".right.small-12.columns>strong>a")

// Q12. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// How many http requests are performed to render the page?
1
// Q13. Related to the following api call with "curl"
// ❯ curl "http://api.tvmaze.com/people/6616"
// Could you describe and explain the response?

// Q14. Refactor the following codebase with a promise notation
fs.readFile(filePath, function(err, data) {
  if (err) {
    // handle the error, the return is important here
    // so execution stops here
    return console.log(err)
  }
  // use the data object
  console.log(data)
})

// Q15. Refactor the following codebase with async/await notation
fetch('http://api.tvmaze.com/search/people?q=denzel+washington')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const {person} = data[0];
    const {id} = person;

    return fetch(`http://api.tvmaze.com/people/${id}/castcredits?embed=show`);
  })
  .then(response => {
    return response.json();
  })
  .then(console.log);

// Q16. Give me at least 3 memorable websites that engage to continue (because of nice UX/UI AND avoid to give me facebook, airbnb etc...)
https://www.tesla.com/fr_fr
https://www.devinci.fr
https://www.airbus.com/en/products-services/defence

// Q17. Describe an ESILV project that you worked on that you’re proud of?
This year for my PI2 project, I used to work on an AI project. We needed to scrapp data, use the cloud, use NLP models and make estimations. I'm proud of it because it was the fist time that I was on an AI project from scratch.

// Q18. Describe an ESILV project that you worked on that you’re not so proud of?
In a C# project we needed to program our first application. Our back--nd was with excel and our front-end was not really pretty. So I'm not so proud of it but I'm now happy  to ssee the    pprog   ogre . 


//Q19 What are some things you like about the developer tools you use?
What I like is to understand how the website works, because then it could be helpfull if I'm in need to scrapp data. For exemple the query selector.

// Q20. Last question: could you explain me - in your terms - why the title of the course is "Web Application Architecture(s)" and not "Web Application Architecture"?
In m'y opinion it id because a unique website can present its datas with diferent maners, for exemple by calling an api, a json file, by giving them all the same classnam.

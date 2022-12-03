//EJERCICIO 1 PROGRAMACION FUNCIONAL-------------------------------------

//En el editor de código, las funciones prepareTeay getTeaya están definidas para usted. 
//Llame a la getTeafunción para obtener 40 tazas de té para el equipo y guárdelas en la tea4TeamFCCvariable.

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);

// Only change code above this line


//EJERCICIO 2 PROGRAMACION FUNCIONAL-------------------------------------


//Prepare 27 tazas de té verde y 13 tazas de té negro 
//y guárdelas en tea4GreenTeamFCCy tea4BlackTeamFCCvariables

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea1 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea1(prepareGreenTea,27);
const tea4BlackTeamFCC =getTea1(prepareBlackTea,13) ;
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

//EJERCICIO 3 PROGRAMACION FUNCIONAL-------------------------------------

//La lista final de pestañas abiertas, almacenadas en finalTabs.tabs, debería estar 
//['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 
//'Netflix', 'YouTube', 'Vine', 
//'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']

// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function(index) {
  
    // Only change code below this line

  const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  console.log("tabs antes del "+index+": "+tabsBeforeIndex);
  console.log("como quedo el array tabs "+this.tabs);
  const tabsAfterIndex = this.tabs.splice(index+1,this.tabs.length); // Get the tabs after the tab
  console.log("tabs despues del "+index+": "+tabsAfterIndex);
  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line
  
    return this;
   };
  
  // Let's create three browser windows
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

  


  // Now perform the tab opening, closing, and other operations
 const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);

  

  /*finalTabs.tabs should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 
  'Netflix', 'YouTube', 'Vine', 
  'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']*/


//EJERCICIO 4 PROGRAMACION FUNCIONAL-------------------------------------

//Complete el código de la función incrementerpara que devuelva el valor de la variable global fixedValueaumentado en uno.

// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  let fixedValue1=fixedValue+1;
  return fixedValue1 ;
  // Only change code above this line
}

console.log(incrementer());


//EJERCICIO 5 PROGRAMACION FUNCIONAL-------------------------------------
//Actualicemos la incrementerfunción para declarar claramente sus dependencias.
//Escriba la incrementer función para que tome un argumento y luego devuelva un resultado después de aumentar el valor en uno.

// The global variable
let fixedValue1 = 4;

// Only change code below this line
function incrementer1(value) {

    return value+1;
  // Only change code above this line
}

console.log(incrementer1(fixedValue1));


//EJERCICIO 6 PROGRAMACION FUNCIONAL-------------------------------------
//Vuelva a escribir el código para que la matriz global bookListno cambie dentro de ninguna función. 
//La addfunción debe agregar lo dado bookNameal final de la matriz que se le pasó y devolver una nueva matriz (lista).
// La removefunción debe eliminar lo dado bookNamede la matriz que se le pasó.
//Nota: Ambas funciones deben devolver una matriz y cualquier parámetro nuevo debe agregarse antes del bookNameparámetro.

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {

    let newBookList=[].concat(bookList);
    newBookList.push(bookName);
    return newBookList;
  
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  const book_index = bookList.indexOf(bookName);
  let newBookList= [].concat(bookList);
  console.log(book_index);
  if (book_index >= 0) {

    newBookList.splice(book_index,1);
   
    return newBookList;

    // Change code above this line
    
}
}
//add(bookList, "A Brief History of Time")
//["The Hound of the Baskervilles", 
//"On The Electrodynamics of Moving Bodies", 
//"Philosophiæ Naturalis Principia Mathematica", 
//"Disquisitiones Arithmeticae", 
//"A Brief History of Time"]debería volver

/*["The Hound of the Baskervilles", 
"On The Electrodynamics of Moving Bodies", 
"Philosophiæ Naturalis Principia Mathematica", 
"Disquisitiones Arithmeticae"];
*/

console.log("la lista con Brief: "+add(bookList, "A Brief History of Time"));
console.log("La lista sin brief se modifico?"+bookList);
//remove(bookList, "On The Electrodynamics of Moving Bodies")
/*["The Hound of the Baskervilles", 
"Philosophiæ Naturalis Principia Mathematica", 
"Disquisitiones Arithmeticae"]*/

console.log("La lista sin On The Electrodynamic: "+remove(bookList, "On The Electrodynamics of Moving Bodies"));

//EJERCICIO 7 PROGRAMACION FUNCIONAL-------------------------------------
//La watchListmatriz contiene objetos con información sobre varias películas.
//Use map en watchListpara asignar una nueva matriz de objetos a la ratingsvariable. 
//Cada película en la nueva matriz debe tener solo una title clave con el nombre de la película 
//y una rating clave con la calificación de IMDB. 
//El código en el editor actualmente usa un forbucle para hacer esto, por lo que debe reemplazar la función de bucle con su map expresión.

// The global variable
const watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
  
  // Only change code below this line
  
  const ratings = [];
  /*for (let i = 0; i < watchList.length; i++) {
    ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
  }*/
  
 watchList.map(movie => ratings.push({title: movie.Title, rating: movie.imdbRating}) )
  // Only change code above this line
  
  console.log(JSON.stringify(ratings));

  //EJERCICIO 8 PROGRAMACION FUNCIONAL-------------------------------------
  //Escribe el tuyo propio Array.prototype.myMap(), 
  //que debería comportarse exactamente como Array.prototype.map(). 
  //No debe utilizar el mapmétodo integrado. 
  //Se Array puede acceder a la instancia en el myMap método usando this.

  Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
    
    for(let i=0; i<this.length; i++){
        
      newArray.push(callback(this[i]));
    }
    
    // Only change code above this line
    return newArray;
  };

  console.log("ejercicio 8: "+[23, 65, 98, 5, 13].myMap(item => item * 2));


  
  //EJERCICIO 9 PROGRAMACION FUNCIONAL-------------------------------------

  // The global variable
const watchList1 = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
  
  // Only change code below this line
  const listRatingMay8=watchList1.filter(movie=>movie.imdbRating >= 8)
  const filteredList = [];
  listRatingMay8.map(movie => filteredList.push({title:movie.Title, rating:movie.imdbRating}))
  
  // Only change code above this line
  
  console.log(filteredList);


  //EJERCICIO 10 PROGRAMACION FUNCIONAL-------------------------------------

  Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
    for(let i=0; i<this.length;i++){
  
      if(callback(this[i])){
  
        newArray.push(this[i]);
  
      }
  
    }
    // Only change code above this line
    return newArray;
  };

  //EJERCICIO 11 PROGRAMACION FUNCIONAL-------------------------------------

  function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
  
    let resultado=[];
    resultado=anim.slice(beginSlice, endSlice);
    return resultado
  
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);

  //EJERCICIO 12 PROGRAMACION FUNCIONAL-------------------------------------

  function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0,3);
  
    // Only change code above this line
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);

  //EJERCICIO 13 PROGRAMACION FUNCIONAL-------------------------------------

  function nonMutatingConcat(original, attach) {
    // Only change code below this line
  
    let resultado= original.concat(attach);
    return resultado;
  
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingConcat(first, second);


  //EJERCICIO 14 PROGRAMACION FUNCIONAL-------------------------------------

  function nonMutatingPush(original, newItem) {
    // Only change code below this line
    let resultado=original.concat(newItem);
    
    return resultado;
  
    // Only change code above this line
  }
  
  const first1 = [1, 2, 3];
  const second1 = [4, 5];
  nonMutatingPush(first1, second1);

  //EJERCICIO 15 PROGRAMACION FUNCIONAL-------------------------------------

  // The global variable
const watchList2 = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
  
  function getRating(watchList) {
    // Only change code below this line
    let averageRating ;
    let moviesChris = watchList.filter( element => element.Director === "Christopher Nolan");
    console.log("filter: "+moviesChris[0].imdbRating);
    averageRating = moviesChris.reduce((prom, movie)=> prom + Number(movie.imdbRating), 0);
    console.log("reduce: "+averageRating);
    averageRating = averageRating/moviesChris.length;
    console.log("final: "+averageRating);
  
  
    // Only change code above this line
    return averageRating;
  }
  
  console.log(getRating(watchList2));


  //EJERCICIO 16 PROGRAMACION FUNCIONAL-------------------------------------

  const squareList = arr => {
    // Only change code below this line
  
    let filterArr = arr.filter(element => 
    element>=0 && Number.isInteger(element))
  
    return filterArr.map(element => element * element);
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);


  //EJERCICIO 17 PROGRAMACION FUNCIONAL-------------------------------------

  function alphabeticalOrder(arr) {
    // Only change code below this line
  
    return arr.sort()
    // Only change code above this line
  }
  
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


  //EJERCICIO 18 PROGRAMACION FUNCIONAL-------------------------------------


  const globalArray = [5, 6, 3, 2, 9];


  function nonMutatingSort(arr) {
    // Only change code below this line
    let resultado= [].concat(arr);
    return resultado.sort(function(a,b){return a-b});
    // Only change code above this line
  }
  
  nonMutatingSort(globalArray);
  nonMutatingSort([1, 30, 4, 21, 100000]);
  nonMutatingSort([140000, 104, 99]);

console.log(nonMutatingSort(globalArray));
console.log(nonMutatingSort([1, 30, 4, 21, 100000]));
console.log(nonMutatingSort([140000, 104, 99]));


//EJERCICIO 19 PROGRAMACION FUNCIONAL-------------------------------------

function splitify(str) {
    // Only change code below this line
  
    let resultado=str.split((/\W/));
    
    return resultado
    
  
    // Only change code above this line
  }
  
  console.log(splitify("Hello World,I-am code"));


  //EJERCICIO 20 PROGRAMACION FUNCIONAL-------------------------------------

  function sentensify(str) {
    // Only change code below this line
  
    let arr=str.split(/\W/);
    console.log("split: "+arr);
    let resultado=arr.join(" ");
    console.log("join: "+resultado);

    return resultado
  
    // Only change code above this line
  }
  
  console.log(sentensify("May-the-force-be-with-you"));



//EJERCICIO 21 PROGRAMACION FUNCIONAL--------------------------------------------

// Only change code below this line
function urlSlug(title) {

    let resultado= title.toLowerCase().split(' ');
    console.log(resultado);
    resultado=resultado.filter(element => element != '');
    console.log(resultado);

    return resultado.join("-");

}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
console.log(urlSlug(" Winter Is  Coming"));
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));


//EJERCICIO 22 PROGRAMACION FUNCIONAL--------------------------------------------

function checkPositive(arr) {
    // Only change code below this line
  
    return arr.every(function(currentValue){
  
      return currentValue>=0;
  
    })
  
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);



  //EJERCICIO 23 PROGRAMACION FUNCIONAL--------------------------------------------


  function checkPositive1(arr) {
    // Only change code below this line
  
      return arr.some(function(currentValue){
  
        return currentValue>=0;
  
      })
    // Only change code above this line
  }
  
  checkPositive1([1, 2, 3, -4, 5]);



  //EJERCICIO 24 PROGRAMACION FUNCIONAL--------------------------------------------

  function add(x) {
    // Only change code below this line
  
    return function(y){
  
      return function(z){
  
        return x+y+z;
  
      }
  
    }
    // Only change code above this line
  }
  
  add(10)(20)(30);



//EJERCICIO 1 Basic Data Structures -------------------------------------

  let yourArray=[0,0,"string",1,true]; // Change this line


//EJERCICIO 2 Basic Data Structures -------------------------------------

  let myArray = ["a", "b", "c", "d"];
// Only change code below this line
    myArray[1]="not b"
// Only change code above this line
    console.log(myArray);


//EJERCICIO 3 Basic Data Structures -------------------------------------

function mixedNumbers(arr) {
    // Only change code below this line
    let before=["I", 2, "three"];
    let after= [7, "VIII", 9];
    arr.unshift(before);
    arr.push(after);
    // Only change code above this line
    return arr.flat();
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));


//EJERCICIO 4 Basic Data Structures -------------------------------------

function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));


//EJERCICIO 5 Basic Data Structures -------------------------------------

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
let sum=0;

for(let i=0; i < arr.length; i++){

  sum+=arr[i];
  console.log(sum);
  if(sum>10){

    sum= sum - arr[i];
    console.log(sum);
    arr.splice(i,1);
    i=i-1;
    console.log(sum);

  }

}
// Only change code above this line
console.log(arr);




//EJERCICIO 6 Basic Data Structures -------------------------------------

function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0,2);
    arr.splice(0,0,"DarkSalmon","BlanchedAlmond")
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));



//EJERCICIO 7 Basic Data Structures -------------------------------------

function forecast(arr) {
    // Only change code below this line
  
    return arr.slice(2,4);
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


//EJERCICIO 8 Basic Data Structures -------------------------------------

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr])
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));



//EJERCICIO 9 Basic Data Structures -------------------------------------

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence=["learning", ...fragment,"is","fun"]; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());



//EJERCICIO 10 Basic Data Structures -------------------------------------

function quickCheck(arr, elem) {
    // Only change code below this line
    
    if(arr.indexOf(elem)>=0){
  
      return true;
  
    }
  
    return false;
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));



//EJERCICIO 11 Basic Data Structures -------------------------------------

function filteredArray(arr, elem) {
    let newArr = [].concat(arr);
    let comprobarElem=false;
    // Only change code below this line
      for(let i=0; i<newArr.length;i++){

        console.log(newArr[i]); 

        comprobarElem = newArr[i].some(function(currentValue){
  
            return currentValue==elem;
      
          })

        console.log(comprobarElem);  

        if(comprobarElem){

            newArr.splice(i,1);
            i=i-1;

        }


      }
     
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));




//EJERCICIO 12 Basic Data Structures -------------------------------------

let myNestedArray = [
    // change code below this line
    ["unshift", false, 1, 2, 3, "complex", "nested"],
    ["loop", "shift", 6, 7, 1000, "method"],
    ["concat", false, true, "spread", "array", ["deep"]],
    ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
    ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
    // change code above this line
  ];





//EJERCICIO 13 Basic Data Structures -------------------------------------

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Only change code below this line
  foods.bananas=13;
  foods.grapes=35;
  foods.strawberries=27;
  // Only change code above this line
  
  console.log(foods);






//EJERCICIO 14 Basic Data Structures -------------------------------------

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // Only change code below this line
  userActivity.data.online=45;
  // Only change code above this line
  
  console.log(userActivity)




//EJERCICIO 15 Basic Data Structures -------------------------------------

let foods1 = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
    return foods1[scannedItem];
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));




//EJERCICIO 16 Basic Data Structures -------------------------------------

let foods2 = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  delete foods2.oranges;
  delete foods2.plums;
  delete foods2.strawberries;
  // Only change code above this line
  
  console.log(foods2);




//EJERCICIO 17 Basic Data Structures -------------------------------------

let users1 = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    if("Alan" in userObj
    && "Jeff" in userObj
    &&"Sarah" in userObj
    && "Ryan" in userObj)
    {
      return true;
    }
    return false;
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users1));




//EJERCICIO 18 Basic Data Structures -------------------------------------

const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  
  function countOnline(usersObj) {
    // Only change code below this line
    let onlines=0;
    for(let user in usersObj){
        
    console.log(usersObj[user].online);    
    
    usersObj[user].online ? onlines++ : onlines;
  
    }
    return onlines;
    // Only change code above this line
  }
  
  console.log(countOnline(users));




//EJERCICIO 19 Basic Data Structures -------------------------------------

let users3 = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  
  
  function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(obj);
    // Only change code above this line
  }
  
  console.log(getArrayOfUsers(users3));


//EJERCICIO 20 Basic Data Structures -------------------------------------


let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line
     userObj["data"]["friends"].push(friend);
      return userObj["data"]["friends"];
    // Only change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));



//EJERCICIO 1 ES6 '----------------------------------------------------------

function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }




//EJERCICIO 2 ES6 '----------------------------------------------------------

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s.sort();
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();




//EJERCICIO 3 ES6 '----------------------------------------------------------

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
  
    Object.freeze(MATH_CONSTANTS);
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();





//EJERCICIO 4 ES6 '----------------------------------------------------------


const magic = ()=>{return new Date()};




//EJERCICIO 5 ES6 '----------------------------------------------------------

const myConcat = (arr1, arr2)=>{return arr1.concat(arr2);}

console.log(myConcat([1, 2], [3, 4, 5]));




//EJERCICIO 6 ES6 '----------------------------------------------------------

// Only change code below this line
const increment = (number, value=1) => number + value;
// Only change code above this line

console.log(increment(5,2));




//EJERCICIO 7 ES6 '----------------------------------------------------------

const sum1 = (...args) => {

    return args.reduce((a, b) => a + b, 0);
  }





//EJERCICIO 8 ES6 '----------------------------------------------------------

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);




//EJERCICIO 9 ES6 '----------------------------------------------------------

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  
  
  const {today, tomorrow}=HIGH_TEMPERATURES;
  
  // Only change code above this line




//EJERCICIO 10 ES6 '----------------------------------------------------------

const HIGH_TEMPERATURES1 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const {today:highToday, tomorrow:highTomorrow} = HIGH_TEMPERATURES1
  
  // Only change code above this line





//EJERCICIO 11 ES6 '----------------------------------------------------------

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
  
  const {today:{low:lowToday, high:highToday1}}=LOCAL_FORECAST;
  
  // Only change code above this line






//EJERCICIO 12 ES6 '----------------------------------------------------------

let a = 8, b = 6;
// Only change code below this line
[a,b]=[b,a];






//EJERCICIO 13 ES6 '----------------------------------------------------------

function removeFirstTwo(list) {
    // Only change code below this line
    const [a,b,...shorterlist] = list ; // Change this line
    // Only change code above this line
    return shorterlist;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);
  console.log(sourceWithoutFirstTwo);





//EJERCICIO 14 ES6 '----------------------------------------------------------

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  //const half = (stats) => (stats.max + stats.min) / 2.0; 
  const half = ({max,min}) => (max + min) / 2.0; 
  // Only change code above this line




//EJERCICIO 15 ES6 '----------------------------------------------------------

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    let result=[];
    const failureItems = [].concat(arr);
    for(let item of failureItems){
  
      result.push(`<li class="text-warning">${item}</li>`);
  
    }
    // Only change code above this line
  
    return result;
  }
  
  const failuresList = makeList(result.failure);




//EJERCICIO 16 ES6 '----------------------------------------------------------

const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name,
      age,
      gender
    };
    // Only change code above this line
  };




//EJERCICIO 17 ES6 '----------------------------------------------------------

// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);




//EJERCICIO 18 ES6 '----------------------------------------------------------

// Only change code below this line
class Vegetable{
    constructor(vegetable){
      this.name=vegetable;
    }
  }
  // Only change code above this line
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'




//EJERCICIO 19 ES6 '----------------------------------------------------------

// Only change code below this line
class Thermostat{
    constructor(temp){
  
      this.temp=temp;
  
    }
    //getter
    get temperature(){
  
      return 5/9 * (this.temp - 32);
  
    }
    //setter
    set temperature(celsius){
  
      this.temp= celsius * 9.0 / 5 + 32;
  
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius




//EJERCICIO 20 ES6 '----------------------------------------------------------

/*<html>
  <body>
    <!-- Only change code below this line -->
      <script type="module" src="index.js"></script>
    <!-- Only change code above this line -->
  </body>
</html>
*/ 

//este ejercicio hay que pegarlo en un archivo html para que funcione




//EJERCICIO 21 ES6 '----------------------------------------------------------
/*
export const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  export const lowercaseString = (string) => {
    return string.toLowerCase()
  }
*/




//EJERCICIO 22 ES6 '----------------------------------------------------------

  
// Only change code above this line
/*import {uppercaseString,lowercaseString} from './string_functions.js';
uppercaseString("hello");
lowercaseString("WORLD!");
*/




//EJERCICIO 23 ES6 '----------------------------------------------------------


// Only change code above this line

/*import * as stringFunctions from "./string_functions.js";
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
*/



//EJERCICIO 24 ES6 '----------------------------------------------------------

/*export default function subtract(x, y) {
    return x - y;
  }
*/




//EJERCICIO 25 ES6 '----------------------------------------------------------

/*import subtract from "./math_functions.js";
// Only change code above this line

subtract(7,4);
*/




//EJERCICIO 26 ES6 '----------------------------------------------------------

const makeServerRequest = new Promise((resolve, reject) => {

});




//EJERCICIO 27 ES6 '----------------------------------------------------------

const makeServerRequest1 = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data");// Change this line
    } else {  
      reject("Data not received");// Change this line
    }
  });






//EJERCICIO 28 ES6 '----------------------------------------------------------

const makeServerRequest2 = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  makeServerRequest2.then(result => {console.log(result)})





//EJERCICIO 29 ES6 '----------------------------------------------------------

const makeServerRequest3 = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest3.then(result => {
    console.log(result);
  });
  
  makeServerRequest3.catch(error => {
    console.log(error);
  });





//EJERCICIO 1 ES6 '----------------------------------------------------------





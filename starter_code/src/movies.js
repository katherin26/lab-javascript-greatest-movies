/* eslint no-restricted-globals: 'off' */
//const movies = require('./data');//importar toda la data desde la otra carpeta
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){
    
    let clone = [...arr]; // with the ...spread operator  we can clone the array
    clone.sort(function (movie1 , movie2) {//with sort we can organize the array and with the function we apply the logic , we have 2 parameters
        let yearDifference = movie1.year - movie2.year;//we asigne the operation to a new variable and then return the result.
        if(yearDifference === 0){
            return movie1.title.localeCompare(movie2.title);//this method localeCompare organize alphabetically. 
        }
        return yearDifference; 
    });
    return clone;//then we can return the result to clone and thats the logic for years =).
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr){
    const filterMovies = arr.filter(function(movie){// in this case we used filter method and we use movie like currentValue or element (Filter method create a new array!), then 
     
      let result = movie.director === 'Steven Spielberg' && movie.genre.includes('Drama') ;//we compare with === and && and we store the result in result 
     
      return result;//return the value
    })
    return filterMovies.length;// you need to return the value , so used .length =) ! 
  }

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
//// first solution without chaining and function

//function orderAlphabetically(arr){
  //let clone = [...arr];//we are cloning again because we need to work in a copy .
   //clone.sort(function(movie1,movie2){//organize all the titles
    //return movie1.title.localeCompare(movie2.title);// alphabetically.
 //})

   //let titles = clone.map(function(movie){
  // return movie.title;
 //});

   //let firstTitles = titles.slice(0,20);
   
 //return firstTitles;
 
//} 
//console.log(orderAlphabetically(movies));


//--------------------------------------------------------------------------------------------//
//Example with arrow function and chaining .
function orderAlphabetically(arr){
  let clone = [...arr];// Cloning...array. 
   let result= clone//declare a variable and assigned the array clone.
     .sort((movie1,movie2) => movie1.title.localeCompare(movie2.title))//organize with the sort method , movie1 and movie2 are the elements to compare and then you write a arrow function with the localCompare you have all the movies alphabetically organize.
     .map(movie => movie.title)//with map we can iterate in all the elements in this case the organize clone.
     .slice(0,20);//with this method you have a piece of that array , 0 index ultil 20 because slice don't take the last index .
   
 return result;
 
}
//console.log(orderAlphabetically(movies));

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function sumRate(arr){
  let sum  = 0;
  for(let i = 0 ; i < arr.length ; i++){
      sum = sum + arr[i].rate
  }
  return sum;
}
//console.log(sumRate(movies));//2078.39

function ratesAverage(arr){
  if(arr.length === 0)
   return 0;
  let average = sumRate(arr.filter(m => m.rate)) / arr.length;//.filter return falsy when rate is undefined o null.

  return Number.parseFloat(average.toFixed(2));
//In combination with this two methods! we obtain the a decimal value but , toFixed has a string type value, parseFloat reverse that to a floating point number.
}
//console.log(rateAverage(movies));//8.3


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){
  let dramaMovies = arr.filter(d => d.genre.includes('Drama'));
   return ratesAverage(dramaMovies);
}

//console.log(dramaMoviesRate(movies));//8.32

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {

  let newMovies = arr.map(movie => {
    let newObj = {...movie};
    let mins = 0;
    
    let hoursMinutes = newObj.duration.split(' ');
    
    let hours = hoursMinutes[0].replace('h','');
    
    if(hoursMinutes[1] !== undefined ) {
        mins = hoursMinutes[1].replace('min',''); 
    }  
    newObj.duration = (hours*60) + Number.parseInt(mins);

    return newObj;
    
     });

  return newMovies; 
}

//console.log(turnHoursToMinutes(movies.slice(0,5)));


//En este ejercicio SPLIT= dividimos '2h 22 min'  y lo convertimos a array asi seria ['2h','22min'] .pero tan bien para ahorrarnos este paso podriamos poner solamente split('h') y eliminamos solo la h . 
//REPLACE()=  itera sobre el string y al encontrar la coincidencia o el valor que se especifica la remplazo por ''====> sin espacio en blanco. :)





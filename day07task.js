//a.Get all the countries from the asia continent/region using filter fn:

// var request= new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload=function(){
//     var result=JSON.parse(request.response);
// // console.log(result[4].region)
// var out=result.filter((data)=>{
//     return  data.region==='Asia'
// })
// console.log(out)

// }


//b.Get all the countires with population of less than 2 lakhs using filter fn:

// var request= new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload=function(){
//     var result=JSON.parse(request.response);
// var out=result.filter((data)=>{
//     return  (data.population
//   <=200000)
// })
// console.log(out)
// }

//c.Print the following details name, capital, flag using forEach function

// var request= new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload=function(){
//     var result=JSON.parse(request.response);

// result.forEach((data) => {
//     (console.log(data.name,data.capital,data.flag))
    
// });

// }

//d.Print the total population of countries using reduce function

// var request= new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload=function(){
//     var result=JSON.parse(request.response);

//     const addPopulation = (accumulator, data)=>  accumulator + data.population;
//     let totalPopulation = result.reduce(addPopulation,0)
//     console.log(totalPopulation)
// }

//e.Print the country which uses US Dollars as currency.

// var request= new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload=function(){
//     var result=JSON.parse(request.response);
// let currency=result.filter((data)=>data.currencies?.USD)
// console.log(currency)
// }



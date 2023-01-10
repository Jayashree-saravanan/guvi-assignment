//task1  JSON iterate over(for and for in) loop

var request= new XMLHttpRequest(); 
request.open("GET","https://restcountries.com/v2/all") 
request.send(); // 
request.onload=function(){
var result=JSON.parse(request.response)
// console.log(result)
// for(i=0;i<result.length;i++){
//     console.log(i,result[i].name,result[i].area)
// }
for(var i in result){
      console.log(i,result[i].name,result[i].area)
 
}
}




//task2 resume in json format

let myResume={
    "personalInfo": {
      "name": "Jayashree Saravanan",
      "email": "sjayashree431@gmail.com",
      "location": {
        "country": "India"
      },
      "profiles": [
        {
          "github":"https://github.com/ShRee24Js"
        }
      ]
    },
 
    "education": [
      {
        "University": "RGCET",
        "department": "CSE",
      
      }
    ],
    "skills": [
      {
        "name": "javascript",
        "level": "Intermediate",
        "project": [
          "country app"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil, Enlish,  French",
      }
    ],
    "interests": [
      {
        "name": "Art,cooking,sports",
      }
    ]
  }
  console.log(myResume);
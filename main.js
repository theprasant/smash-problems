//var reg = /### Problem/ig;
//console.log(problem.search(reg))
//console.log(problem.split('### Problem')[2])
//console.log(problem.search(reg));


//import * as prblm from './problem.js'
//console.log(prblm.problem.length)

window.addEventListener('load', function(){
 // console.log('hi')
 var count = 0;
 var searchIcon = document.getElementById('searchIcon');
 var searchBox = document.getElementById('searchBox');
 searchIcon.addEventListener('click', function(){
   count++;
   if(count % 2 != 0){
     searchBox.style.height = '8rem';
     searchBox.style.padding = '15px';
   }else{
      searchBox.style.height = '0px';
       searchBox.style.padding = '0px';

   }
  // console.log(count);
 });
 
 var problemArr = problem.split('### Problem')
 var regEnd = /### Problem/ig;
 var endPoints = regEnd.exec(problem);
 //console.log(endPoints);
 
 var mainProblem = document.getElementById('mainProblem');
 
 
 var numSearch = document.getElementById('numSearch');
  var strSearch = document.getElementById('strSearch');
  var num = document.getElementById('num');
  var str = document.getElementById('str');
  
  var solution = document.getElementById('solution');
  
  var solLink = document.getElementById('solLink');
 
 
 
 
 
 // Function for search by number
  numSearch.addEventListener('click', function () {
    if(problemArr[num.value] != undefined){
      mainProblem.innerText = problemArr[parseInt(num.value)];
    solution.style.display = 'flex';
    if(num.value < 10){
      solLink.href = `https://raw.githubusercontent.com/vineetjohn/daily-coding-problem/master/solutions/problem_00${num.value}.py`;
    }else if(num.value >= 10 && num.value < 100){
      solLink.href = `https://raw.githubusercontent.com/vineetjohn/daily-coding-problem/master/solutions/problem_0${num.value}.py`;
    }else{
      solLink.href = `https://raw.githubusercontent.com/vineetjohn/daily-coding-problem/master/solutions/problem_${num.value}.py`;
    }
    
   // console.log(solLink.href)
    }else{
      mainProblem.innerHTML = `
      <p class='err' align='center'>Please enter an integer from 0 to ${problemArr.length - 1}</p>
      
        <div class="landPage">
      <h1 class="mainHead" align="center">Smash Problems</h1>
      <p class="info" align="center">
        Click the search icon at the top right corner to search a problem.
      </p>
    </div>

      `;
        solution.style.display = 'none';

      // console.log(typeof(num.value));
     // console.log(problemArr[01])
     // console.log(problemArr[num.value])
    }
    num.value = '';
    str.value = '';
    searchBox.style.height = '0px';
       searchBox.style.padding = '0px';
       count++;
    //console.log(problemArr.length)
  })
  
  
  
 
  
  
  
  // Function for search by string

/*
  strSearch.addEventListener('click', function(){
var regStr = new RegExp(str, 'ig');

var arr = [];
let t;
  while(t = regStr.exec(problem)){
   arr.push(t.index)
  
 }
// console.log(arr);
 //console.log(problem.match(regStr));
mainProblem.innerHTML = arr;
  });
  
*/
});


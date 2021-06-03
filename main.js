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

 

 

 

 // collecting problems and solutions in an array

 

 //array for problems

 var problemArr = problem.split('### Problem')

 

 //array for solutions

 var solutionArr = [];

 for(let i = 0; i < problemArr.length; i++){

   if (i < 10) {

     solutionArr.push(`https://raw.githubusercontent.com/vineetjohn/daily-coding-problem/master/solutions/problem_00${i}.py`);

   } else if (i >= 10 && i < 100) {

     solutionArr.push(`https://raw.githubusercontent.com/vineetjohn/daily-coding-problem/master/solutions/problem_0${i}.py`);

   } else {

     solutionArr.push(`https://raw.githubusercontent.com/vineetjohn/daily-coding-problem/master/solutions/problem_${i}.py`);

   }

 }

 

 

 //getting html elements

 

 var mainProblem = document.getElementById('mainProblem');

 

 

 var numSearch = document.getElementById('numSearch');

  var strSearch = document.getElementById('strSearch');

  var num = document.getElementById('num');

  var str = document.getElementById('str');

  

  var solution = document.getElementById('solution');

  

  var solLink = document.getElementById('solLink');

 

 

 

 

 

 // Function for search by number

  numSearch.addEventListener('click', function () {

    var numVal = parseInt(num.value);

    if(problemArr[numVal] != undefined){

      mainProblem.innerText = problemArr[numVal];

    

    solution.style.display = 'flex';

    

    if(numVal < 10){

      solLink.href = `https://raw.githubusercontent.com/vineetjohn/daily-coding-problem/master/solutions/problem_00${numVal}.py`;

    }else if(numVal >= 10 && numVal < 100){

      solLink.href = `https://raw.githubusercontent.com/vineetjohn/daily-coding-problem/master/solutions/problem_0${numVal}.py`;

    }else{

      solLink.href = `https://raw.githubusercontent.com/vineetjohn/daily-coding-problem/master/solutions/problem_${numVal}.py`;

    }

   // console.log(solutionArr[numVal]);

    

   // console.log(solLink.href)

    }else{

      mainProblem.innerHTML = `

      <p class='err' align='center'>Please enter an integer from 1 to ${problemArr.length - 1}</p>

      

        <div class="landPage">

      <div class="heads">

              <h1 class="mainHead" align="center">Smash Problems</h1>

            <p class="subhead" align="center">smash at a glance</p>

           </div>

      <p class="info" align="center">

        Click the search icon at the top right corner to search a problem.

      </p>

    </div>

      `;

        solution.style.display = 'none';

     

    }

    num.value = '';

    str.value = '';

    searchBox.style.height = '0px';

       searchBox.style.padding = '0px';

       count++;

    //console.log(problemArr.length)

  })

  

  

  

 

  

  

  

  // Function for search by string

  strSearch.addEventListener('click', function(){

    

    mainProblem.innerHTML = '';

   solution.style.display = 'none';

   var userRegex = str.value;

if(str.value.includes('.') || str.value.includes('*')){

  //console.log('includes !');

 userRegex = str.value.replace(/\./g, "\\.").replace(/\*/g, "\\*");

 //console.log(userRegex);

 

}

// var regStr = new RegExp(userRegex, 'ig');

//console.log(regStr);

var textStr = '';

var userText = str.value.replace(/^\s+/, '').replace(/\s+$/, '');

if(userText == ''){

  

      mainProblem.innerHTML = `

       <p class='err' align='center'> Hey ! what are you looking for ? You are searching an empty string hehe </p>

      

        <div class="landPage">

      <div class="heads">

              <h1 class="mainHead" align="center">Smash Problems</h1>

            <p class="subhead" align="center">smash at a glance</p>

           </div>

      <p class="info" align="center">

        Click the search icon at the top right corner to search a problem.

      </p>

    </div>

      `;

      //console.log(mainProblem.innerHTML)

num.value = '';

    str.value = '';

    searchBox.style.height = '0px';

    //console.log(searchBox.style.height);

       searchBox.style.padding = '0px';

       count++;

  return;

}else if(userText == '.' || userText.match(/^[a-zA-Z0-9]$/) || userText.length < 2 || userText.match(/\\/) || userText.includes('\\')){

 // console.log('only dot used');

 mainProblem.innerHTML = ` <p class='err' align='center'> Please use more than one character and don't use backslash (\\) </p>

      

        <div class="landPage">

      <div class="heads">

              <h1 class="mainHead" align="center">Smash Problems</h1>

            <p class="subhead" align="center">smash at a glance</p>

           </div>

      <p class="info" align="center">

        Click the search icon at the top right corner to search a problem.

      </p>

    </div>`;

    

    num.value = '';

    str.value = '';

    searchBox.style.height = '0px';

   // console.log(searchBox.style.height);

       searchBox.style.padding = '0px';

       count++;

    

  return;

}else if (userText.match(/problem(?!s)/ig)) {

      mainProblem.innerHTML = ` <p class='err' align='center'>Please don't search for Problem... All are problems here... Don't add more problems in life Haha ! <br>

      Actually the "problem" word is in every problem, so it may hang your phone for few seconds... It will show results though...

      

      </p>

      

        <div class="landPage">

      <div class="heads">

              <h1 class="mainHead" align="center">Smash Problems</h1>

            <p class="subhead" align="center">smash at a glance</p>

           </div>

      <p class="info" align="center">

        Click the search icon at the top right corner to search a problem.

      </p>

    </div>`;

      num.value = '';

      str.value = '';

      searchBox.style.height = '0px';

      // console.log(searchBox.style.height);

      searchBox.style.padding = '0px';

      count++;

      return;

    }

//regEx and for loop to add problem on match

var regStr = new RegExp(userRegex, 'ig');

for(let i = 0; i < problemArr.length; i++){

  if(problemArr[i].match(regStr) != null){

    

    textStr = problemArr[i].replace(regStr, strReplacer).replace(/ /mg,"&nbsp;").replace(/(\r\n|\n|\r)/gm, "<br>");

    

    mainProblem.innerHTML += textStr +'<br>' +

      ` <a href='${solutionArr[i]}' class="strSolLink" >  <div class="strSolution">Solution (python) <br />

     

    </div>

   

    </a>` +

    '<br> <hr> <br>';

   

    

}

    

  }

  if(textStr == ''){

    mainProblem.innerHTML = ` <p class='err' align='center'> Oops ! No matches found !</p>

      

        <div class="landPage">

      <div class="heads">

              <h1 class="mainHead" align="center">Smash Problems</h1>

            <p class="subhead" align="center">smash at a glance</p>

           </div>

      <p class="info" align="center">

        Click the search icon at the top right corner to search a problem.

      </p>

    </div>`;

  }

num.value = '';

    str.value = '';

    searchBox.style.height = '0px';

    //console.log(searchBox.style.height);

       searchBox.style.padding = '0px';

       count++;

  });

  

  

  

  function strReplacer(inp) {

  return "<mark>" + inp + "</mark>"

}

});


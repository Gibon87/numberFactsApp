
let fact = document.querySelector('#fact');                   // set variables
let factText = document.querySelector('#factText');        // set variables

let numberInput = document.querySelector('#numberInput');
 numberInput.addEventListener('input', getFactAjax);

   // Fetch with XHR
   function getFactAjax(){             // creating function who get a number from our input
    let number = numberInput.value;
    if(number != ''){
       let xhr = new XMLHttpRequest();
       xhr.open('GET', 'http://numbersapi.com/'+number);

       xhr.onload = function(){                     // setting what gonna happen, when we get our api
         if(this.status == 200 && number != ''){
           fact.style.display = 'block';
           factText.innerText = this.responseText;        // puting fact to "number fact" on app
         }
       }

       xhr.send();
       }
   }

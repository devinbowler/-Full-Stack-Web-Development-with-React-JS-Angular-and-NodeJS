var h1Element = document.querySelector('h1');

h1Element.style.color = 'blue';

/*var isGrey = false;

var bodyElement = document.querySelector('body');

setInterval(function() {
    if (isGrey) {
        bodyElement.style.background = 'white';
    } 
    else {
        bodyElement.style.background = 'Grey';
    }
    isGrey = !isGrey;
}, 1000)


var selectWithID = document.getElementById('domPara');

console.log(selectWithID);

var selectWithClass = document.getElementsByClassName('background');
consle.log(selectWIthClass);

var selectWithTag = document.getElementsByTagName('h1');
consle.log(selectWithTag);

var selectWithquery = document.querySelector('h1');
consle.log(selectWithquery);

var selectWithquery = document.querySelector('#domPara');
consle.log(selectWithquery);


var divToManipulate = document.querySelector('.background');

divToManipulate.style.height = '50px';
divToManipulate.style.width = '400px';
divToManipulate.style.backgroundColor = 'red';
divToManipulate.style.fontSize = '30px';
divToManipulate.style.border = '5px solid black' ;
*/

var paragraph = document.querySelector('#description');

paragraph.textContent = 'This course truly is, the best course';

var myLink = document.querySelector('a');

myLink.getAttribute('href')

myLink.setAttribute('href', 'https://www.twitter.com/')

console.log(myLink.getAttribute('href'));


var button = document.querySelector('#btn1');
 
button.addEventListener('click', function() {
console.log('You clicked the button');
});


var listParent = document.querySelector('ul');

listParent.addEventListener('click', function(){
console.log('You clicked the ul');
listParent.style.backgroundColor = 'yellow';
});

var listItems = document.querySelectorAll('li');

for (var i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('click', function(){
        this.style.color = 'white';
    });
}

var paragraph = document.querySelector('#description');

function toggleBackground() {
 paragraph.classList.toggle('toggleBackground');
}

paragraph.addEventListener('click', toggleBackground);

//paragraph.addEventListener('click', toggleBackground);
//Use this line for the event to already be toggled on load.

/*
var firstTodoItem = document.querySelector('.todoItem');

firstTodoItem.addEventListener('mouseover', function(){
firstTodoItem.style.backgroundColor = 'teal';
firstTodoItem.style.color = 'white';
});

firstTodoItem.addEventListener('mouseout', function() {
    firstTodoItem.style.backgroundColor = 'white';
    firstTodoItem.style.color = 'black';
});
*/

var todoListItems = document.querySelectorAll('.todoItem');

for (var i = 0; i < todoListItems.length; i++){
    todoListItems[i].addEventListener('mouseover', function(){
        this.style.backgroundColor = 'teal';
        this.style.color = 'white';
    })


    todoListItems[i].addEventListener('mouseout', function(){
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
    })
}
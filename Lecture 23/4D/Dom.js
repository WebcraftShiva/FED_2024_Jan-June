// ######### CONSOLE WORKING  ##########
console.log(window) // its an object with lot of properties inside it
console.log(document)  // show basic html structure that document has for this page.

// #### document basic structure:
console.log(document.link) // find link
// here Htmlcollection array ni ni hai per array jaisa hi hai to isme hm ye
// kr skte hai
console.log(document.link[2])

//getElementById is method of document. there are lot of other method too available
document.getElementById('firstHeading')
// 1.Id k help se Html ko change kr rhe hai hm log:
document.getElementById('firstHeading').innerHTML = "JS overview"

// 2. Id k help se css style ko change kr rhe hai:
// 2.1:
document.getElementById('firstHeading').style.backgroundColor = "Orange"
// 2.2:
document.getElementById('firstHeading').style.borderRadius = "20px"

// ######## DOM Working in our html Page:
// Id selector: 
// 1.getElementByID is a method whose value we are want to see
document.getElementById("title")
// 2. checking id: now we try to access element of that method
document.getElementById("title").id
// 3. checking class: behind seen class is class but it understand 
//class when we use classes as className
document.getElementById("title").class
// 4. className: in jsx we use className in place of class to avoid 
//conflict between css and jsx 
document.getElementById("title").className
// 5. To get the Attributes: getAttribute is function here we pass key like 
// classs/id to get value of that key
document.getElementById("title").getAttribute('class')
// setAttribute: it overrides the thing whenever we pass it.
document.getElementById("title").setAttribute('class','test')
document.getElementById("title").setAttribute('class','test heads')

// assigning value to a varibale:
var a = document.getElementById('title')
// using style:
a.style.backgroundColor = "Red"
a.borderRadius = "20px";

// text selection: selects html content as well as html elements
a.innerHTML
a.innerText
a.textContent

// queryselector: selects first h1
document.querySelector('h1')
// queryselector: for selecting id
document.querySelector('#title')
// queryselector: for selecting class
document.querySelector('.heading')

// ul selection:
document.querySelector('ul')
const unord = document.querySelector('ul')
// change background color of li
unord.querySelector('li').style.backgroundColor = "orange"
// change background color using queryselectorAll
const all = document.querySelectorAll('li')
all // here all is nodeList which is not a array but have working like array
all[2].style.color = "green"


// ##### creating new element in DOM:

// let heading = document.getElementById("heading");
// console.dir(heading)

// let para = document.getElementsByClassName("para")
// console.log(para)

// let elements = document.querySelector("p")
// console.dir(elements)
// let a = elements.tagName
// console.log(a)
// console.dir(document.body.firstChild)

// let div = document.querySelector("div")
// console.dir(div)


// Part-2

// ````````````````````````````getattribute()

// let div = document.querySelector("div")
// console.log(div)

// let id = div.getAttribute("id")
// console.log(id)

// let name = div.getAttribute("name")
// console.log(name)

// let para = document.querySelector("p")
// console.log(para)
// let check = para.getAttribute("class")
// console.log(check)



//--------------------setattribute

// let para = document.querySelector("p")
// console.log(para)
// let check = para.setAttribute("class","newClass")
// console.log(check)\


// For Style
// let div = document.querySelector("div")
// console.log(div)
// div.style.backgroundColor = "lightgrey"
// div.innerText = "HELLO WORLD"
// // div.style.visibility ="hidden"


//--------------------Create Element
// let btn = document.createElement("button")
// console.log(btn)
// btn.innerText = "Click Me"


//-------------------Insert Element

// let div = document.querySelector("div")
// div.append(btn)


let newHeading = document.createElement("h1") 
newHeading.innerText = "I am Iron Man"

document.querySelector("body").prepend(newHeading);

// newHeading.remove()


// const grandparent = document.querySelector(".grandparent")
// const parent = document.querySelector(".parent")
// const child = document.querySelector(".child")



// grandparent.addEventListener('click',e => {
//     console.log(e.target);
// })

// // RUN EVENTS ONLY ONCE BY ADDING AN ATTRIBUTE AS SHOWN

// grandparent.addEventListener('click',e => {
//     console.log('grandparent');
// }, {once: true})


// EVENT DELEGATION.

const divs = document.querySelectorAll('div');

divs.forEach(div => {
    div.addEventListener('click', () => {
        console.log("Hey!")
    })
});
// Above code will output hi when any of the 3 divs are clicked.

// Below is a new purple div

const newDiv = document.createElement('div');
newDiv.style.width = '200px'
newDiv.style.height = '200px'
newDiv.style.backgroundColor = 'purple'
document.body.append(newDiv)

// Check wedDevsimplified eventlisteners tutorial towards the end for event delegation

const grandparent = document.querySelector(".grandparent")
// console.log(document);
// const parent = document.querySelector(".parent")
// const child = document.querySelector(".child")
// console.log(grandparent);

grandparent.addEventListener('click', e => {
    console.log(e.target);
})

// After adding the  eventListeners you need to add parameter. 
// The parameter takes two arguments which is the event you want(eg click) and the callback function which runs every time you run your event... (in this case click) 
// The (target) in this case is the grandparent.

// BUBBLING.
// It simply means going from the closest elements to the outer most element.
// It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.

grandparent.addEventListener('click', e => {
    console.log(grandparent);
})

parent.addEventListener('click', e => {
    console.log(parent);
})

child.addEventListener('click', e => {
    console.log(child);
})
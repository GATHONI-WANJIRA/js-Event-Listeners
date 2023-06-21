
const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")


// Add eventListeners
// grandparent.addEventListener('click', e => {
//     console.log(e.target);
// })

// After adding the  eventListeners you need to add parameter. 
// The parameter takes two arguments which is the event you want(eg click) and the callback function which runs every time you run your event... (in this case click) 
// The (target) in this case is the grandparent.

// BUBBLING.
// It simply means going from the closest elements to the outer most element.
// It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.

// grandparent.addEventListener('click', e => {
//     console.log(grandparent);
// })

// parent.addEventListener('click', e => {
//     console.log(parent);
// })

// child.addEventListener('click', e => {
//     console.log(child);
// })

// Event Capturing
// Event capturing happens from the outside to the inside... (furthest to closest.)


grandparent.addEventListener('click', e => {
    console.log('grandparent capture');
} ,{capture :true})

grandparent.addEventListener('click', e => {
    console.log('grandparent Bubble');
})


parent.addEventListener('click', e => {
    console.log('parent capture');
    e.stopPropagation();
}, {capture:true});

parent.addEventListener('click', e => {
    console.log('parent bubble');
});

child.addEventListener('click', e => {
    console.log('child capture');
} , {capture: true})

child.addEventListener('click', e => {
    console.log('child bubble');
})

document.addEventListener('click', e => {
    console.log('document bubble');
})

document.addEventListener('click', e => {
    console.log('document capture');
} , {capture: true})

// Events Propagation.
//  Propagation refers to how events travel through the Document Object Model (DOM) tree. The DOM tree is the structure which contains parent/child/sibling elements in relation to each other. You can think of propagation as electricity running through a wire, until it reaches its destination.

// Case scenario we want to stop the propagation at parent capture so we add .stopPropagation to the parent capture.

// It will stop propagating at parent capture and will not enter child element.
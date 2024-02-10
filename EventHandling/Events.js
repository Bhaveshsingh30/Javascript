


// Get a reference to the DOM element
// const button = document.getElementById('myButton');

// // Define the event handler function
// function handleClick(event) {
//     console.log('Button clicked!');
//     console.log('Event:', event);
// }

// // Register the event handler for the 'click' event
// button.addEventListener('click', handleClick);




//<button id="myButton" onclick="handleClick()">Click me!</button>


// function handleClick() {
//     console.log('Button clicked!');
// }





// function handleClick(event) {
//     // Accessing event properties
//     console.log('Button clicked!');
//     console.log('Target element:', event.target);
// }

// // Registering the event handler
// const button = document.getElementById('myButton');
// button.addEventListener('click', handleClick);


// function handleKeyEvent(event) {
//     console.log('Event type:', event.type); // Log the type of event
//     console.log('Event timestamp:', event.timeStamp); // Log the timestamp of the event
//     console.log('Default prevented:', event.defaultPrevented); // Log whether the default action has been prevented
//     console.log('Event target:', event.target); // Log the element that triggered the event
//     console.log('Current target:', event.currentTarget); // Log the current event target
//     console.log('Mouse coordinates (clientX, clientY):', event.clientX, event.clientY); // Log the mouse coordinates relative to the browser's client area
//     console.log('Mouse coordinates (screenX, screenY):', event.screenX, event.screenY); // Log the mouse coordinates relative to the screen
//     console.log('Alt key pressed:', event.altKey); // Log whether the Alt key was pressed
//     console.log('Ctrl key pressed:', event.ctrlKey); // Log whether the Ctrl key was pressed
//     console.log('Shift key pressed:', event.shiftKey); // Log whether the Shift key was pressed
//     console.log('Key code (deprecated):', event.keyCode); // Log the Unicode value of the key pressed (deprecated)
// }


// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>Event Propagation Example</title>
// <style>
//     #outer, #inner {
//         padding: 20px;
//         margin: 10px;
//         border: 1px solid black;
//     }
// </style>
// </head>
// <body>
//     <div id="outer">
//         <div id="inner">Click me!</div>
//     </div>

//     <script>
//         function handleCapture() {
//             console.log('Capture phase: Event captured!');
//         }

//         function handleTarget() {
//             console.log('Target phase: Event reached the target!');
//         }

//         function handleBubbling() {
//             console.log('Bubbling phase: Event bubbling up!');
//         }

//         const outer = document.getElementById('outer');
//         const inner = document.getElementById('inner');

//         outer.addEventListener('click', handleCapture, true); // Capture phase
//         inner.addEventListener('click', handleTarget); // Target phase
//         outer.addEventListener('click', handleBubbling); // Bubbling phase
//     </script>
// </body>
// </html>




// document.getElementById('myLink').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent the default behavior of clicking on a link
// });


// document.getElementById('myButton').addEventListener('click', function(event) {
//     event.stopPropagation(); // Stop the event from further propagation
// });

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Event Cancellation Example</title>
</head>
<body>
    <a id="myLink" href="https://example.com">Click me to cancel the link!</a>
    <div id="parent">
        <button id="myButton">Click me to stop event propagation!</button>
    </div>

    <script>
        // Prevent default behavior of clicking on the link
        document.getElementById('myLink').addEventListener('click', function(event) {
            event.preventDefault();
            console.log('Link click event canceled!');
        });

        // Stop event propagation when clicking on the button
        document.getElementById('myButton').addEventListener('click', function(event) {
            event.stopPropagation();
            console.log('Button click event propagation stopped!');
        });

        // Event listener on the parent div to demonstrate event bubbling
        document.getElementById('parent').addEventListener('click', function(event) {
            console.log('Event bubbling: Parent div clicked!');
        });
    </script>
</body>
</html>

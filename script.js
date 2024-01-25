// Get the #breakpoint element
const breakpoint = document.querySelector('#breakpoint');

// Add event listener for hover
breakpoint.addEventListener('mouseover', function() {
    // Change the background color to green
    breakpoint.style.backgroundColor = 'green';
});

// Add event listener for mouseout
breakpoint.addEventListener('mouseout', function() {
    // Reset the background color
    breakpoint.style.backgroundColor = '';
});

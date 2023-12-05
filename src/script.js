window.onload = function() {
    var logoElement = document.getElementById('myLogo');
    var titleElement = document.getElementById('myTitleArea');

    // Store the line in a variable to reference it later
    var myLine = new LeaderLine(
        logoElement,
        titleElement,
        {
            path: 'straight', 
            startSocket: 'right', 
            endSocket: 'left-top', 
            color: 'black',
            size: 4,
            endPlug: 'behind'
        }
    );

    // Add an event listener to the window's scroll event
    window.addEventListener('scroll', function() {
        // Call the position method on the LeaderLine instance to update its position
        myLine.position();
    });
};

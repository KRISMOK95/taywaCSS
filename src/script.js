window.onload = function() {
    var logoElement = document.getElementById('myLogo');
    var titleElement = document.getElementById('myTitleArea');
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


    window.addEventListener('scroll', function() {
        myLine.position();
    });
};

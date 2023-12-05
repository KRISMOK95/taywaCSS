document.addEventListener('DOMContentLoaded', function() {
    const line = document.getElementById('connector-line');
    const logo = document.querySelector('.logo');
    const titleArea = document.querySelector('.title-area');

    function drawLine() {
        const logoRect = logo.getBoundingClientRect();
        const titleRect = titleArea.getBoundingClientRect();

        // Calculate the start and end points of the line
        const startX = logoRect.right;
        const startY = logoRect.top + logoRect.height / 2; // Middle of the logo
        const endX = titleRect.left;
        const endY = titleRect.top + titleRect.height / 2; // Middle of the title

        // Set the position and size of the line
        line.style.width = `${endX - startX}px`;
        line.style.top = `${startY}px`;
        line.style.left = `${startX}px`;

        // If the objects are not aligned horizontally, adjust the line to connect them
        if (startY !== endY) {
            // Calculate the angle needed to tilt the line
            const angle = Math.atan2(endY - startY, endX - startX) * (40 / Math.PI);
            line.style.transform = `rotate(${angle}deg)`;
            // Set the height to be the distance between the two points
            line.style.height = `${Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2))}px`;
            // Reset the width since we're using height to represent the line length
            line.style.width = `5px`; // Make sure the line's width is enough to be visible when rotated
        }
    }

    // Redraw the line whenever the window resizes or the user scrolls
    window.addEventListener('resize', drawLine);
    window.addEventListener('scroll', drawLine);

    // Draw the initial line
    drawLine();
});

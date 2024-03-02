window.onload = function() {
    const backgroundImg = new Image();
    backgroundImg.src = 'img/bg.jpg';
    
    backgroundImg.onload = function() {
        document.body.style.backgroundImage = `url(${backgroundImg.src})`;
        scrollBackground();
    };
    
    function scrollBackground() {
        let posX = 0;
        setInterval(() => {
            posX -= 1; // Adjust speed by changing this value
            document.body.style.backgroundPosition = `${posX}px center`;
        }, 50); // Adjust scroll speed by changing this value
    }
};

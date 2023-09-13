const square = document.getElementById('square');
        const colorButton = document.getElementById('colorButton');

        let clickCount = 0;

        function changeSquare() {
            // Generate random RGB values for the background color
            const randomColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;

            // Generate a random rotation angle between 0 and 360 degrees
            const randomRotation = Math.random() * 360;

            // Generate random top and left positions within the window
            const windowHeight = window.innerHeight - square.clientHeight;
            const windowWidth = window.innerWidth - square.clientWidth;
            const randomTop = Math.random() * windowHeight;
            const randomLeft = Math.random() * windowWidth;

            // Apply the random color, rotation, and position to the square
            square.style.backgroundColor = randomColor;
            square.style.transform = `rotate(${randomRotation}deg)`;
            square.style.top = randomTop + 'px';
            square.style.left = randomLeft + 'px';

            // Increment the click count and update the button text
            clickCount++;
            colorButton.textContent = `Click me (${clickCount})`;
        }

        // Function to generate a random number between 0 and 255
        function getRandomNumber() {
            return Math.floor(Math.random() * 256);
        }
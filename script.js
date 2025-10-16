document.addEventListener('DOMContentLoaded', () => {
    const captchaImage = document.getElementById('captcha-image');
    const captchaSolutionInput = document.getElementById('captcha-solution');
    const solveButton = document.getElementById('solve-button');
    const solvedCaptchaParagraph = document.getElementById('solved-captcha');

    // Get the captcha URL from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const imageUrl = urlParams.get('url') || 'sample.png'; // Default to sample.png

    captchaImage.src = imageUrl;

    solveButton.addEventListener('click', () => {
        // Simulate solving the captcha (replace with actual solving logic)
        setTimeout(() => {
            const solution = generateRandomString(6); // Simulate a solved captcha
            solvedCaptchaParagraph.textContent = solution;
            captchaSolutionInput.value = solution; // Fill input to indicate "solved"
        }, 2000); // Simulate 2 seconds of processing time
    });

    // Simulate captcha solving - Replace with real logic.  For demo purposes only.
    function generateRandomString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
});
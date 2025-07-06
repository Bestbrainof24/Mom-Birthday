document.getElementById('confetti-btn').addEventListener('click', function() {
    confetti({
        particleCount: 150, // Number of confetti pieces
        spread: 70,         // Angle spread of confetti (degrees)
        origin: { y: 0.6 }  // Where confetti starts vertically (0 = top, 1 = bottom)
    });
});
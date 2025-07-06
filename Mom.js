const btn = document.getElementById('confetti-btn');
btn.addEventListener('click', function() {
    btn.disabled = true; // Disable button
    confetti({
        particleCount: 150, // Number of confetti pieces
        spread: 70,         // Angle spread of confetti (degrees)
        origin: { y: 0.6 }  // Where confetti starts vertically (0 = top, 1 = bottom)
    });
    setTimeout(() => {
        btn.disabled = false; // Re-enable after 1 second
    }, 700);
});

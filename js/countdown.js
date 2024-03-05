
  // Set the countdown date (change this to your desired date)
  const countdownDate = new Date('March 12, 2024 00:00:00 GMT+00:00').getTime();

  // Update the countdown every 1 second
  const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in the 'timer' element
    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById('timer').innerHTML = 'EXPIRED';
    }
  }, 1000);

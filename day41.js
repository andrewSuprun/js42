function queueTime(customers, n) {
  // If we have customers but no queues, we have an infinite time.
  // If we have no queues AND no customers, noone needs to wait (= 0 time)
  if (n === 0) {
    return customers.length > 0 ? Infinity : 0;
  }

  // Initialize all empty tills
  const tills = Array(n).fill(0);
  
  // For every customer...
  customers.forEach(customerTime => {
    // ... get the currently emptiest till ...
    const emptiestTillIndex = tills.indexOf(Math.min(...tills));
    
    // ... and assign this customer to this till
    tills[emptiestTillIndex] += customerTime;
  });
  
  // Now we "queued" all customers as efficent as possible using all 
  // available tills. This means the longest queue now equals the maximum
  // time needed.
  return Math.max(...tills);
}

function launchAll(launchMissile) {
  for(let i = 0; i < 5; i++) {
    setTimeout(function() {
      launchMissile(i);
    }, i * 1000);
  }
}

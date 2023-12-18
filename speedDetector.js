function speedDetector(speed) {
    const maxSpeed = 70;
    const speedPerDemerit = 5;
    const maxDemerit = 12;
  
    if (speed <= maxSpeed) {
      console.log("Ok");
    } else {
      const demeritPoints = Math.floor((speed - maxSpeed) / speedPerDemerit);
  
      if (demeritPoints >= maxDemerit) {
        console.log("License suspended.");
      } else {
        console.log("Points: " + demeritPoints);
      }
    }
  }
  
  speedDetector(130);
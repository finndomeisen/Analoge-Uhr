// function which moves the hands 
function updateClock() {
  // first you need to get the realtime time
  const now = new Date(); // creates a new variable with the exact time
  const seconds = now.getSeconds(); // gets the actual seconds 
  const minutes = now.getMinutes(); // gets the actual minutes
  const hours = now.getHours(); // gets the actual hours
  // now it needs to recalculate the seconds into degrees
  const secondDegrees = (seconds / 60) * 360; 
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
  
  const hourDegrees = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;
  
  // now it selects the right hand with the right time which got called
  const secondHand = document.querySelector(".second-hand"); 
  const minHand = document.querySelector(".min-hand"); 
  const hourHand = document.querySelector(".hour-hand"); 
  // this makes the hand actually move (rotate)
  secondHand.style.transform = `rotate(${secondDegrees}deg)`; 
  minHand.style.transform = `rotate(${minuteDegrees}deg)`; 
  hourHand.style.transform = `rotate(${hourDegrees}deg)`; 
}
// update every 1000ms
setInterval(updateClock, 1000); 
// clock initialisies so that it doesnt start on 12h
updateClock(); 
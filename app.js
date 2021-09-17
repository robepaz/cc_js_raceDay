let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

//agregamos edad de corredor
const runnerAge = 22;

if (runnerAge > 18 && registeredEarly) {
    raceNumber += 1000;

// adultos tempraneros
if (runnerAge > 18 && registeredEarly) {
    console.log(`Racer ${raceNumber}, you will start off at 9:30`);

// adultos tardios
} else if (runnerAge > 18 && !registeredEarly) {
    console.log(`Racer ${raceNumber}, you will start off at 11:00`);

// menores cualquier edad    
} else {
    console.log(`Racer ${raceNumber}, you will start off at 12:30`);
  }


let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;
if (age > 18 && early) raceNumber += 1000;
if (age > 18 && early) {
    console.log(`Runner with the number ${raceNumber}, you will race at 9:30 am.`);
}
else if(age > 18 && !early) {
    console.log(`Runner with the number ${raceNumber}, because you registered late, you will race at 11 am.`);
}
else if (age < 18) {
    console.log(`Runner with the number ${raceNumber}, you will take place at the youth race at 12:30 am.`);
}
else {
    console.log('Go see the registration desk.');
}

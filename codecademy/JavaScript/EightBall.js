const userName = 'joni'
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
let userQuestion = 'Will I ever get a reply from her?';
console.log(`${userName} ask\s: \"${userQuestion}\".`);
//generate a random number between 0 and 7
let randomNumber =
    Math.floor(Math.random() * 8);
let eightBall = '';
//assign the phrase according to what randomNumber is
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
}
console.log(eightBall);
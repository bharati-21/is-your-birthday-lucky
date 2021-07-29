// Variables
const birthDate = document.querySelector('.birth-date');
const luckyNumber = document.querySelector('.lucky-no');
const btnCheck = document.querySelector('.btn-check');
const outputMessage = document.querySelector('.output-message');
const gifImg = document.querySelector('.gif');
const outputDiv = document.querySelector('.output-div');

btnCheck.addEventListener('click', checkIfBirthdayLucky);

function checkIfBirthdayLucky(e) {
    e.preventDefault();
    let birthday = birthDate.value;
    let luckyNum = luckyNumber.value;


    outputMessage.classList.remove('success');
    outputMessage.classList.remove('lucky');
    outputMessage.classList.remove('not-lucky');
    outputMessage.classList.remove('error');

    gifImg.style.display = 'none';
    outputDiv.style.display = 'block';
    outputMessage.style.display = 'block';

    
    if(birthday === "" || birthday === null || luckyNum === "" || luckyNum === null) {
        outputMessage.classList.add('error');
        outputMessage.innerText = "Enter values for birth date and lucky number";
    }

    else if (luckyNum < 1) {
        outputMessage.classList.add('error');
        outputMessage.innerText = "Lucky number should be greater than or equal to 1";
    }
    
    else {
        birthday = birthday.split('-');

        let sum = 0;
        for(let i = 0; i<birthday.length; i++) {
            let num = parseInt(birthday[i]);
            sum+=addDigits(num);
        }

        console.log(sum);
        gifImg.style.display = 'block';

        if(sum % luckyNum === 0) {
            outputMessage.classList.add('lucky');
            outputMessage.innerHTML = "Woohoo!!! Your Birth Date is lucky!";

            gifImg.setAttribute('src', 'https://media.giphy.com/media/l2SqiOMQxG82Gto4M/giphy.gif');
        }
        else {
            outputMessage.classList.add('not-lucky');
            outputMessage.innerHTML = "Oh no!!! Your Birth Date is not lucky!";

            gifImg.setAttribute('src', 'https://media.giphy.com/media/dJYoOVAWf2QkU/giphy.gif');
        }
    }
}


function addDigits(num) {
    let digit = 0;
    while(num!=0) {
        digit+=num%10;
        num = parseInt(num/10);
    }

    return digit;
}
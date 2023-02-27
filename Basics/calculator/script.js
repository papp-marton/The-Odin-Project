displaycontent = "";
actions = 0;
lastactiontype = "";

//display functions
const display = document.getElementById('display');
function clearDisplay() {
    display.replaceChildren("");
    displaycontent = "";
}

function refreshDisplay(input) {
    displaycontent += input;
    display.replaceChildren(displaycontent);
}

//calculation functions
function formatInput(input){
    const delimiterRegExp = /^(\/\/.*\n)/
    const matches = delimiterRegExp.exec(input)
    if(matches && matches.length > 0){
      return input.replace(delimiterRegExp,'')
    }
    return input
}

function getNumbers(string, delimiter){
    let input = formatInput(string);
    if (delimiter == "") {
        return string;
    }
    return input.split(delimiter)
      .filter(n => n !== '')
      .map(n => parseInt(n))
  }


function calculate(input, actiontype) {
    clearDisplay();
    numbers = getNumbers(input, actiontype);

    switch (actiontype) {
        case '+':
            return numbers[0] + numbers[1];
        case '-':
            return numbers[0] - numbers[1];
        case '*':
            return numbers[0] * numbers[1];
        case '/':
            return numbers[0] / numbers[1];
        case '':
            return numbers;
    
        default:
            break;
    }
}

//buttons
const container = document.getElementById('container');
container.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

    switch (event.target.id) {
        case'clearbtn':
            clearDisplay();
            break;
        case 'addbtn' :
            if (actions < 1) {
                refreshDisplay('+');
                actions++;
            }
            else {
                refreshDisplay(calculate(displaycontent, lastactiontype));
                actions = 0;
                document.getElementById("addbtn").click(); 
            }
            lastactiontype = '+';
            break;
        case 'subtractbtn' :
            if (actions < 1) {
                refreshDisplay('-');
                actions++;
            }
            else {
                refreshDisplay(calculate(displaycontent, lastactiontype));
                actions = 0;
                document.getElementById("subtractbtn").click(); 
            }
            lastactiontype = '-';
            break;
        case 'multiplicationbtn' :
            if (actions < 1) {
                refreshDisplay('*');
                actions++;
            }
            else {
                refreshDisplay(calculate(displaycontent, lastactiontype));
                actions = 0;
                document.getElementById("multiplicationbtn").click(); 
            }
            lastactiontype = '*';
            break;
        case 'divisionbtn' :
            if (actions < 1) {
                refreshDisplay('/');
                actions++;
            }
            else {
                refreshDisplay(calculate(displaycontent, lastactiontype));
                actions = 0;
                document.getElementById("divisionbtn").click(); 
            }
            lastactiontype = '/';
            break;
        case 'calulatebtn' :
            refreshDisplay(calculate(displaycontent, lastactiontype));
            actions = 0;
            break;
        case 'backspacebtn' :
            displaycontent = displaycontent.substring(0, displaycontent.length - 1);
            display.replaceChildren(displaycontent);
            break;
        default:
            if (displaycontent.length <11){
                refreshDisplay(event.target.id);
            }
    }  
})

//notes
//https://gist.github.com/giordanocardillo/3a94c6e5e4955b09e052fbebd58a41b8
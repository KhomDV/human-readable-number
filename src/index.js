
const arrayWords = ['zero','one','two','three','four','five','six','seven','eight','nine','ten',
                    'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen',
                    'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];


module.exports = function toReadable (number) {
    let textNumber = '';
    let numberRemain = number;
    let discharge;
    let numberWord;

    while (true) {

        discharge = numberRemain.toString().length;
        switch(discharge) {
            case 3:
                numberWord = Math.floor(numberRemain / Math.pow(10, discharge-1));
                break;
            case 2:
                if ( numberRemain <= 19 ) {
                    discharge = 1;
                    numberWord = numberRemain;
                } else {
                    numberWord = Math.floor(numberRemain / Math.pow(10, discharge-1));
                }
                break;
            case 1:
                numberWord = numberRemain;
            }        

        textNumber = `${textNumber.trim()} ${toNumberWord(numberWord, discharge)}`;

        numberRemain = numberRemain - (numberWord * Math.pow(10, discharge-1));

        if ( numberRemain === 0 ) {
            break;
        }
    }    

    return textNumber.trim();
}



function toNumberWord (number, discharge) {
    let wordNumber = '';
    let index = number;

    if ( discharge === 2 ) {
        index = (20) + (number - 2);
    }

    wordNumber = `${arrayWords[index]}`;

    if ( discharge === 3 ) {
        wordNumber = `${wordNumber} hundred`;
    }

    return wordNumber;
      
}

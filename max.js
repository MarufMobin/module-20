// let numberOne = 1250;
// let numberTwo = 858;
// let numberThree = 500;

// if( numberOne > numberTwo && numberOne > numberThree ){
//     console.log( numberOne, "is Gratter then Other's Two numbers");
// }else if( numberTwo > numberOne && numberTwo > numberThree ){
//     console.log( numberTwo, "is Gratter then Other's Two numbers");
// }else{
//     console.log( numberThree, "is Gratter then Other's Two numbers");
// }

// using to find out who is bigger then person in three using a method


/* let mp = 500;
let minister = 1000;
let bussnessMan = 900;


let findMaxNumber = Math.max(mp, minister, bussnessMan);
console.log( findMaxNumber , "This is the bigger the two Number"); */

// Find a bigest number in three number

/* function findLargestNumber ( numberOne, numberTwo, numberThree){

    if( numberOne > numberTwo && numberOne > numberThree ){
        return numberOne;
    }
    else if( numberTwo > numberOne && numberTwo > numberThree ){
        return numberTwo;
    } else{
        return numberThree;
    }
}

let numberOne = 666666;
let numberTwo = 454;
let numberThree = 9000;

let resultFind = findLargestNumber( numberOne, numberTwo, numberThree);

console.log(resultFind); */

// Three number to find a smaler then one

function findSmallNumber( numberOne, numberTwo, numberThree){

    if( numberOne < numberTwo && numberOne < numberThree ){

        if( numberOne == numberTwo || numberOne == numberThree ){

            return("Some number's are equal");
        }else{
            return( numberOne);
        }
    }

    else if( numberTwo < numberOne && numberTwo < numberThree ){

        if(numberOne == numberTwo || numberOne == numberTwo){

            return("Some number's are equal");
        }else{
            return( numberTwo);
        }
    }
    else{
        
        if(numberOne == numberTwo || numberOne == numberTwo){

            return("Some number's are equal");
        }else{
            return(numberThree);
        }
    }
}

let numberOne = 1;
let numberTwo = 10;
let numberThree = 6;

let reuslt = findSmallNumber( numberOne, numberTwo, numberThree);

console.log(reuslt);
function largerstElement( numbers ){

    let largest = numbers[0];

    for( let i = 0; i < numbers.length; i++){

        const element = numbers[i];

        if( element > largest ){
            largest = element;
        }
    }

    return largest;
}

const numbers = [52, 25, 48, 86, 26, 36];
const numbersOfArray = largerstElement( numbers );

console.log(numbersOfArray);
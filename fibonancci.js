// fibonacci serice 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

/* 

1st & 2nd ta defalt 0 , 1

3rd index = 2nd + 1st
4th index = 3rd + 2nd 
5th index = 4th + 3rd 
6th index = 5th + 4th

nth index = (n-1)th + (n-2)th;
ith idex = (i-1)th + (i-2)th;

*/


// Lets start fibonancics series 

// let fibo = [ 0 , 1 ];

// for( let i = 2; i <= 10; i++ ){

//     fibo[i] = fibo[ i-1 ] + fibo[ i-2 ]; 

// }

// console.log(fibo);



/* fibo = [0, 1];

for( let i = 2; i <= 10; i++ ){

    fibo[i] = fibo[i-1] + fibo[i-2]; 
}
console.log(fibo); */


// using function to find out fibonunccic series

/* function createFebonaccisSeries( numbers ){

    let fibo = [ 0, 1];

    for( let i = 2; i < numbers; i++){

        fibo[i] = fibo[i-1] + fibo[i-2];
    }

    return fibo;    
}


const numbers = 7;

const creatFibonaccis = createFebonaccisSeries( numbers );

console.log( creatFibonaccis ); */



function createFebonaccisSeries( numbers ){

    let fibo = [ 0, 1];

    for( let i = 2; i < numbers; i++){

        fibo[i] = fibo[i-1] + fibo[i-2];
    }

    return fibo;    
}


const numbers = 7;

const creatFibonaccis = createFebonaccisSeries( numbers );

console.log( creatFibonaccis );
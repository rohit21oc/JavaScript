// for loops
for(let i = 0; i<10;i++){
    console.log('Hello world')
}

// while loops
// let i = 0;
// while(i<10){
//     console.log('Hello students');
//     i++;
// }


// for(var j=0;j<=50;j++){
//     if(j%2 ==0){
//         continue;
//     }
//     console.log(j)
// }

for(var i=0;i<10;i++){
    for(var j=0;j<10;j++){
        if(j%2 !=0){
            continue;
        }
        console.log(j);
    }
}

for(var i =0; i<10;i++){
    if(i==5){
        break;
    }
    console.log(`Hey ${i} Let's date!`);
}
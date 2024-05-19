const studen1tMarksSub1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if((Math.floor(Math.random()*70)+30)>50){
            resolve('You passed')
        }else{
            reject('you failed')
        }
    }, 300);
})
const studen1tMarksSub2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if((Math.floor(Math.random()*70)+30)>50){
            resolve('You passed')
        }else{
            reject('you failed')
        }
    }, 200);
})
const studen1tMarksSub3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if((Math.floor(Math.random()*70)+30)>50){
            resolve('You passed')
        }else{
            reject('you failed')
        }
    }, 100);
})

Promise.all([studen1tMarksSub1,studen1tMarksSub2,studen1tMarksSub3]).then((res)=>{
    console.log(res)
    console.log('Congratulations')
}).catch((err)=>{
    console.log(err);
    console.log("Better luck next time");
})


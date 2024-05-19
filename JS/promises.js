/* const simranPromises = new Promise((resolve,reject)=>{
    let parentDecesion = true;
    if(parentDecesion){
        resolve('Yayy, ab shadi ki taiyari karo',parentDecesion);
    }else{
        reject('papa ne IAS dhondh liye hai',parentDecesion);
    }
});

simranPromises.then((msg,pd)=>{
    console.log('Simran message was: ',msg);
    console.log('Parents Decesion is :',pd);
    console.log("let's Book for wedding venue");
    
}).catch((msg,pd)=>{
    console.log('simran message:',msg)
    console.log('Parents Decesion is :',pd);
    console.log('Tindar kaha ho yaar')
}).finally(()=>{
    console.log('Chalo Life me clearity mili');
})
*/




/*
const fr1Promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if((Math.random())>0.5){
            resolve("Friend1: Let's Go for Goa Trip" )
        }else{
            reject("Friend1: I've fever, so i can't go")
        }
    })
    }, 3000);
    

const fr2Promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if((Math.random())>0.5){
            resolve("Friend2: Let's Go for Goa Trip" )
        }else{
            reject("Friend2: My cat is ill,so i can't go")
        }
    })
    }, 2000);
    
const fr3Promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if((Math.random())>0.5){
            resolve("Friend3: Let's Go for Goa Trip" )
        }else{
            reject("Friend3: I've to attend live session of PW Skills, So I'm Sorry")
        }
    })
    }, 1000);
   

Promise.all([fr1Promise,fr2Promise,fr3Promise]).then((msg)=>{
    console.log(msg)
    console.log('Yah we are going to Goa')
}).catch((msg)=>{
    console.log(msg);
    console.log("Ok, Don't worry we will plan next month")
})

*/



const gf1Promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if((Math.random())>0.5){
            resolve("GF1: Hey, I'll come for dinner tonight")
        }else{
            reject("GF1: Sorry, My parents will not allow to go outside at night")
        }
    }, 3000);
});

const gf2Promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if((Math.random())>0.5){
            resolve("GF2: Hey, I'll come for dinner tonight")
        }else{
            reject("GF2: Sorry, I've fever,So I can't able come")
        }
    }, 2000);
});
const gf3Promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if((Math.random())>0.5){
            resolve("GF3: Hey, I'll come for dinner tonight")
        }else{
            reject("GF3: Sorry, I've some important work to do")
        }
    }, 1000);
});

Promise.any([gf1Promise,gf2Promise,gf3Promise]).then((result)=>{
    console.log(result)
    console.log("My velentise day has shorted");
}).catch((err)=>{
    console.log(err);
    console.log("How to be part of bajrangdal");

})
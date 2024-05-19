function greet(name,callback){
    const greeting = "Hello " + name;
    callback(greeting);
}
function displayGreeting(message){
    console.log(message);
}
greet('Rohit',displayGreeting);

// callBack Hell
/*
getuser(function(user){
    getPost(user.id,function(post){
        displayUserInfoAndPost(user,post,function(){
            console.log('User info and post successfully displayed')
        })

    })
}) */
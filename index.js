function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction( ){
    return function namedFn(){
        console.log('A named function')
    } 
}

function returnsAnAnonymousFunction (){
    return () => console.log ("An anonymous function")
}
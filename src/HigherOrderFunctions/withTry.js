
/**
 * withTry
 * @param func Any function
 * * Higher order function to apply try catch logic on passed function.
 */
module.exports = function withTry(func){
    return function(...args) {
        try{  
            return func.call(this, ...args);
        }
        catch(error){
            console.log(`ERROR: ${error}`)
        }
    }
}
function sum(a,b){
    return a+b
}

module.exports.sum= sum

function minus(a,b){
    return a-b
}

module.exports.minus= minus


function multiply(a,b){
    return a*b
}

module.exports.multiply= multiply


function divide(a,b){

    if(b==0){
        return "Infinity";
    }
    return a/b
}

module.exports.divide= divide
function wakeDog( dogName, breed ){
    let result = `Wake ${ dogName } the ${ breed }`
    console.log( result )
    return result
}

function leashDog( dogName, breed ){
    let result = `Leash ${ dogName } the ${ breed }`
    console.log( result )
    return result
}

function walkToPark( dogName, breed ){
    let result = `Walk to the park with ${ dogName } the ${ breed }`
    console.log( result )
    return result
}

function throwFrisbee( dogName, breed ){
    let result = `Throw the frisbee for ${ dogName } the ${ breed }`
    console.log( result )
    return result
}

function walkHome( dogName, breed ){
    let result = `Walk home with ${ dogName } the ${ breed }`
    console.log( result )
    return result
}

function unleashDog( dogName, breed ){
    let result = `Unleash ${ dogName } the ${ breed }`
    console.log( result )
    return result
}

const routine = [ wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog ]

function exerciseDog( dogName, dogBreed ){
    let arr = []
    routine.forEach((r) => arr.push(r(dogName, dogBreed)))
    return arr
}
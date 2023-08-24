const pi = 3.1415962;

function doublePi () {
    return pi * 2
}

function triplePi () {
    return pi * 3
}

export default pi; //This is a default export
//non default exports can also be speceified in curlypraces
export {doublePi, triplePi}; //Export non default functions
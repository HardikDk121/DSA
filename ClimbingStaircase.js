function ClimbingStaircase(input)
{
    const numberofways = [1,2]
    for (let index = 2; index <= input; index++) {
        numberofways[index] = numberofways[ index - 1 ] + numberofways[ index - 2 ]
    }
    return numberofways[ input -1 ]   
}
console.log( ClimbingStaircase(4) );
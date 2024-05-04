function LinearSearchRecursive(array , searchvalue , index = 0 ) 
{
    if (index == array.length ) 
    {
        return -1;
    }
    if (array[index] == searchvalue)
    {
        return index;
    }    
    return LinearSearchRecursive(array ,searchvalue , index + 1 );
}

console.log( LinearSearchRecursive( [4,8,5,7,6,22,14,53] , 99  ) );
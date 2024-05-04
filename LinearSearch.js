function LinearSearch(array ,searchvalue) 
{
    for (let index = 0; index < array.length; index++)
    {    
        if (array[index] == searchvalue)
        {
                return index    
        }
    }
    return -1
}
console.log( LinearSearch([4,8,5,7,6,22,14,53] , 99 ) );
function BinarySearch(array , searchvalue) 
{
    let middleindex = Math.floor(array.length / 2);
    
    if (array.length === 0) {
        return -1; // Value not found
    }

    if(array[middleindex] == searchvalue)
        {
            return middleindex;
        }
    else if (array[middleindex] > searchvalue)
        {
         return BinarySearch(array.slice(0,middleindex) , searchvalue);
        }
    else 
        {
         return BinarySearch(array.slice(middleindex) , searchvalue);
        }
}
console.log( BinarySearch( [1,2,3,4,5,6,7,8,9,10] , 5 ) );

function BinarySearchRecursive(array , searchvalue ,start = 0 , end = array.length - 1 ) 
{   
    if ( start >  end ) 
    {
        return -1; // Value not found
    }
    
    let middleindex = Math.floor((start + end ) / 2 ) ;
    
    if(array[middleindex] == searchvalue)
    {
        return middleindex;
    }
    else if (array[middleindex] > searchvalue)
    {
        return BinarySearchRecursive(array, searchvalue ,start = 0, end = middleindex -1 )
    }
    else 
    {
        return BinarySearchRecursive(array, searchvalue ,start = middleindex + 1)
    }
}
console.log( BinarySearchRecursive( [1,2,3,4,5,6,7,8,9,10] , 11 ) );

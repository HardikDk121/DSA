function BinarySearch(array , searchvalue ) 
{
    let start = 0 , end = array.length - 1;    
    while (start <= end) 
    {
        let middleindex = Math.floor( (start + end) / 2 ) ;

        if( array[middleindex] == searchvalue )
            {
                return middleindex;
            }
        else if (array[middleindex] > searchvalue)
        {
            end = middleindex -1 ;
        }
        else 
        {
            start = middleindex + 1; 
        }

    }
    return -1;
}
console.log(BinarySearch( [1,2,3,5,6,22,52] , 81 ));
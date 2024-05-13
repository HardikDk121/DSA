function MergeSort(array) 
{
    if (array.length == 1) return array;

   //spliting//
   const middle = Math.floor( array.length / 2);
   const leftarray = array.slice( 0 , middle );
   const rightarray = array.slice( middle );    
    return Merge( MergeSort(leftarray) , MergeSort(rightarray) )
    
}

function Merge(leftarray , rightarray) 
{
    const sortedarray = [];
    while (leftarray.length && rightarray.length) 
    {
        if (leftarray[0] <= rightarray[0]) 
        {
            sortedarray.push(leftarray.shift())    
        } else {
            sortedarray.push(rightarray.shift())    
        }    
    }
    return[...sortedarray , ...leftarray , ...rightarray]
    
}
console.log( MergeSort( [42] ) );
console.log( MergeSort( [4 , 51 , 15 , 98 , 67 ] ) );
console.log( MergeSort( [1, 2, 3, 4, 5] ) ); // Already sorted array
console.log( MergeSort( [5, 4, 3, 2, 1] ) ); // Reverse sorted array
console.log( MergeSort( [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5] ) ); // Array with duplicate elements
console.log( MergeSort( [-4, 5, -10, 8, 3, 7] ) ); // Array with negative numbers

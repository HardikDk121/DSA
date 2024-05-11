function InsertionSort(array) 
{
    
    for (let index = 0; index < array.length  ; index++) 
    {
        let numberToSort = array[index];
        let SortedIndex = index - 1 ;
        while ( SortedIndex > -1  && array[SortedIndex] > numberToSort ) 
        {
            array[SortedIndex + 1 ]  = array[SortedIndex];
            SortedIndex = SortedIndex - 1 
        }
        array[SortedIndex + 1 ] = numberToSort;


        
    }
    return array;
}
console.log( InsertionSort( [4 , 51 , 15 , 98 , 67 ] ) );
console.log( InsertionSort( [1, 2, 3, 4, 5] ) ); // Already sorted array
console.log( InsertionSort( [5, 4, 3, 2, 1] ) ); // Reverse sorted array
console.log( InsertionSort( [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5] ) ); // Array with duplicate elements
console.log( InsertionSort( [-4, 5, -10, 8, 3, 7] ) ); // Array with negative numbers
console.log( InsertionSort( [42] ) );
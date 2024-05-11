function SelectionSort(array) 
{
    for ( let index = 0; index < array.length; index++ ){
        
        let minimum = index;
        
        for ( let nestedindex = index + 1; nestedindex < array.length; nestedindex++ ){        
            if ( array[minimum] > array[nestedindex] ) {
                minimum = nestedindex;      
            }
        }
        let temp = array[index];
        array[index] = array[minimum];
        array[minimum] = temp;
    }
    return array;    
}
console.log( SelectionSort( [4 , 51 , 15 , 98 , 67 ] ) );
console.log( SelectionSort( [1, 2, 3, 4, 5] ) ); // Already sorted array
console.log( SelectionSort( [5, 4, 3, 2, 1] ) ); // Reverse sorted array
console.log( SelectionSort( [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5] ) ); // Array with duplicate elements
console.log( SelectionSort( [-4, 5, -10, 8, 3, 7] ) ); // Array with negative numbers
console.log( SelectionSort( [42] ) ); 
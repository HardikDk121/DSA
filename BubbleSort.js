function BubbleSort(array) 
{

       let swap, unsortedpart = array.length;
        do{
            swap=false;
            for (let index = 0; index < unsortedpart - 1 ; index++) {
                if ( array[index] > array[ index + 1 ] ) 
                {
                    /* swapping section both of methods work use whatever of your prefernace   */
                    /* swaping with temp variable */ 
                    temp = array[index];
                    array[index] = array[ index + 1 ];
                    array[index + 1] = temp;
                    swap = true;
                    /* swapping without temp variable   
                    array[index] = array[index] + array[index + 1];
                    array[index + 1 ] = array[index] - array[index + 1];
                    array[index] = array[index] - array[index + 1];
                    swap = true;
                    */
                }
                
            }
        unsortedpart -= 1;     
    } while ( swap );
    return array;
}
console.log(BubbleSort([1, 2, 3, 4, 5])); // Already sorted array
console.log(BubbleSort([5, 4, 3, 2, 1])); // Reverse sorted array
console.log(BubbleSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])); // Array with duplicate elements
console.log(BubbleSort([-4, 5, -10, 8, 3, 7])); // Array with negative numbers
console.log(BubbleSort([42])); // Array with only one element

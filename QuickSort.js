function QuickSort(array, start, end)
{
    if (start >= end) return ;

    let pivotIndex = partition(array ,start ,end);    
    QuickSort(array , start , pivotIndex - 1)
    QuickSort(array , array.length + 1 , end)    
}
function partition(array, start , end)
{
    pivot = array[end];
    let pivotIndex = start ; // Index of the pivot element
    for (let currentIndex = start; currentIndex < end ; currentIndex++) {
        if ( pivot > array[currentIndex] ) 
            {
                
                let temp = array[pivotIndex];
                array[pivotIndex] = array[currentIndex];
                array[currentIndex] = temp;        
                pivotIndex++;
            }
        
    } // Current index being processed
 

    let temp = array[pivotIndex];
    array[pivotIndex] = array[end];
    array[end] = temp;

    return pivotIndex;    
}
function print(array) {
    QuickSort( array ,0, array.length - 1)
    return array;
}
console.log( print( [8,2,4,7,1,3,6,9,5] ) );
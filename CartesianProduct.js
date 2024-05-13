function CartesianProduct(array1,array2)
{
    const cartesianproduct = [] ;
    array1.forEach(array1element => 
    {
        array2.forEach(array2element => {
            cartesianproduct.push( [array1element , array2element] )
        });
    });
    return cartesianproduct;
}
console.log( CartesianProduct( [1,2,3] , ['A','B','C'] ) );
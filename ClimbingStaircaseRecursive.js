function ClimbingStaircaseRecursive(input ,memo = {}) 
{
    if( input <= 0 )return 0;
    
    if(input == 1)return 1;        
    
    if(input == 2)return 2;

       if (!memo[input]) {
        memo[input] = ClimbingStaircaseRecursive(input - 1, memo) + ClimbingStaircaseRecursive(input - 2, memo);
    }

    return memo[input];   
}
console.log( ClimbingStaircaseRecursive(4) );
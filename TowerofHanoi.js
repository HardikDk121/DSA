var stepno = 0;
function TowerofHonai( n ,start=1 , end=3 ) 
{
    
    if(n==1) 
        {
            stepno++;
            console.log( ' Step ', stepno ,' Move disk ' , n , ' from rod ' , start , ' to rod ', end );
        }
        else
        {
        const other = 6 - (start + end);
        TowerofHonai( n-1 , start , other )
        
        stepno++;
        
        console.log( ' Step ', stepno , ' Move disk ' , n , ' from rod ',start , ' to rod ', end);
        TowerofHonai( n-1, other , end)
    }
}
TowerofHonai(4)
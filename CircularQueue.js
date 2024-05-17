class CircularQueue
{
    constructor()
    {
        console.log("|XXX Constructor Called XXX| \n");
        this.list ={}
        this.front = 0;
        this.rear = 0;       
        this.Queuesize = 0;
    }
    create( array , size )
    {
        console.log("|XXX Create function XXX| \n");
        if (array.length > size)
            {
                console.log("Array length can not be greater then queue size \n");
                return;
            }
        let index;
        for ( index = 0; index < array.length; index++) 
            {
                this.list[index] = array[index];
            }
        this.front = 0;
        
        this.Queuesize = size;
        
        this.rear = index;
        console.log(this.list ,"\n");
    }
    enqueue(value)
    {
        console.log("|XXX Enqueue function XXX| \n ");
        if ((this.rear + 1) % this.Queuesize == this.front)
            {
                console.log("Queue Overflow");
                return;
            }
        this.list[this.rear] = value;
            
        this.rear++;
        console.log( this.list ,"\n ");
    }
    dequeue(){
        this.rear
    }
}
class Queue
{
    constructor()
    {
        console.log("|XXX Constructor Called XXX| \n");
        this.list = {};
        this.front = 0;
        this.rear = 0;  
    }
    create( array )
    {

        console.log("|XXX Create function XXX| \n");
        
        this.list = {};
        
        for (let i = 0; i < array.length; i++) {
            this.list[i] = array[i];
        }
        
        this.front = 0;
        
        this.rear = array.length;

        console.log(this.list, "\n");
    } 
    enqueue( value )
    {

        console.log("|XXX Enqueue function XXX| \n ");
        
        this.list[ this.rear ] = value;
        
        this.rear++;

        console.log(this.list , "\n" );
        
    }
    dequeue()
    {
        console.log("|XXX Dequeue function XXX| ");

        if (this.front === this.rear) {
            console.log("Queue is empty\n");
            return;
        }
        const dequeueitem = this.list[this.front];
        
        delete this.list[this.front];
        
        this.front++;
                
        console.log(dequeueitem , "\n");
        
    }
    peek()
    {
        console.log("|XXX Peek function XXX| \n ");
        console.log(this.list[ this.front ] , "\n")
    }
    isEmpty()
    {
        console.log("|XXX Is empty function XXX| \n");
        console.log(  this.rear - this.front > -1 ? "list is not empty \n " : "list is empty \n" );
    }
    print()
    {
        console.log("|XXX Print function XXX| \n");
        console.log(this.list ,"\n");
        
    }

}
const queue = new Queue();

// Test create (although technically not needed for a queue)
queue.create([1, 2, 3]);  // Output: [1, 2, 3] (assuming console.log prints the list)

// Test enqueue
queue.enqueue(4);  // Output: [1, 2, 3, 4]
queue.enqueue(5);  // Output: [1, 2, 3, 4, 5]

// Test isEmpty
queue.isEmpty();  // Output: "list is not empty"

// Test dequeue
queue.dequeue();  // Output: [2, 3, 4, 5]

// Test peek (technically doesn't remove anything from the queue)
queue.peek();  // Output: 2 (assuming the first element is printed)

// Test print
queue.print();  // Output: 2, 3, 4, 5 (each element on a new line)

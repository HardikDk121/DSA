class Queue
{
    constructor()
    {
        this.array = [];    
    }
    create( array )
    {
        this.array = array;
        console.log(this.array);
    } 
    enqueue( value )
    {
        this.array.push(value);
        console.log(this.array);
        
    }
    dequeue()
    {
        this.array.shift();
        console.log(this.array);
        
    }
    peek()
    {
        console.log(this.array[0])
    }
    isEmpty()
    {
        console.log(  this.array.length > 0 ? "Array is not empty" : "Array is empty" );
    }
    print()
    {
        for (let index = 0; index < this.array.length; index++) {
            console.log( this.array[index] )
        }
    }

}
const queue = new Queue();

// Test create (although technically not needed for a queue)
queue.create([1, 2, 3]);  // Output: [1, 2, 3] (assuming console.log prints the array)

// Test enqueue
queue.enqueue(4);  // Output: [1, 2, 3, 4]
queue.enqueue(5);  // Output: [1, 2, 3, 4, 5]

// Test isEmpty
queue.isEmpty();  // Output: "Array is not empty"

// Test dequeue
queue.dequeue();  // Output: [2, 3, 4, 5]

// Test peek (technically doesn't remove anything from the queue)
queue.peek();  // Output: 2 (assuming the first element is printed)

// Test print
queue.print();  // Output: 2, 3, 4, 5 (each element on a new line)

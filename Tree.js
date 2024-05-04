class node 
{
    constructor(value)
    {
        this.value=value;
        this.left=null;
        this.right=null;

        
    }
}
class tree 
{
    constructor() 
    {
        this.root=null;   
    }
    insert(value)
    {
        let nodeobj = new node(value);
        if(!this.root)
        {
            this.root = nodeobj;
            return this.root;
        }
        current = this.head;
        while(current)
        {
        
        }
    }
}
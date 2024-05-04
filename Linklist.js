class node
{

    constructor(value)
    {
        this.value=value;
        this.next=null;
        
    }
}
class LinkList
{
    constructor() 
    {
        this.head = null;
        this.tail = null;
    }
    insert(value) 
      {
        let nodeobj = new node(value);
        if (!this.head)
        {
            this.head = nodeobj;
            this.tail = nodeobj;
            return this.head
        }
        let current = this.head;
        while (current.next) 
        {
            current=current.next 
        }
        current.next=nodeobj;
        this.tail=current;
        return this.tail
    }
    traverse()
    {
        let current=this.head;
        while (current) 
        {
            console.log(current.value,current.next)
            current=current.next
        }
    }
    delete()
    {
        let current=this.head;
        
        if (this.head==this.tail)
        {
            this.head = null;
            this.tail = null;
            return;    
        }
        while(current != this.tail)
        {
            current = current.next
        }
        current.next=null;
        this.tail=current;
    }
}
var LinkListobj = new LinkList();
LinkListobj.insert(5);
LinkListobj.insert(10);
LinkListobj.insert(15);
LinkListobj.delete();
LinkListobj.traverse();







## Implementing a stack: 

 * Array Implementation
 * Linked List Implementation

known properties of a stack:
current value, previous value, size

Adding a value to the top of the stack:
function addToStack(value){
    check stack size;
    if (stack.length === 0) {
        stack.first = value;
        stack.last = value;

    }
}

class stack{
 Constructor(){
    this.first
 }

 }

 class Node

see slides 5

-The function should accept a value
-Create a new node with that value
-If there are no nodes in the stack, set the first and last property to be the newly created node
-If there is at least one node, create a variable that stores the current first property on the stack
-Reset the first property to be the newly created node
-Set the next property on the node to be the previously created variable
-Increment the size of the stack by 1

   /*   
   
   /*   class Stack {
      constructor(first, last, size) {
        this.first = null;
        this.last = null;
        this.size = 0;
      }
    }
  
    class Node {
      constructor(value, next) {
        this.value = value;
        this.next = null;
      }
    } */
   
    value = new Node(value);
       if (stack.size === 0) {
         stack.first = value;
         stack.last = value;
       }
       else {
         let currentFirst = stack[-1];
         stack[-1] = value;
         stack.size++;
       } */
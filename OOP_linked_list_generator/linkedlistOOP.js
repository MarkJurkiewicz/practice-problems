/*
 head = o1;
 tail = o2;
 o1 = {
 item: '?',
 prev: null,
 next: o2
 }
 o2 = {
 item: 'second',
 prev: o1
 next: null
 }


 */



var linked_list_constructor = function(){
    this.head = null;
    this.tail = null;
    this.current = null;
    this.create_linked_list=function(this_is_the_payload){
        //make a new linked list item object, which has properties of item, prev, next
        // add the payload to item
        var object1 = {
            item:this_is_the_payload,
            prev:null,
            next:null
        };
        object1.prev=this.tail;
        object1.next=null;
        if(this.tail!==null){
            this.tail.next=object1;
        }
        else{
            this.head = object1;
            this.current = this.head;
        }
        this.tail=object1;
    };
    this.get_item = function(){
        //get the current link_listitem's item property

        //move to the next item
        //return the current link_listitem's item property

    };
};




var linked_list= new linked_list_constructor();

linked_list.create_linked_list('first');
console.log(linked_list.tail);
linked_list.create_linked_list('second');
console.log(linked_list.head);
console.log(linked_list.tail);
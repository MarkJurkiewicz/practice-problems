//constructor for link item
//var makeLinkItem = function (payload) {
//    this.item = payload;
//    this.prev = current;
//    this.next = null;
//    current = this;
//    current.prev.next = current;
//};

    function linkedList(){  //created a List Object constructor
    linkedList.makeItem = function(){  //method created to make an item or 'node'
        return{
                data:null,
                next:null
              };
        this.head = null;
        this.tail = null;


        this.add = function (data) {
            if(this.head === null){
                this.head=List.makeItem();
                this.tail=this.head;
            }else{
                this.tail.next=linkedList.makeItem();
                this.tail=this.tail.next;
            };
            this.tail.data=data;
        };

        this.delete = function(data) {
            var current = this.head;
            var previous = this.head;
            while (current !== null) {
                if (data === current.data) {
                    if (current === this.head){
                        this.head = current.next;
                        return;
                    }
                    if (current == this.tail) this.tail = previous;
                    previous.next = current.next;
                    return;
                }
                previous = current;
                current = current.next;
            }
        };

        this.insertAsFirst = function(d) {
            var temp = linkedList.makeItem();
            temp.next = this.head;
            this.head = temp;
            temp.data = d;
        };

        this.insertAfter = function(t, d) {
            var current = this.start;
            while (current !== null) {
                var temp = linkedList.makeItem();
                temp.data = d;
                temp.next = current.next;
                if (current == this.tail) this.tail = temp;
                current.next = temp;
                return;
            }
        }
    };
};
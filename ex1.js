console.log("print 'this' to my global ", this);

//end global

const user = {
    name: 'User 1',
    action: ['hello', 'goodbye'],
    printAction: function (){
        console.log(this)
    },    
    printAction2: () => {console.log(this)},
};
user.printAction()
user.printAction2()

//end object & arrow




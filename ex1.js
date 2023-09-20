console.log("print 'this' to my global ", this);

//end global

const user = {
    name: 'User 1',
    action: ['hello', 'goodbye'],
    printAction: function () {
        console.log(this.action[0], this.name)
    },    
    //printAction2: () => {console.log(this.action[1], this.name)}

    //scope issue?
};
user.printAction()
user.printAction2()

//end object & arrow




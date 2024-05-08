let person = {
    name: "A",
    age: 10,
    greet: function(){
        console.log(`hello, my name is ${this.name}, ${this.age}`);
    }
};
greet();
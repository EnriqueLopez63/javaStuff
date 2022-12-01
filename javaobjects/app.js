class User{
    constructor(email , name , last , city , state){
        this.email = email;
        this.name = name;
        this.last = last;
        this.city = city;
        this.state = state;
    }
}

var userOne = new User('fake@email.com' , 'erik' ,'lopez' , 'dallas' , 'texas')
var userTwo = new User ('email@email.com' , 'is' , 'smith' , 'houston' , 'texas')
var userThree = new User ('email@fake.com' , 'a' , 'jacobs' , 'san antonio' , 'texas')
var userFour = new User ('another@fake.com' , 'band' , 'vega' , 'forth worth' , 'texas')
var userFive = new User ('email@fake.com' , 'wagon' , 'espinoza' ,'El paso' , 'texas' )

console.log(userOne);
console.log(userTwo);
console.log(userThree);
console.log(userFour);
console.log(userFive);
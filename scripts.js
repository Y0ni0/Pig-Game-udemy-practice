
/*calculateAge(1998);

function calculateAge(year){
   console.log(2021-year); 
}

var retirement = function(year){
    console.log(65-(2021-year));
}
retirement(1998); 

var a = 'Hello';
first();
function first(){
    var b ='hi';
    second();
    function second(){
        var c = 'dummy';
        third();
        function third(){
            var d = 'john';
            console.log(a+b+c+d);
        }
    }
}

calculateAge(1998);
function calculateAge(year){
    console.log(2021-year);
    console.log(this);
}
*/
var john = {
    name: 'john',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2021-this.yearOfBirth);
        /*function innerFunction(){
            console.log(this);
        }
        innerFunction();*/
    }
}
john.calculateAge();
var mike = {
    name: 'mike',
    yearOfBirth: 1984,
};
mike.calculateAge = john.calculateAge; //object borrowing 
mike.calculateAge();
[![Coverage Status](https://coveralls.io/repos/github/vanshika-99/IS219-OOPPrinciples/badge.svg?branch=master)](https://coveralls.io/github/vanshika-99/IS219-OOPPrinciples?branch=master)
[![Build Status](https://travis-ci.org/vanshika-99/IS219-OOPPrinciples.svg?branch=master)](https://travis-ci.org/vanshika-99/IS219-OOPPrinciples)

**OOP Design Patterns**

**Creational**

*Builder:* This design pattern allows you to construct complex objects one step at a time.
This means that you should create a base class and extend it by adding subclasses for any other necessary parameters.
This can become complicated quickly, so one solution to that is to create separate objects, known as builders.

    class Calculation {
        constructor(a, b, op) {
            this.a = a;
            this.b = b;
            this.op = op;
        }
    
        //Factory function: single responsibility
        static Create(a, b, op){
            return new Calculation(a, b, op);
        }
    
        GetResults() {
            return this.op(this.a,this.b);
        }
    }
    module.exports = Calculation;
The Calculation.js is the main class in this example. 
If we wanted to access the different operations our calculator has, we would have to go to the separate functions that the op variable points to.
For example, if we wanted to return the sum operator, the op would call upon the addition function.


**Structural**

*Decorator:* Allows you to add new behaviors to objects. These objects are located in special wrapper objects.
The new behaviors that you add are only extensions, and therefore can be removed whenever they are not needed. 

    class Calculator {
        static Calculations = [];
    
        static Sum(a, b) {
            let calculation = Calculation.Create(a, b, Sum);
            return calculation;
        }
    
        static Difference(a, b) {
            let calculation = Calculation.Create(a, b, Difference);
            return calculation;
        }
This Calculator class has other subclasses wrapped within it. There are multiple subclasses used here, one for each operation.
For example, the static Sum class is used only to find the sum of two numbers. 

**Behavioral**

*Strategy:* Allows you to create different classes for specific objects.
The main class that you create should just reference the other classes or strategies in the code.

    class City {
        constructor(data = null) {
            if(data) {
                this.id = data.id;
                this.city = data.city;
                this.city_ascii = data.city_ascii;
                this.lat = data.lat;
            }
        }
    }  
This class references several strategies, such as this.city_ascii.  


**5 SOLID Javascript Principles:** 

**Single Responsibility**: The functions you implement in your code should only do one thing. 
You should create a new function for each separate task you want your code to do. 

    static Create(a, b, op) {
        return new Calculation(a, b, op);
    }
This function only creates new calculations and returns the results of the operations that it used. 

**Open-Closed**: Your code should be open to extension, but closed for modification. 
You should not need to modify your pre-existing code if you wanted to extend it.

    let icedDrinks = ['latte', 'tea'];
    let newDrinks = {
      makeIceCream(drink) {
        if (icedDrinks.indexOf(drink) > -1) {
          console.log('new drink was added');
        } 
        else {
          console.log('no drinks were added');
        }
      },
        addDrink(drink) {
              icedDrinks.push(drink);
         },
        };
    export default newDrinks;
    }
Here, instead of changing a pre-existing array of iced drinks, this function serves as an extension which allows new drinks to be added to the array.

**Liskov Substitution**: It states that functions that use pointers to base classes must be able to use objects of derived classes without even knowing it. 

    public class Pets {}
    
    public class SeaPets extends Pets {
        public void underwater() {}
    } 
    
    public class Fish extends SeaPets {}
        
    public class Dogs extends Pets {}
In this example, I used pets. Fish belong to the SeaPets{} class because they live underwater. 
Dogs on the other hand, do not live underwater, so they belong to the Pets{} class.  

**Interface Segregation**: Users should not be forced to include or depend on unnecessary interfaces. 
If they are not going to use those interfaces in the first place, they should have the option to leave them out.

    interface Pets {
        function underwater() {}
        function walking() {}
        function eating() {}
    } 
    
    class SeaPets implements Pets {
        swimming() {
            // fish swim 
        }
        eating() { 
            // fist eat
        }
    }
    
    class Dogs implements Pets { 
        swimming() { 
            // dogs can swim
        } 
        eating() {
            // dogs eat 
        } 
        walking() { 
            // dogs walk 
        }
    }
Because fish can't walk, the walking() function cannot be used in the SeaPets class. 
Therefore, this is a bad example of interface segregation.
        
        

**Dependency Inversion**: This principle states that you should give control to the caller of the function from the function itself.
This also means that high level modules shouldn't depend on low-level modules, and instead should just depend on abstractions. 

    class Calculation {
        constructor(a, b, op) {
            this.a = a;
            this.b = b;
            this.op = op;
        }
    
        static Create(a, b, op){
            return new Calculation(a, b, op);
        }
    
        GetResults() {
            return this.op(this.a,this.b);
        }
    }
In this example, Calculation is being called upon whenever a new operation needs to be created.
The static function then returns the new calculation result. 



**4 Principles of OOP:** 

**Encapsulation**: In order to have encapsulation, every object has to keep its state private. 
If you want to access those private objects, you should call methods.
Refer to the **encapsulation.js** example.

**Abstraction**: Identifies only important and required details of an object. 
You should only reveal a high-level mechanism for using that object. 

    function Difference (a, b) {
        return a - b;
        }
    module.exports = Difference;
        
    GetResults() {
        return this.op(this.a, this.b); 
    }
Referring to the calculator example, this specific file is only used when it is referenced in our main calculator program.
The subtraction method itself is hidden by itself.  
 
 
**Inheritance**: This is achieved when there is a parent child relationship. 
It involves forming a hierarchy where the child class can implement its own unique methods by simply reusing the parent's methods. 

    class Camera {
        constructor(brand) {
        this.cameraname = brand;
     } 
     printName() {
        return 'I have a ' + this.cameraname + ' camera';
     }
    }
    
    class Model extends Camera {
        constructor(brand, mod) { 
        super(brand);
        this.model = mod;
        }
        show() { 
            return this.printName() + ' , it is a ' + this.model;
        } 
    }
The Camera class is a parent class, while the Model class is a child of the Camera class.
This means that the Model class will inherit methods from its parent class. 
    

**Polymorphism**: Allows a child class to behave exactly like the parent.
It's important to point out that the child class' methods remain the way they were. 

    public class Pets {}
        
        public class SeaPets extends Pets {
            public void underwater() {}
        } 
        
        public class Fish extends SeaPets {}
            
        public class Dogs extends Pets {}
Pets is a parent class while SeaPets is a child class of Pets. It behaves the same way,
but is specifically for pets who can swim underwater. 
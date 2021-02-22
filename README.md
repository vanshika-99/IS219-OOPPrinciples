5 SOLID Javascript Principles: 

*Single Responsibility*: The functions you implement in your code should only do one thing. 
You should create a new function for each separate task you want your code to do. 

    static Create(a, b, op) {
        return new Calculation(a, b, op);
    }
This function only creates new calculations and returns them. 

*Open-Closed*: Your code should be open to extension, but closed for modification. 
You should not need to modify your pre-existing code if you wanted to extend it.

    addDrink(drink) {
        drinkName.push(drink);
    }
Instead of changing a pre-existing array of drinks, this function serves as an extension which allows new drinks to be added to the array.

*Liskov Substitution*: It states that functions that use pointers to base classes must be able to use objects of derived classes without even knowing it. 

    

*Interface Segregation*: Users should not be forced to include or depend on unnecessary interfaces. 
If they are not going to use those interfaces in the first place, they should have the option to leave them out.

*Dependency Inversion*: This principle states that you should give control to the caller of the function from the function itself.
This also means that high level modules shouldn't depend on low-level modules, and instead should just depend on abstractions. 


4 Principles of OOP: 

*Encapsulation*: In order to have encapsulation, every object has to keep its state private. 
If you want to access those private objects, you should call methods.

*Abstraction*: Identifies only important and required details of an object. 
You should only reveal a high-level mechanism for using that object.  

*Inheritance*: This is achieved when there is a parent child relationship. 
It involves forming a hierarchy where the child class can implement its own unique methods by simply reusing the parent's methods. 

*Polymorphism*: Allows a child class to behave exactly like the parent.
It's important to point out that the child class' methods remain the way they were. 
# 1. Ans : 

### These are all about DOM in Javascript. 

* By 'getElementById()' we can found a single element by its id attribute . 

* By 'getElementsByClassName()' we can found multiple elements by their class name . 

* By 'querySelector()' we can found the first element matches any CSS selector . 

* By 'querySelectorAll()' we can found  all elements matches any CSS selector . 



# 2. Ans : 

### There are several way to create and insert a new element into the DOM .. 

I most commonly use ..

const crateDiv=document.createElement('div') ; 

const parent = document.getElementById('parent-element');
parent.appendChild(createDiv);






# 3. Ans : 

### Event Bubbling is a mechanism in the DOM .

When an event occurs on an element:

* The event first runs the handlers on the target element itself .

* Then it moves up to its parent element and runs any matching handlers.

* Then to the grandparent, and so on, until reaching the 'html' element.


 Finally, it reaches the document object .


 




# 4. Ans : 

### Event Delegation :

Event Delegation is a technique in JavaScript where user attach a single event listener to a parent element to handle events for all current and future child elements, leveraging the concept of event bubbling.

### It Is Useful For : 

* Handles Dynamic Elements .
* Cleaner Code , etc .

  


# 5.Ans : 

### preventDefault() : 

* Prevents the browser's default behavior for an element

### stopPropagation() :

* Stops the event from bubbling up the DOM tree

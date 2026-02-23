1. What is the difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll?
getElementById: Selects a single element by its unique id attribute. Returns the element directly or null. It is the fastest method because IDs are unique.
getElementsByClassName: Selects all elements with a specific class name. Returns a live HTMLCollection that updates automatically when the DOM changes.
querySelector: Selects the first element that matches a CSS selector. Returns a single element or null. More flexible but slower.
querySelectorAll: Selects all elements that match a CSS selector. Returns a static NodeList that does not update when the DOM changes.
2. How do you create and insert a new element into the DOM?
Use document.createElement() to create the element. Set its properties (textContent, className, attributes). Then insert it into the DOM using methods like appendChild(), append(), prepend(), or insertBefore() on a parent element.
3. What is Event Bubbling? And how does it work?
Event bubbling is the propagation of an event from the target element upward through its ancestor elements. When an event occurs on a child element, it first triggers on that child, then on its parent, then on its parent's parent, continuing until it reaches the document root.
4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a technique where you attach a single event listener to a parent element to handle events for multiple child elements, including those added later. It is useful because it reduces memory usage, automatically works for dynamically added elements, and simplifies code.
5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault(): Cancels the browser's default action (e.g., following a link, submitting a form) but does not stop event propagation.
stopPropagation(): Stops the event from propagating further (bubbling or capturing) but does not cancel default actions.
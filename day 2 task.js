// Write a blog on the difference between Document and Window objects?
 
//To understand the difference between Document and Window objects we must know about basic concepts of BOM(Browser objects  model) and DOM(document object model).

// BROWSER_OBJECT_MODEL:
    /* The Browser Object Model contains objects that represent the current browser window or tab.
     The topmost object in the BOM is the window object representing the window or tab or an iframe sometimes. 
     Window object has properties like browser history, location and the device’s screen etc.*/

//Document Object Model
    /*When a web page is loaded, the browser creates a Document Object Model of the page. 
    The document object represents the whole html document as a tree of Objects(HTML, HEAD, BODY, and other HTML tags).
    It is the root element that represents the html document. */
   
//DOCUMENT OBJECT:
  
//     The document object represents the HTML document loaded in the browser.

//     It provides methods and properties to interact with the content of the document, such as selecting elements, modifying the HTML structure, or handling events.
    
//     Common operations include using getElementById(), querySelector(), and addEventListener().


    // syntax for document object:
      
          document.propertyname;

// The document is part of BOM (browser object model) and dom (Document object model).

// Properties of document objects such as title, body, cookies, etc can also be accessed by a window like this window. document.title



// WINDOW OBJECT:

// The window object represents the browser window or a frame.

// It is the global object in the browser environment.

// It contains properties and methods that are global, meaning they can be accessed without explicitly referencing the window object.

// For example, you can use window.alert(), window.confirm(), or window.location to interact with the browser window.

// syntax for window object:

     window.propertyname;

 // The window is part of BOM (browser object model), not DOM (Document object model).

 // Properties of window objects such as location, history, etc can also be accessed by a document like this document. window.location
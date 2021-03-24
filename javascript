JavaScript Quickstart Tutorial
This tutorial will take a quick look at the most important JavaScript data types.

JavaScript variables can be:

Numbers
Strings
Objects
Arrays
Functions
JavaScript Variables
JavaScript variables are containers for storing data values.

--------------------------------------------------------------------
In this example, x, y, and z, are variables:

Example
var x = 5;
var y = 6;
var z = x + y;

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Variables</h2>

<p>In this example, x, y, and z are variables.</p>

<p id="demo"></p>

<script>
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo").innerHTML =
"The value of z is: " + z;
</script>

</body>
</html>

-------------------------------------------------------------------

JavaScript Numbers
JavaScript has only one type of number. Numbers can be written with or without decimals.

Example
var x = 3.14;    // A number with decimals
var y = 3;       // A number without decimals
------------------------------------------------------------------------
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Numbers</h2>

<p>Numbers can be written with or without decimals:</p>

<p id="demo"></p>

<script>
var x = 3.14;
var y = 3;
document.getElementById("demo").innerHTML = x + "<br>" + y;
</script>

</body>
</html>

------------------------------------------------------------------------
All numbers are stored as double precision floating point numbers.

The maximum number of decimals is 17, but floating point is not always 100% accurate:

Example
var x = 0.2 + 0.1;  
-------------------------------------------------------------------
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Numbers</h2>

<p>Floating point arithmetic is not always 100% accurate.</p>

<p id="demo"></p>

<script>
var x = 0.2 + 0.1;
document.getElementById("demo").innerHTML = "0.2 + 0.1 = " + x;
</script>

</body>
</html>
-----------------------------------------------------------------------

The length of a string is found in the built in property length:

Example
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
------------------------------------------------------------------------
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript String Properties</h2>

<p>The length property returns the length of a string:</p>

<p id="demo"></p>

<script>
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo").innerHTML = txt.length;
</script>

</body>
</html>
------------------------------------------------------------------------

JavaScript Strings
Strings store text. Strings are written inside quotes. You can use single or double quotes:

Example
var carname = "Volvo XC60";  // Double quotes
var carname = 'Volvo XC60';  // Single quotes
----------------------------------------------------------------------------
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Strings</h2>

<p>Strings are written inside quotes. You can use single or double quotes:</p>

<p id="demo"></p>

<script>

var carName1 = "Volvo XC60"; // Double quotes
var carName2 = 'Volvo XC60'; // Single quotes

document.getElementById("demo").innerHTML =
carName1 + " " + carName2; 

</script>

</body>
</html>
-----------------------------------------------------------------------------
The length of a string is found in the built in property length:

Example
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
-----------------------------------------------------------------------------
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript String Properties</h2>

<p>The length property returns the length of a string:</p>

<p id="demo"></p>

<script>
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo").innerHTML = txt.length;
</script>

</body>
</html>
-----------------------------------------------------------------------------

JavaScript Objects
You have already learned that JavaScript variables are containers for data values.

This code assigns a simple value (Fiat) to a variable named car:

var car = "Fiat";
------------------------------------------------------------------------------
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Variables</h2>

<p id="demo"></p>

<script>
// Create and display a variable:
var car = "Fiat";
document.getElementById("demo").innerHTML = car;
</script>

</body>
</html>
------------------------------------------------------------------------------
Objects are variables too. But objects can contain many values.

This code assigns many values (Fiat, 500, white) to a variable named car:

var car = {type:"Fiat", model:"500", color:"white"};
-------------------------------------------------------------------------------
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Objects</h2>

<p id="demo"></p>

<script>
// Create an object:
var car = {type:"Fiat", model:"500", color:"white"};

// Display some data from the object:
document.getElementById("demo").innerHTML = "The car type is " + car.type;
</script>

</body>
</html>
-------------------------------------------------------------------------------

JavaScript Arrays
JavaScript arrays are used to store multiple values in a single variable.

Example
var cars = ["Saab", "Volvo", "BMW"];
------------------------------------------------------------------------------
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>

<p id="demo"></p>

<script>
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
</script>

</body>
</html>
------------------------------------------------------------------------------

JavaScript Functions
A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

Example
function myFunction(p1, p2) {
    return p1 * p2;              // The function returns the product of p1 and p2
}
-------------------------------------------------------------------------------------
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Functions</h2>

<p>This example calls a function which performs a calculation, and returns the result:</p>

<p id="demo"></p>

<script>
function myFunction(p1, p2) {
    return p1 * p2;
}
document.getElementById("demo").innerHTML = myFunction(4, 3);
</script>

</body>
</html>
-------------------------------------------------------------------------------------

What can JavaScript Do?
This section contains some examples of what JavaScript can do:

JavaScript Can Change HTML Content
JavaScript Can Change HTML Attribute Values
JavaScript Can Change HTML Styles (CSS)
JavaScript Can Hide HTML Elements
JavaScript Can Show HTML Elements


JavaScript Can Change HTML Content
One of many JavaScript HTML methods is getElementById().

This example uses the method to "find" an HTML element (with id="demo") and changes the element content (innerHTML) to "Hello JavaScript":

Example
document.getElementById("demo").innerHTML = "Hello JavaScript";
-----------------------------------------------------------------------------
<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

</body>
</html>
-----------------------------------------------------------------------------

JavaScript Can Change HTML Attribute Values
In this example JavaScript changes the value of the src (source) attribute of an <img> tag:

The Light Bulb
Turn on the light  Turn off the light
---------------------------------------------------------------------------------------
<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p>JavaScript can change HTML attribute values.</p>

<p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

<button onclick="document.getElementById('myImage').src='img_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="img_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='img_bulboff.gif'">Turn off the light</button>

</body>
</html>
---------------------------------------------------------------------------------------

JavaScript Can Change HTML Styles (CSS)
Changing the style of an HTML element, is a variant of changing an HTML attribute:

Example
document.getElementById("demo").style.fontSize = "35px";
or
document.getElementById('demo').style.fontSize = '35px';
--------------------------------------------------------------------------------------------
<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change the style of an HTML element.</p>

<button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">Click Me!</button>


</body>
</html>
--------------------------------------------------------------------------------------------

JavaScript Can Hide HTML Elements
Hiding HTML elements can be done by changing the display style:

Example
document.getElementById("demo").style.display = "none";
or
document.getElementById('demo').style.display = 'none';
----------------------------------------------------------------------------------------------
<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can hide HTML elements.</p>

<button type="button" onclick="document.getElementById('demo').style.display='none'">Click Me!</button>


</body>
</html> 
----------------------------------------------------------------------------------------------

JavaScript Can Show HTML Elements
Showing hidden HTML elements can also be done by changing the display style:

Example
document.getElementById("demo").style.display = "block";
or
document.getElementById('demo').style.display = 'block';
-----------------------------------------------------------------------------------------------
<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p>JavaScript can show hidden HTML elements.</p>

<p id="demo" style="display:none">Hello JavaScript!</p>

<button type="button" onclick="document.getElementById('demo').style.display='block'">Click Me!</button>

</body>
</html> 
-----------------------------------------------------------------------------------------------


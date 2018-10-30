# JSON
JSON, or JavaScript Object Notation, is a minimal, readable format for structuring data. It is used primarily to transmit data between a server and web application

It is a way to store information in an organized, easy-to-access manner. In a nutshell, it gives us a human-readable collection of data that we can access in a really logical manner.

## Keys and Values
The two primary parts that make up JSON are keys and values. Together they make a key/value pair.

- Key: A key is always a string enclosed in quotation marks.
- Value: A value can be a string, number, boolean expression, array, or object.
- Key/Value Pair: A key value pair follows a specific syntax, with the key followed by a colon followed by the value. Key/value pairs are comma separated.

`"name" : "lexi"`

## Basic syntax
At first glance, JSON data is very similar to objects, except that the keys must be written with quotes.

```js
var person = {
	"name" : "Scott",
	"hometown" : "Missoula, MT",
	"age" : "45"
};
```

## Storing JSON Data in Arrays
A more complicated way of writing JSON involves storing multiple items in one variable. For instance, to include information about multiple items such as hurricanes.

```js
var hurricanes = [{
    "name" : "Katrina",
    "date" : "2005",
    "category" : "5"
},
{
    "name" : "Matthew",
    "date" : "2016",
    "category" : "5"
}];
```

To access this information, we can use dot and bracket notation to get the information. We could use loops to run through all the items.

`console.log(hurricanes[0].name); // Output: Katrina`

## Nesting JSON Data
Another way to store multiple items in our variable would be to nest objects.

```js
var hurricanes = {
    "katrina" : {
        "name" : "Hurricane Katrina",
        "date" : "2005",
        "category" : "5"
    },
    "matthew" : {
        "name" : "Hurricane Matthew",
        "date" : "2016",
        "category" : "5"
    }
}
```

Accessing information in nested objects is a little easier to understand but we would still use dot notation.

```js
console.log(hurricanes.katrina.name); // Output: Hurricane Katrina
console.log(hurricanes.matthew.date); // Output: 2006
```

## Lets practice
1. Create a JSON variable to store information about your movies (at least 3). Include title, year, and director.
2. Using a `for loop`, loop through the variable and `console.log` the information.

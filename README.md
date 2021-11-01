# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @joshuahaughton/lotide`

**Require it:**

`const _ = require('@joshuahaughton/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function(head)`: returns the first element of an array

* `function(tail)`: returns the last element of an array

* `function(middle)`: returns the middle element/ elements of an array. If If the array is 2 or less elements, will return an empty array

* `function(assertArraysEqual)`: Assets if two arrays are equal

* `function(assertEqual)`: Asserts if 2 functions are equal

* `function(assertObjectsEqual)`: Returns true if 2 objects are equal

* `function(countLetters)`: returns an object containing each letter in a given string and how many times that letter appears

* `function(countOnly)`: Goes through an obkect, and returns how many times a given key appears

* `function(eqArray)`: returns true if two arrays are equal

* `function(eqObjects)`: returns true if two objects are equal

* `function(findKey)`: Runs a callback function on a given object, if any value returns true , returns the key;

* `function(findKeyByValue)`: finds the first key in an object that matches with the given value

* `function(flatten)`: flattens nested arrays into one array

* `function(letterPositions)`: Returns an object containing the index position of each letter in a given string

* `function(map)`: runs a callback function on each eement in an array, and returns an array containing all of the elemnts from the original array that returned true from the callback function

* `function(takeUntil)`: returns all of the items in an array up until the given item

* `function(without)`: when given an array, returns array without a given element`
# fakeMap

source https://gist.github.com/epoch/00f3ab75137a957612c71fd5e46f0162

You are a villain trying to trap an adventuring archaeologist. 

Write a function `makeFakeMap` that expects 2 arguments and returns an array of arrays representing a fake map.  

The map should be filled with `A` except for the **first element of the first array**, which should be an uppercase `X`

```javascript
makeFakeMap(5, 5);
[
  ["X","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"]
]


makeFakeMap(2, 2);
[
  ["X","A"],
  ["A","A"],
]


makeFakeMap(3, 2);
[
  ["X","A"],
  ["A","A"],
  ["A","A"]
}

```

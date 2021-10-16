# Sets

Similar ao array, mais não possui index e aceita apenas **valores únicos**, podem ser números, string, objetos, array, ...

```js
const letters = new Set(["a","b","c"]);
```

# Maps

Um mapa contém pares de valores-chave onde as chaves podem ser de qualquer tipo de dados. Um mapa lembra a ordem de inserção original das chaves.

```js
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
```

## Método foreach

```js
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value <br>;
})
```

# Try and Catch

```js
try { 
    if(x == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
    if(x > 10)   throw "too high";
}
catch(err) {
    message.innerHTML = "Input is " + err;
}
finally {
  Block of code to be executed regardless of the try / catch result
}
```

# Arrow Function

Sem Arrow Function
```js
hello = function() {
    caracteres = "Hello World!" 
    return caracteres
}
```

Com Arrow Function
```js
hello = () => {
    caracteres = "Hello World!" 
    return caracteres
}
```

Par uma linha pode se omitir {}
```js
hello = (val, num) => num + "Hello " + val;
```

Par um parametro
```js
hello = val => "Hello " + val;
```
# Para seguir estudando


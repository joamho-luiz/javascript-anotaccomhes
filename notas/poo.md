# Classe

```js
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  method_1 () { ... }
  method_2 () { ... }
  method_3 () { ... }
}
```
Sempre definir um `constructor`

# Objeto

## Criação

```js
const car = {type:"Fiat", model:"500", color:"white"};
```

Tambem é possível declarar e depois definir atributos.
```js
const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
```

Objeto passam referência não valor
```js
const x = person;
```
Qualquer alteração em `x` afetará `person`

## Repetições Uteis

```js
const person = {
  fname:" John",
  lname:" Doe",
  age: 25
};

for (let x in person) {
  txt += person[x];
}

consol.log('John Doe 25')

// RESULTADO: John Doe 25
```

## Alteração do Objeto

* Adição:
```js
person.nationality = "English";
```

* Remoção:
```js
delete person.age;    // Deleta atributo e valor.
```

## Acessar Atributo

```js
objectName["propertyName"]
// ou
objectName.propertyName
```

## Metodo

```js
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {       // aqui
    return this.firstName + " " + this.lastName;
  }
};
```

Observe o uso de `this`

## Acessando Métodos

```js
objectName.methodName()
```

## Herança

```js
class Model extends Car { ... }
```

## Getters and Setters

```js
class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {      // Sem parâmetro  
    return this._carname;
  }
  set carname(x) {      // Com parâmetro  
    this._carname = x;
  }
}

let myCar = new Car("Ford");
let meuCarro = myCar.cnam;    // Embora seja um método não precisa ()
```

Método Estático

```js
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

let myCar = new Car("Ford");

// You can calll 'hello()' on the Car Class:
document.getElementById("demo").innerHTML = Car.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.
```
## Finding HTML Elements  

Method	| Description
-- | --
document.getElementById(id)	| Find an element by element id
document.getElementsByTagName(name)	| Find elements by tag name
document.getElementsByClassName(name)	| Find elements by class name
<br>

## Changing HTML Elements  

Property | Description
-- | --
element.innerHTML =  new html content	| Change the inner HTML of an element
element.attribute = new value	| Change the attribute value of an HTML element
element.style.property = new style	| Change the style of an HTML element
Method	Description
element.setAttribute(attribute, value)	| Change the attribute value of an HTML element
<br>

## Adding and Deleting Elements  

Method	| Description
-- | --
document.createElement(element)	| Create an HTML element
document.removeChild(element)	| Remove an HTML element
document.appendChild(element)	| Add an HTML element
document.replaceChild(new, old)	| Replace an HTML element
document.write(text)	| Write into the HTML output stream

```js
addEventListener(event, function, useCapture);
```

useCapture - boolean, dentro para fora ou de fora para dentro

```js
myTitle = document.getElementById("demo").firstChild.nodeValue;

myTitle = document.getElementById("demo").childNodes[0].nodeValue;
```

Criar um elemento

```js
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);

// Adicionar antes de p1:
// const child = document.getElementById("p1");
// element.insertBefore(para, child)
```

Remover um elemento:

```js
const elmnt = document.getElementById("p1"); elmnt.remove();
```

Repor:

```js
const parent = document.getElementById("div1");
const child = document.getElementById("p1");
parent.replaceChild(para, child);
```


Coleções

```js
const myCollection = document.getElementsByTagName("p");

// myCollection é similar a um array com elementos 'p'
myCollection[1]
```


Rotinas
***
<br/>
 
# Funções

Chamada de funções:   

```javascript
chamar ( parametro )
```

Criação de funções:   

```javascript
function soma (n1 = 0, n2 = 0) {
    return n1 + n2
}
```

_`= 0` considerar um parâmetro se ele eventualmente não seja passado._<br/><br/>

* Par evitar erro, caso chame a função e não passe um parametro.

```js
function myFunction(x, y) {
  if (y === undefined) {
    y = 0;
  }
}
```

* Recursividade - Chamar a própria função dentro dela mesmo.
```javascript
function fatorial (n) {
    return n * fatorial(n-1)
}
```


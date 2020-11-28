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

* Recursividade - Chamar a própria função dentro dela mesmo.
```javascript
function fatorial (n) {
    return n * fatorial(n-1)
}
```
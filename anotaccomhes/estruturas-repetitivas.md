Estrutura de repetições
***

Repetições, laços ou interações.
 
<br/>
 
# Teste lógico no ínicio

```javascript
var c = 1

while (c <= 6) {
    console.log(`Passo ${c}`)
    c++
}
```

<br/>
 
# Teste lógico no final

```javascript
var c = 1

do {
    console.log(`Passo ${c}`)
    c++
} while (c <= 6)
```

<br/>
 
# Inicialização + Teste lógico no início + Incrementação no início

```javascript
for (var c = 1; c <= 6; c++) {
    console.log(`Passo ${c}`)
}
```

<br/>
 
# Repetição útil para Vetores

_"Para cada POSIÇÃO (pos, varialvel) dentro do vetor VET ..."_
```javascript
for(let pos in vet) {
    console.log(`Posição ${pos}  → →  Valor ${vet[pos]}`)
}
```

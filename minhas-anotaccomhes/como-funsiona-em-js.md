# Aula 05

### Comentários

// Comentário

/*
    Comentário
*/

### Variáveis

`var variavelzinha = null`          A variável de nome 'variavelzinha' recebe (é atribuido a ela) um valor nulo. Também é possível usar 'let' no lugar de 'var'.

**Regras para identificadores:**

* Podem começar com: (Letras, $ ou _).
* É possível usar acento e símbolo. 
* Ao invés de espaço usamos (_).
* Cuidado com as palavras reservadas.
* Maiúscula e minúscula fazem diferença.

**Tipos de dados:**

* Number        
   - Infinity
   - NaN
* String
* Boolean
* Null
* Undefined
* Object
   - Array
* Function

Para ver o tipo da variável no notejs: `typeof nome-da-variável`.

# Aula 06

_Contatenação_  +    `'alguma coisa + variável'`
_Templete String_ ${}   ``alguma coisa ${variável}`` (Atenção, aqui se usa apenas o acento grave).

# Aula 07

_Operadores_

(Em uma linha de código primeiro são calculados os operadores aritiméticos para depois o relacionais e por fim os Lógicos, respeitando precedências em cada grupo).

**Operadores Aritiméticos**

`+ - * / %` (Resto da divisão inteira) `**` (Potenciação)

Auto atribuição      `n += 2`
Incremento        `n ++`
Decremento        `n --`

**Relacionais**

`> < >= <= == !=`    

`5 = '5'` -->  `true`      (Ambos tem o mesmo valor, embora não tenham o mesmo tipo).

`5 === '5'`  -->  `false`     (Operador de Identidade ou Operador de Igualdade Restrita, esse verifica se ambos tem o mesmo valor e mesmo tipo). (`!===` desigual restrioto).

(Não há order de precedência).

**Lógicos**

`!` (Negação) `$$` (Conjunção) `||` (Disjunção) (Esta é a ordem de execução (precedência)).

**Ternário**

`(TESTE) ? (VERDADEIRO) : (FALSO)`

# Aula 08

```
   if (CONDIÇÃO) {

      VERDADE

   } else {
      
      FALSO
      
   }
```

# Aula 12

```
   switch (EXPRESSÃO) {
      case VALOR 1:
         AÇÃO
         break;
      default:
         break;
   }
```

# Aula 13

**Teste lógico no ínicio**

```
var c = 1
while (c <= 6) {
   console.log(`Passo ${c}`)
   c++
}
```

**Teste lógico no final**

```
var c = 1
do {
   console.log(`Passo ${c}`)
   c++
} while (c <= 6)
```

# Aula 14

**Incialização + Teste lógico no início + Incrementação no início**

```
for (var c = 1; c <= 6; c++) {
   console.log(`Passo ${c}`)
}
```
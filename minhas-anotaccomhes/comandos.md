# Aula 04

`window.alert('Olá, mundo!')`           Para mostrar um mensagem.

`window.confirm('Está tudo rodando certo?')`      Para confirmar uma ação.

`window.prompt('Deixei sua mensagem aqui.')`      Para capturar texto. Retorna uma string.

Obs.: 'window.' pode ser omitido.

# Aula 06

`document.write('Oi')`      Escreve no própio corpo. Dá para colocar `.writeln` no lugar de `.write` para que o cursor passe para próxima linha após imprimir a frase.

**Conversão de Tipo**

_String  -->  Number_

`Number.parseInt(n)`        Forçar para que variável passe a ser do tipo int (inteiro).
`Number.parseFloat(n)`      Esse 'Number' pode ser omitido.
`Number(n)`                 O JavaScript adaptara a inter ou float.

_String  -->  Number_

`String(v)`
`v.toString()`

**Formatação de String e mais**
Dado: `var s = 'JavaScript'`, temos:

`s.length`      Quantos caracteres a string tem.
`s.toUpperCase()`       Tudo para MAÚSCULA.
`s.toLowerCase()`       Tudo para MÍNUSCULA.

Dado: `var n = 1512.6` , temos:

`n.toFixed(2)`      Formatar o número de casas decimais para dois => 1 512.60.
`n.toFixed(2).replace('.',',')`        Aqui vamos além e formatamos o símbolo de separação => 1 512,6.

`n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})`       Para mostra na notação de moeda brasileira.

# Aula 09

Seleção de elementos: `window.document` + ...   (o window. pode ser omitido)

**Por Marca:**      `.getElementByTagName('tag')[t]` (n faz refencia a qual elemento do tipo nome).

**Por ID:**         `.getElementById('id')`

**Por Nome**        `.getElementsByName('nome')[n]`

**Por Classe**      `.getElementsByClasseName('')[]`

**Por Seletor**     `querySelector('tag#id')`       (Ou tag.class)

# Aula 10

`a.addEventListener('click', clicar)`       (clicar é uma função na qual eu vou colocar uma ação).
`a.addEventListener('mouseenter', entrar)`
`a.addEventListener('mouseout', sair)`
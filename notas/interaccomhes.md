Interações
***
<br/>
 
# Saídas

Para mostrar um mensagem.  
* `window.alert('Olá, mundo!')` 

Escreve no próprio corpo. Dá para colocar `.writeln` para próxima linha.   
* `document.write('Oi')`

Escrever no terminal node.js
* `console.log('Mensagem')`

<br/>_Obs.: `window.` pode ser omitido._

<br/>
 
# Entradas

Para confirmar uma ação.
* `window.confirm('Está tudo rodando certo?')`  

Para capturar texto. Retorna uma string. 
* `window.prompt('Deixei sua mensagem aqui.')`      

<br/>
 
# Conexões

<br/>
 
# Outras Interações

Para disparar alguma função para certas interações.
* `a.addEventListener('click', clicar)`  
* `a.addEventListener('mouseenter', entrar)`
* `a.addEventListener('mouseout', sair)`

<br/>

# Manipulações e Criação

Seleção de elementos: `window.document` + . . .

* **Por Marca:**      `.getElementByTagName('tag')[x]`  &nbsp; &nbsp; &nbsp; ( x faz referência a qual elemento do tipo nome ).
* **Por ID:**         `.getElementById('id')`
* **Por Nome**        `.getElementsByName('nome')[x]`
* **Por Classe**      `.getElementsByClasseName('')[]`
* **Por Seletor**     `querySelector('tag#id')`   &nbsp; &nbsp; &nbsp;  ( para classe: `'tag.class'` )

<br/>Criação de um elemento em JavaScript.
* `var foto = document.createElement('img')`        

<br/>_Obs.: `window.` pode ser omitido._
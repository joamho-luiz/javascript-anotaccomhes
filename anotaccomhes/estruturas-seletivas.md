Estruturas Seletivas
***
<br/>
 
# Condições Simples		

`if ( condição ) { verdadeiro } `
 
<br/>
 
# Condições Composta		

`if ( condição ) { verdadeiro } else { falso }`  

Duas condições 

```javascript
   if ( condição ) {
      verdadeiro
   } else if (condição ) {
      1º falso >> 2º verdadeiro
   }
```
 
<br/>
 
# Condições Encadeada		

```javascript
if ( condição ) { 
    if ( condição ) { 
        verdadeiro 
    } 
}
```
 
<br/>
 
# Condição ternária		

`( condição ) ? verdadeiro : falso`
 
<br/>
 
# Condições Aninhadas		

```javascript
   switch ( expressão ) {
        case valor 1: 
            ação 1
            break;
 
        case valor 2: 
            ação 2
            break;

        default:
            break;
   }
```
var agora = new Date()
var semana = agora.getDay()

console.log('Hoje é:')

switch (semana) {
    case 0:
        console.log('DOM')
        break;
    case 1:
        console.log('SEG')
        break;
    case 2:
        console.log('TER')
        break;
     case 3:
        console.log('QUA')
        break;
    case 4:
        console.log('QUI')
        break;
    case 5:
        console.log('SEX')
        break;
    case 6:
        console.log('SAB')
        break;    
    default:
        break;
}
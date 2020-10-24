var agora = new Date()
var hora = agora.getHours()

console.log(`Agora já é ${hora}`)

if (hora >= 18) {
    console.log(`Boa NOITE!`)
} else if (hora >= 12) {
    console.log(`Boa TARDE!`)
} else if (hora >= 6) {
    console.log(`Bom DIA!`)
} else {
    console.log(`Boa MADRUGADA!`)
}
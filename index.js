

let nombre="Marianne"
let apellido = "Garrido"
let estudiante=`Estudiante ${nombre} ${apellido}`
let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()
let estudianteLen = estudiante.length
let primeraLetra = nombre[0]
let últimaLetra = apellido[apellido.length-1] 
let sinEspacios = estudiante.replace(/ /g,"")
let estudianteIncluyeNombre = estudiante.includes(nombre)

console.log(estudianteIncluyeNombre)
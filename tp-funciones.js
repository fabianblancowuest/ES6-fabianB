
const saludar = (nombre) => 'Hola ' + nombre;
console.log(saludar('Alejandro'));



const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 15));



const crearAlumno = (nombre, apellido, edad, materias) => ({

    nombre: nombre,
    apellido: apellido,
    edad: edad,
    materias: materias
})
console.log(crearAlumno('Leo', 'Messi', '32', ['TLPA', 'Base de Datos', 'Inglés']));


const devolverFecha = (...arguments) => 'Hoy es '+arguments[0]+'-'+arguments[1]+'-'+arguments[2];
console.log (devolverFecha('13', '09', '2020'));
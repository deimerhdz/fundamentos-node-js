const empleados =[
    {
    id:1,
    nombre:'Fernando'
    },
    {
    id:2,
    nombre:'Linda'
   },
   {
    id:1,
    nombre:'Karen'
    }
]

const salarios =[
    {
    id:1,
    salario:1500
    },
    {
    id:2,
    salario:1000
   }
]
const id=1;
const getEmpleado=(id,callback)=>{
    const empleado = empleados.find( empleado => empleado.id === id)?.nombre;
    if(empleado){
        callback(null,empleado);
    }else{
        callback(`Empleado con ${id} no existe`);
    } 
}

const getSalario =(id,callback)=>{
    const salario = salarios.find(salario=>salario.id===id)?.salario
    if(salario){
        callback(null,salario)
    }else{
        callback(`No existe salario para el id ${id}`)
    }
} 
getEmpleado(id,(err,empleado)=>{
    if(err){
        console.log("Error");
        return console.log(err);
    }
    getSalario(id,(err,salario)=>{
        if(err){
            console.log("ERROR");
            return console.log(err);
        }
        console.log("El empleaod:",empleado,'Tiene un salario de:',salario);
    })
});


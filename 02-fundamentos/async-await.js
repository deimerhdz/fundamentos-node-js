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
    id:3,
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
const id=3;
const getEmpleado=(id)=>{
    return new Promise((resolve,reject)=>{
       const empleado = empleados.find( empleado => empleado.id === id)?.nombre;
        (empleado)
            ?resolve(empleado)
            :reject(`No existe empleado con id ${id}`)
   });
}
const getSalario=(id)=>{
    return new Promise((resolve,reject)=>{
       const salario = salarios.find( salario => salario.id === id)?.salario;
        (salario)
            ?resolve(salario)
            :reject(`No existe salario con id ${id}`)
   });
}
const getInfoUsuario = async()=>{
    try {
        const empleado = await getEmpleado(id);
         const salario = await getSalario(id);
    return 'El salario del empleado '+empleado+"es "+salario;
    } catch (error) {
       throw error;
    }
    
}

getInfoUsuario().then(console.log).catch(error=>console.log(error));


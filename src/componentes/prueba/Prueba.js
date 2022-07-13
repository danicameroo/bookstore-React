const ListaLibros = [
    {
        "id": 1,
        "hora": 2.24
    },
    {
        "id": 1,
        "hora": 2.24
    }
];

const Prueba = new Promise(function(resolve){
    setTimeout(() =>{
        resolve(ListaLibros)
    }, 3000)
})


Prueba.then((resolve) => {
    console.log(resolve)
})

export default Prueba;
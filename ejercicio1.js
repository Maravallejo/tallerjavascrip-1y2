
let menu = prompt ("Del siguiente menú elija el plato de preferencia \n 1 Pizza Hawaiana \n 2 Hambuerguesa \n 3 Colitas Cubanas \n 4 Perro Caliente ");


if (menu == null) {
    alert("Gracias por su visita")
} else {
    switch (menu){
        case '1':
            console.log ("Tu pedido fue Pizza Hawaiana y tiene un valor de $ 20.000");
            alert ("Tu pedido fue Pizza Hawaiana y tiene un valor de $ 20.000");
            break;
    
        case '2':
            console.log ("Tu pedido fue Hambuerguesa y tiene un valor de $ 18.000");
            alert ("Tu pedido fue Hambuerguesa y tiene un valor de $ 18.000");
            break;
        
        case '3':
            console.log ("Tu pedido fue Colitas Cubanas y tiene un valor de $ 16.000");
            alert ("Tu pedido fue Colitas Cubanas y tiene un valor de $ 16.000");
            break;
    
            case '4':
                console.log ("Tu pedido fue Perro Caliente y tiene un valor de $ 15.000");
                alert ("Tu pedido fue Perro Caliente y tiene un valor de $ 15.000");
                break;
        default:
            alert("El numero no esta dentro del menu");
    }
}
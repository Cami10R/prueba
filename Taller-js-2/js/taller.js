

let a=0;

let b=0;

let operacion = "suma";

function operaciones(a, b, operacion) {

    switch (operacion) {

        case "suma":
            console.log("Total Suma : " +a+ "+" +b+ " = " +(a+b));
            break;
        default:
            console.log("Total Suma : " +a+ "+" +b+ " = " +(a+b));
            break;

    }      
    
}

operaciones(a, b, operacion);


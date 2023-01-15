console.log("Esto es un mensaje de prueba")
var turnsGlobal = 0
var turn = 0
var playerOne = 0
var playerTwo = 0
document.getElementById("turnos").innerText = turnsGlobal;
console.log(turn)
document.getElementById("puntuacion1").innerText = "J1 : " + playerOne;
document.getElementById("puntuacion2").innerText = "J2 : " + playerTwo;
var ids = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
var spaces = {
    "1" : "free",
    "2" : "free",
    "3" : "free",
    "4" : "free",
    "5" : "free",
    "6" : "free",
    "7" : "free",
    "8" : "free",
    "9" : "free"
}
function seleccionar(idn, idl){
    if(turn == 0 && spaces[idn] == "free"){
        document.getElementById(idl).style.background = "red";
        document.getElementById("turnos").style.color = "yellow";
        spaces[idn] = "red"
        turn += 1
        turnsGlobal += 1;
    }else if(turn == 1 && spaces[idn] == "free"){
        document.getElementById(idl).style.background = "yellow";
        document.getElementById("turnos").style.color = "red";
        spaces[idn] = "yellow"
        turn -= 1
        turnsGlobal += 1;
    }else{
        alert("Espacio ocupado")
    }
    document.getElementById("turnos").innerText = turnsGlobal;
    //setTimeout(() => {comprobar()}, 1000)
    comprobar()
    switch(turnsGlobal){
        case 9:
            setTimeout(() => {
                alert("Juego terminado")
                setTimeout(() => {clearBoard()}, 750)
            }, 250)
            break;
        case 10:
            alert("Error en el codigo")
            break;
    }
}
function comprobar(){
    if(turnsGlobal > 4){
        //console.log("Iniciando proceso de comprobacion")
        setTimeout(() => {
            horizontal()
            vertical()
            diagonalOne()
            diagonalTwo()
        }, 100)
    }
}
function horizontal(){
    // sumar 1 al contador para que pase al siguiente espacio
    const startSpace = [1, 4, 7]
    for(space in startSpace){
        let state = startSpace[space]
        let sameColorRed = 0
        let sameColorYellow = 0
        for(i = 0; i < 3; i += 1){
            if(spaces[(state + i)] == 'red'){sameColorRed += 1}
            if(spaces[(state + i)] == 'yellow'){sameColorYellow += 1}
            if(sameColorRed == 3){alert('el J1 GANA'); playerOne += 1; clearBoard()}
            else if(sameColorYellow == 3){alert('el J2 GANA'); playerTwo += 1; clearBoard()}
        }
    }
    updateScore()
}

function diagonalTwo(){
    // sumar 2 al contador para que pase por la diagonal que comienza en 3
    const secondDiagonal = 3
    let sameColorRed = 0
    let sameColorYellow = 0
    for(i = 0; i < 10; i += 2){
        if(spaces[(secondDiagonal + i)] == 'red'){sameColorRed += 1}
        if(spaces[(secondDiagonal + i)] == 'yellow'){sameColorYellow += 1}
        if(sameColorRed == 3){alert('el J1 GANA'); playerOne += 1; clearBoard()}
        else if(sameColorYellow == 3){alert('el J2 GANA'); playerTwo += 1; clearBoard()}
    }
    updateScore()
}

function vertical(){
    // sumar 3 al contador para que pase a la siguiente linea
    const startSpace = [1, 2, 3]
    for(space in startSpace){
        let state = startSpace[space]
        let sameColorRed = 0
        let sameColorYellow = 0
        for(i = 0; i < 10; i += 3){
            //console.log(state + i, i)
            if(spaces[(state + i)] == 'red'){sameColorRed += 1}
            if(spaces[(state + i)] == 'yellow'){sameColorYellow += 1}
            if(sameColorRed == 3){alert('el J1 GANA'); playerOne += 1; clearBoard()}
            else if(sameColorYellow == 3){alert('el J2 GANA'); playerTwo += 1; clearBoard()}
        }
    }
    updateScore()
}

function diagonalOne(){
    // sumar 4 al contador para que pase por la diagonal que comienza en 1
    const firstDiagonal = 1
    let sameColorRed = 0
    let sameColorYellow = 0
    for(i = 0; i < 10; i += 4){
        if(spaces[(firstDiagonal + i)] == 'red'){sameColorRed += 1}
        if(spaces[(firstDiagonal + i)] == 'yellow'){sameColorYellow += 1}
        if(sameColorRed == 3){alert('el J1 GANA'); playerOne += 1; clearBoard()}
        else if(sameColorYellow == 3){alert('el J2 GANA'); playerTwo += 1; clearBoard()}
    }
    updateScore()
}

function updateScore(){
    document.getElementById("puntuacion1").innerText = "J1 : " + playerOne;
    document.getElementById("puntuacion2").innerText = "J2 : " + playerTwo;
}

function clearBoard(){
    for(i = 1; i < 10; i += 1){
        spaces[i] = "free"
        document.getElementById(ids[i - 1]).style.background = "cornsilk";
    }
    turnsGlobal = 0
    turn = 0
    document.getElementById("turnos").innerText = turnsGlobal;
    document.getElementById("turnos").style.color = "red";
}

function reset(){
    playerOne = 0
    playerTwo = 0
    clearBoard()
    updateScore()
}
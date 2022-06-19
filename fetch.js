
let drawTable = () => {
    fetch('http://localhost:3000/api/BarberShop', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            return response.json()
        })
        .then((information) => {
            renderTable(information)
        })
}

drawTable();


let renderTable = (information) => {
    const table = document.querySelector('.table')
    
    var bodytable = document.createElement('tbody');
    bodytable.className = "tbody"
    table.appendChild(bodytable);

    for (var i = 1; i < information.length; i++) {

        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');


        var text1 = document.createTextNode(information[i].idcita);
        var text2 = document.createTextNode(information[i].tipodecorte);
        var text3 = document.createTextNode(information[i].silladebarbero);
        var text4 = document.createTextNode(information[i].hora);
        var text5 = document.createTextNode(information[i].costo);

        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        td4.appendChild(text4);
        td5.appendChild(text5);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        bodytable.appendChild(tr);
    }

}



let createJson = () => {

    const idcita = document.querySelector('#txtidcita').value
    const tipodecorte = document.querySelector('#txttipocorte').value
    const sillabarbero = document.querySelector('#txtsillabarbero').value
    const hora = document.querySelector('#txthora').value
    const costo = document.querySelector('#txtvalor').value

    let newbarber = {
        "idcita": idcita,
        "tipodecorte": tipodecorte,
        "silladebarbero": sillabarbero,
        "hora": hora,
        "costo": costo

    }

    fetch('http://localhost:3000/api/BarberShop', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newbarber)
    })
        .then((response) => {
            return response.json()
        })
        .then((information) => {
            
            renderResult(true)
        })
        .catch((err) => {
           
            renderResult(false)
        })
}

let renderResult = (result) => {
    const textResult = document.querySelector('#resultado')
    if (result) {
        textResult.textContent = 'Guardado exitosamente'
    } else {
        textResult.textContent = 'Ocurrio un error al guardar'
    } 
    var myModalEl = document.getElementById('exampleModal');
    var modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide();
    const tableBody = document.querySelector('.tbody')
    tableBody.remove();
    drawTable();
}
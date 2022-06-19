let renderTable = (data) => {
    const table = document.querySelector('.table')
    //creamos el nodo body table
    var bodytable = document.createElement('tbody');
    bodytable.className = "tbody"
    table.appendChild(bodytable);

    for (var i = 1; i < data.length; i++) {

        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');


        var text1 = document.createTextNode(data[i].idcita);
        var text2 = document.createTextNode(data[i].tipodecorte);
        var text3 = document.createTextNode(data[i].sillabarbero);
        var text4 = document.createTextNode(data[i].hora);
        var text5 = document.createTextNode(data[i].valor);

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
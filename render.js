const renderTable = function() {
    //have to add data in
    var input = document.getElementById("item").value;
    var card = `<table class="table" id="myTable">
                <thead>
                    <tr>
                        <th><abbr>Number</abbr></th>
                        <th>Item</th>
                        <th><abbr>NOVA</abbr></th>
                        <th><abbr>Nutrition</abbr></th>
                        <th><abbr>Energy</abbr></th>
                        <th><abbr>Carbon Footprint</abbr></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>${input}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>`;
  return card;
}

const addMore = function () {
    var card = `<div class="addMore control">
                    <button class="addMore button is-link">Add</button>
                </div>`
    return card;
}

var count = 1;
const addRow = function(event) {
    //have to add data in
    event.preventDefault();
    event.stopImmediatePropagation();
    count++;
    var table = document.getElementById("myTable");
    var input = document.getElementById("item").value;
    var row = table.insertRow(count);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = `<th><strong>${count}</strong></th>`;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = `<td>${input}</td>`;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = `<td></td>`;
    var cell4 = row.insertCell(3);
    cell4.innerHTML = `<td></td>`;
    var cell5 = row.insertCell(4);
    cell5.innerHTML = `<td></td>`;
    var cell6 = row.insertCell(5);
    cell6.innerHTML = `<td></td>`;
    document.getElementById("item").value = "";
}

const createTable = function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    //var id = $(event.target).attr('button-id');
    $('.tables').append(renderTable());
    //$(event.target.closest(".tables")).replaceWith(renderTable);
    $(event.target.closest(".alter")).replaceWith(addMore);
    document.getElementById("item").value = "";
};

const calcTotal = function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    document.getElementById("item").value = "";
    //need to add all data in here
}


 const loadTableIntoDOM = function() {
    const $root = $('.section');
    $root.on('click', '.addButton', createTable);
    $root.on('click', '.addMore', addRow)
    // $root.on('click', '.doneButton', calcTotal);
};

$(function() {
    loadTableIntoDOM();
});
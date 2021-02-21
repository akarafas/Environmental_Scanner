product_list = []

const renderTable = function() {
    //have to add data in
    var input = document.getElementById("item").value;
    var foodie = foodData.find(food => food.product_name == input);
    product_list.push(foodie);
    // var input = document.getElementById("item").value;
    var card = `<table class="table" id="myTable">
                <thead>
                    <tr>
                        <th><abbr>Number</abbr></th>
                        <th>Item</th>
                        <th><abbr>NOVA</abbr></th>
                        <th><abbr>Nutrition</abbr></th>
                        <th><abbr>Energy (per 100g)</abbr></th>
                        <th><abbr>Carbon Footprint</abbr></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>${input}</td>
                        <td>${foodie.nova_group}</td>
                        <td>${foodie.nutriscore_score}</td>
                        <td>${foodie.energy_100g}</td>
                        <td>${foodie["carbon-footprint_100g"]}</td>
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
    var foodie = foodData.find(food => food.product_name == input);
    var row = table.insertRow(count);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = `<th><strong>${count}</strong></th>`;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = `<td>${input}</td>`;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = `<td>${foodie.nova_group}</td>`;
    var cell4 = row.insertCell(3);
    cell4.innerHTML = `<td>${foodie.nutriscore_score}</td>`;
    var cell5 = row.insertCell(4);
    cell5.innerHTML = `<td>${foodie.energy_100g}</td>`;
    var cell6 = row.insertCell(5);
    cell6.innerHTML = `<td>${foodie["carbon-footprint_100g"]}</td>`;
    document.getElementById("item").value = "";
}

const createTable = function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    //var id = $(event.target).attr('button-id');
    $('.tables').append(renderTable());
    //$(event.target.closest(".tables")).replaceWith(renderTable);
    //var product_name = event.target.getAttribute('hero-id');
    $(event.target.closest(".alter")).replaceWith(addMore);
    document.getElementById("item").value = "";
};

//have global product_list that is correct
const calcTotal = function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    document.getElementById("item").value = "";
    NOVA_groups = product_list.map(product => product.nova_group);
    nut_groups = product_list.map(product => product.nutriscore_score);
    carbons = product_list.map(product=>product["carbon-footprint_100g"]);
    energies = product_list.map(product=> product.energy_100g);
    const reduce_fun = function(acc, curr){
        acc = acc+parseInt(curr);
        return acc;
    }
    NOVA = NOVA_groups.reduce(reduce_fun,0)/NOVA_groups.length;
    nut = nut_groups.reduce(reduce_fun, 0)/nut_groups.length;
    energy = energies.reduce(reduce_fun, 0)/energies.length;
    carbon = carbons.reduce(reduce_fun, 0)/carbons.length;
    // needs to be sent to html
    $('.nova_total').append(renderTotal1());
    $('.nut_total').append(renderTotal2());
    $('.energy_total').append(renderTotal3());
    $('.carbon_total').append(renderTotal4());

}
const renderTotal1 = function() {
    //have to add data in
    // var input = document.getElementById("item").value;
    var card = `<div>${NOVA}</div>`;
  return card;
}
const renderTotal2 = function() {
    var card = `<div>${nut}</div>`;
  return card;
}
const renderTotal3 = function() {
    var card = `<div>${energy}</div>`;
  return card;
}
const renderTotal4 = function() {
    var card = `<div>${carbon}</div>`;
  return card;
}

 const loadTableIntoDOM = function(foods) {
    const $root = $('.section');
    $root.on('click', '.addButton', createTable);
    $root.on('click', '.addMore', addRow)
    $root.on('click', '.doneButton', calcTotal);
};

$(function() {
    loadTableIntoDOM();
});
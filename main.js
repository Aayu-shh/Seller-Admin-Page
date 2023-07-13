const myForm = document.getElementById('myForm');
const named = document.querySelector('#name');
const price = document.querySelector('#price');

const itemList = document.querySelector('#itemList');
const totalValue = document.querySelector('#value_header')

window.addEventListener('DOMContentLoaded', (e) => {

});

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let obj = {
        name: named.value,
        price: price.value
    }
    showOutput(obj);
})

function showOutput(obj) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');

    delBtn.appendChild(document.createTextNode('Delete Product'))
    li.appendChild(document.createTextNode(`${obj.name}: ${obj.price}`))
    li.append(delBtn);
    itemList.append(li);

    let objLocal = {
        name: obj.name,
        price: obj.price
    }

    delBtn.onclick = () => {

        itemList.removeChild(li);
        console.log(objLocal.name+' was deleted from server');
    }

    totalValue.appendChild(document.createTextNode(obj.price))
}
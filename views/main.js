const myForm = document.getElementById('myForm');
const named = document.querySelector('#name');
const price = document.querySelector('#price');

const itemList = document.querySelector('#itemList');
const totalValue = document.querySelector('#value_header')

let total = 0;
window.addEventListener('DOMContentLoaded', (e) => {
    axios.get("http://localhost:8080/products")
    .then((respObj)=>{
        (respObj.data).forEach(resp => showOutput(resp))
    })
    .then(()=>{
        totalValue.appendChild(document.createTextNode(total))
    })
    .catch(err => console.log(err));
    
});

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let obj = {
        name: named.value,
        price: price.value
    }
    axios.post('http://localhost:8080/add-product', obj)
        .then((resultObj) => showOutput(resultObj.data))
        .then(() => {
            totalValue.innerText = `Total Value of your items is: ${total}`;
        })
        .catch(err => console.log(err));

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
    total = total +(+(obj.price));
    console.log(total);
    delBtn.onclick = () => {
        axios.delete(`http://localhost:8080/delete-product/${obj.id}`)
        .then(()=>{
            itemList.removeChild(li);
            console.log(objLocal.name + ' was deleted from server');
            total=total-objLocal.price;
        })
        .then(()=>{
            totalValue.innerText = `Total Value of your items is: ${total}`;
        })
    }
    named.value = "";
    price.value = "";
}

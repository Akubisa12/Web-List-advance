let list = document.getElementById('list');
list.addEventListener('submit',tambahItem)
function tambahItem(e){
    e.preventDefault();
    let data = this.elements.tulisList.value;
    let list = document.querySelector('ol');
    let item = document.createElement('li');
    let tulisan = document.createElement('p');
    tulisan.textContent = data;
    this.elements.tulisList.value = "";
    item.append(tulisan);
    list.append(item);

    let hilangkanTombol = document.createElement('span');
    hilangkanTombol.classList.add('hapus');
    item.append(hilangkanTombol);
    hilangkanTombol.addEventListener('click',hapusItem);
    item.addEventListener('click', sudahItem);
}

function hapusItem(e){
    this.parentElement.remove();
}

function sudahItem(e){
    this.classList.toggle('sudah');
}
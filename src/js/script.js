const logoFile = document.getElementById("logoFile");
const imgPreview = document.getElementById("imgPreview");
const previewLogo = document.getElementById("previewLogo");
const defaultPreview = document.querySelector(".default-preview");
const table = document.getElementById("tab_logic");
const addRowBtn = document.getElementById("add_row");
const delRowBtn = document.getElementById("delete_row");

// Adding and removing table rows
addRowBtn.addEventListener("click", addRow);

let increment = 1;

function addRow() {
  increment += 1;
  console.log(increment);

  let tbody = document.getElementsByTagName("tbody")[0];
  let newRow = `
     <tr id='addr${increment}'>
       <td>${increment}</td>
     </tr>
    `;
  tbody.innerHTML = newRow;
  console.log(tbody.innerHTML);

  // let newRow = document.createElement('tr');
  // let tr = document.createTextNode(`${increment}`);
  // newRow.appendChild(tr);
  //   document.getElementsByTagName('tbody')[0].appendChild(newRow);
  //   newRow.setAttribute('id', `addr${increment}`);
  //   tr = document.getElementById(`addr${increment}`);
  //   console.log(tr);

  //   let newTd1 = document.createElement('td');
  //   let newTd2 = document.createElement('td');
  //   let newTd3 = document.createElement('td');
  //   let newTd4 = document.createElement('td');
  //   let newTd5 = document.createElement('td');
  //   let newTd6 = document.createElement('td');

  //   let td1 = document.createTextNode(`${increment}`);
  //   newTd1.appendChild(td1);
  //   let td2 = document.createTextNode(`${increment}`);
  //   newTd2.appendChild(td2);
  //   let td3 = document.createTextNode(`${increment}`);
  //   newTd3.appendChild(td3);
  //   let td4 = document.createTextNode(`${increment}`);
  //   newTd4.appendChild(td4);
  //   let td5 = document.createTextNode(`${increment}`);
  //   newTd5.appendChild(td5);
  //   let td6 = document.createTextNode(`${increment}`);
  //   newTd6.appendChild(td6);

  //   let documentFragment = document.createDocumentFragment();
  //   documentFragment.appendChild(newTd1);
  //   documentFragment.appendChild(newTd2);
  //   documentFragment.appendChild(newTd3);
  //   documentFragment.appendChild(newTd4);
  //   documentFragment.appendChild(newTd5);
  //   documentFragment.appendChild(newTd6);

  //   tr.appendChild(documentFragment);
}

// remove
delRowBtn.addEventListener("click", delRow);

function delRow() {
  if (increment >= 2) {
    console.log(increment);
    let tr = document.getElementById(`addr${increment}`);
    tr.parentNode.removeChild(tr);
    increment -= 1;
  }
}

// Calculations

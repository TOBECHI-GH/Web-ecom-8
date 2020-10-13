const logoFile = document.getElementById('logoFile');
const imgPreview = document.getElementById("imgPreview");
const previewLogo = document.getElementById("previewLogo");
const defaultPreview = document.querySelector(".default-preview");
const table = document.getElementById('tab_logic');
const addRowBtn = document.getElementById('add_row');
const delRowBtn = document.getElementById('delete_row');


// Adding and removing table rows
addRowBtn.addEventListener("click", addRow);

let increment = 1;

function addRow() {
  increment += 1;
  // console.log(increment);
  
  let tbody = document.getElementsByTagName('tbody')[0];
  let newRow = `
     <tr id='addr${increment}'>
      <td>${increment}</td>
      <td><input type="text" name='product'  placeholder='Item Description' class="form-control"/></td>
      <td><input type="number" name='rate' placeholder='0.00' class="form-control rate" step="0" min="0"/></td>
      <td><input type="number" name='qty' placeholder='1' class="form-control qty" step="0.00" min="0"/></td>
      <td><input type="number" name='total' placeholder='0.00' class="form-control total" readonly/></td>
      <td><input type="number" name='total' placeholder='' class="form-control total" readonly/></td>
     </tr>
    `
   tbody.insertAdjacentHTML('beforeend', newRow);
  // console.log(tbody);
};

// remove
delRowBtn.addEventListener("click", delRow);

function delRow() {
  
  if (increment >= 2) {
    // console.log(increment);
    let tr = document.getElementById(`addr${increment}`);
    tr.parentNode.removeChild(tr);
    increment -= 1;
  }
};

// Calculations








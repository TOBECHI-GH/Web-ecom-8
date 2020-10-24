const logoFile = document.getElementById("logoFile");
const imgPreview = document.getElementById("imgPreview");
const previewLogo = document.getElementById("previewLogo");
const defaultPreview = document.querySelector(".default-preview");
const table = document.getElementById("tab_logic");
const addRowBtn = document.getElementById("add_row");
const delRowBtn = document.getElementById("delete_row");
// const amt = document.getElementById('amount');
const subTotal = document.getElementById("sub_total");
const total = document.getElementById("total_amount");
let increment = 1;
// const rowTab = document.querySelector('.row_tabs');

// Adding and removing table rows
addRowBtn.addEventListener("click", addRow);

function addRow() {
  increment += 1;
  // console.log(increment);

  let tbody = document.getElementsByTagName("tbody")[0];
  let newRow = `
     <tr id='addr${increment}' class="row_tabs">
      <td>${increment}</td>
      <td><input type="text" name='product[]'  placeholder='Item Description' class="form-control"/></td>
      <td><input type="number" name='rate[]' placeholder='0.00' class="form-control rate" step="0" min="0"/></td>
      <td><input type="number" name='qty[]' placeholder='1' class="form-control qty" step="0.00" min="0"/></td>
      <td><input type="number" id="amount" name='amount[]' placeholder='0.00' class="form-control total"/></td>
      <td><input type="number" name='tax[]' placeholder='' class="form-control total" /></td>
      <td><span class="delete-row"><i class="fas fa-trash-alt"></i></span></td>
     </tr>
    `;
  tbody.insertAdjacentHTML("beforeend", newRow);
  attachDeleteToRows();
  productTotal();
  // console.log(tbody.innerHTML);
}

// remove
delRowBtn && delRowBtn.addEventListener("click", delRow);

function attachDeleteToRows() {
  const delTrRow = document.querySelectorAll(".delete-row");

  delTrRow &&
    delTrRow.forEach((dlRow, index) => {
      dlRow.addEventListener("click", () => {
        delARow(index + 1);
      });
    });
}

attachDeleteToRows();

function delARow(index) {
  console.log("atetmpted delete at ", index);
  if (index > 0) {
    let tr = document.getElementById(`addr${index}`);
    tr.parentNode.removeChild(tr);
  }
  productTotal();
}

function delRow() {
  if (increment >= 2) {
    console.log(increment);
    let tr = document.getElementById(`addr${increment}`);
    tr.parentNode.removeChild(tr);
    increment -= 1;
  }
  productTotal();
}

// Product Total and Subtotal
function productTotal() {
  let rateInput = document.querySelectorAll(
    '.row_tabs > td > input[name="rate[]"]'
  );
  console.log(rateInput);
  let qtyInput = document.querySelectorAll(
    '.row_tabs > td > input[name="qty[]"]'
  );
  let amtInput = document.querySelectorAll(
    '.row_tabs > td > input[name="amount[]"]'
  );

  for (let i = 0; i < rateInput.length; i++) {
    const eachRate = rateInput[i];

    const eachQty = qtyInput[i];

    const eachAmt = amtInput[i];

    eachRate.addEventListener("change", calc);
    eachQty.addEventListener("change", calc);

    function calc() {
      const rate = parseInt(eachRate.value);
      const qty = eachQty.value;
      const amount = rate * qty;
      eachAmt.value = amount;
      console.log(amount);
    }
  }
}

productTotal();

function sumTotal() {
  let sumVal = 0;
  // for (let n = 1; n < table.rows.length; n++) {
  //   sumVal = sumVal + table.rows[n].cell[4].innerHTML;
  // }

  console.log(sumVal);
  // subTotal.value = amount;
  // total.value = amount;
}

sumTotal();

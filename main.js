// https://api.currencyfreaks.com/latest
//
let selectFrom = document.querySelector("[name='from-l']");
let selectTo = document.querySelector("[name='from-r']");
let inp = document.querySelector("input");
let btn = document.querySelector("button")
let resDiv = document.querySelector(".result")

const apiKey = "b2b349b71d564244a96e136dd609ac8d";
const url = "https://api.currencyfreaks.com/latest";

let all = fetch(
  `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`
)
  .then((request) => {
    return request.json();
  })
  .then((data) => {
    console.log(Object.values(data["rates"].PHP));
    showDataInSelectBox(data["rates"])
  });

function showDataInSelectBox(data) {
  console.log(Object.keys(data));
  for (let i = 0; i < Object.keys(data).length; i++) {
    let opt = document.createElement("option");
    opt.setAttribute("value", Object.values(data)[i]);
    opt.append(Object.keys(data)[i]);
    selectFrom.append(opt);
  }
  for (let i = 0; i < Object.keys(data).length; i++) {
    let opt = document.createElement("option");
    opt.setAttribute("value", Object.values(data)[i]);
    opt.append(Object.keys(data)[i]);
    selectTo.append(opt);
  }
}


btn.onclick = function() {
  if(inp.value && selectFrom.value && selectTo) {
  let enterVal = inp.value
  let fromVal = selectFrom.value
  let toVal = selectTo.value
  let optionOfValue = document.querySelector(`[value='${toVal}']`)
  console.log(optionOfValue);
  // console.log(fromVal,toVal,enterVal);
  let result = (enterVal/fromVal)*toVal;
  console.log(selectTo);
  resDiv.innerHTML = ""
  resDiv.append(`${+result.toFixed(0)} ${optionOfValue.innerHTML}`);
  inp.value= "";
  }
}


$(document).ready(function() {
  $('#from').select2({
      placeholder: "Select a currency",
      allowClear: true
  });
});
$(document).ready(function() {
  $('#to').select2({
      placeholder: "Select a currency",
      allowClear: true
  });
});
let store = [0, null, null];

document.querySelector('.numbers').addEventListener('mousedown', e => {
     const element = e.target;
     element.style.backgroundColor = "#e4e4e4";
});
document.querySelector('.numbers').addEventListener('mouseup', e => {
     const element = e.target;
     element.style.backgroundColor = "#ffffff";
});
document.querySelector(".numbers").addEventListener("click", e => {
     let val = e.target.innerHTML;
     if (val == "C") {
          store = [0, null, null];
     } else {
          if (store[1] == null) {
               if (store[0] === 0 && val != ".") {
                    store[0] = val;
               } else {
                    store[0] += val;
               }
          } else {
               if (store[2] === null && val != ".") {
                    store[2] = val;
               } else if (store[2] == null && val == ".") {
                    store[2] = "0.";
               } else {
                    store[2] += val;
               }
          }
     }
     display(store[0], store[1], store[2]);
});
document.querySelector('.operations').addEventListener('mousedown', e => {
     const element = e.target;
     element.style.backgroundColor = "#e4e4e4";
});
document.querySelector('.operations').addEventListener('mouseup', e => {
     const element = e.target;
     element.style.backgroundColor = "whitesmoke";
});
document.querySelector(".operations").addEventListener("click", e => {
     let op = e.target.innerHTML;
     if (store[1] == null) {
          store[1] = op;
     } else if (store[1] != null && store[2] == null) {
          store[1] = op;
     } else if (store[1] != null && store[2] != null) {
          eval(store[0], store[1], store[2], op);
     }
     display(store[0], store[1], store[2]);
});
document.querySelector('.equals').addEventListener('mousedown', e => {
     const element = e.target;
     element.style.backgroundColor = "#ef3500";
     element.style.borderBottomRightRadius = "1rem";
    
});
document.querySelector('.equals').addEventListener('mouseup', e => {
     const element = e.target;
     element.style.backgroundColor = "#ff4500";
     element.style.borderBottomRightRadius = "1rem";
});
document.querySelector('.equals').addEventListener('click', e => {
     if (store[0] != null && store[1] != null && store[2] != null) {
          eval(store[0], store[1], store[2], null);
          display(store[0], store[1], store[2]);
     } else {
          display('Error', null, null);
          store = [0, null, null];
     }
     
});
function display(exp1, operator, exp2) {
     

     if (exp1 != null && exp2 != null && operator != null) {
          document.querySelector(".display").innerHTML = `${exp1}${operator}${exp2}`;
     } else if (exp1 != null && operator) {
          document.querySelector(".display").innerHTML = `${exp1}${operator}`;
     } else {
          document.querySelector(".display").innerHTML = exp1;
     }
}

// function isDigit(exp) {
//      const re = /^[1-9]{1,}\.?([0-9]{1,})?$/;
//      const result = re.test(exp);
//      return result;
// }

function eval(first, operator, second, newOp) {
     first = Number(first);
     second = Number(second);
    
     if (operator == "+") {
          let result = (first + second).toString();
          if (result.length > 10) {
               result = Number(result);
               result = result.toExponential(9);
          }
          store = [result, newOp, null];
     } else if (operator == "−") {
         store = [first - second, newOp, null];
     } else if (operator == "×") {
          let result = (first * second).toString();
          if (result.length > 10) {
               result = Number(result);
               result = result.toExponential(9);
          }
          store = [result, newOp, null];
     } else if (operator == "÷") {
          if (second == 0) {
               store = [first/second, null, null];
          } else {
               let result = (first / second).toString();
               if (result.length > 10) {
                    result = Number(result);
                    result = result.toExponential(9);
               }
               store = [result, newOp, null];
          }
     }
}


// higher_order_function.js
// input: 1st argument: a function 'operation',
//        2nd argument: a number 'num'
// the function higherOrder executes 'operation' 'num' times

function higherOrder(operation, num) {
  if (num <= 0)
    return;
  operation();
  return higherOrder(operation, --num);
};

module.exports = higherOrder;

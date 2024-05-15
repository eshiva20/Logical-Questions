// Input
//   console.log(computeAmount().lacs(15).crore(2).crore(5).lacs(20).thousand(45).crore(7).value())

function computeAmount(amt, total = 0) {
  if (amt) {
    total = total + amt;
  }
  return {
    crore: function (num) {
      return computeAmount(num * 10000000, total);
    },
    lacs: function (num) {
      return computeAmount(num * 100000, total);
    },
    thousand: function (num) {
      return computeAmount(num * 1000, total);
    },
    hundred: function (num) {
      return computeAmount(num * 100, total);
    },
    value: function (num) {
      return total;
    },
  };
}
console.log(
  computeAmount()
    .lacs(15)
    .crore(2)
    .crore(5)
    .lacs(20)
    .thousand(45)
    .crore(7)
    .value()
);

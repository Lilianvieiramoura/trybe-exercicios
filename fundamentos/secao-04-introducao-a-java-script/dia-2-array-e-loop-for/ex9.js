 const custo = 4;
 const venda = 6;

 if (custo >= 0 && venda >= 0) {
  const custoTotal = custo * 4.80;
  const lucroTotal = (venda - custoTotal) * 1000;
  console.log(lucroTotal);
  } else {
  console.log("Error, os valores não podem ser negativos");
  };

/*   const costOfProduct = 1;
  const saleValue = 3;

 if (costOfProduct >= 0 && saleValue >= 0) {
   const totalCostOfProduct = costOfProduct * 1.2;
   const totalProfit = (saleValue - totalCostOfProduct) * 1000;
   console.log(totalProfit);
 } else {
   console.log("Error, os valores não podem ser negativos");
 };
 */
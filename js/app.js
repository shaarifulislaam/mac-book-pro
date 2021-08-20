//memeory button
const memoryEightGb = document.getElementById("memory-8-gb");
const memorySixteenGb = document.getElementById("memory-16-gb");
//extra memory feild
const extraMemoryCostFeild = document.getElementById("extra-memory");
//extra Storage feild
const extraStorageCostFeild = document.getElementById("extra-storage");
//delivery chaarge feild
const deliveryChargeFeild = document.getElementById("delivery-charge");
//best price feild
const bestPriceFeild = document.getElementById("best-price");
// total price feild 
const totalPriceFeild = document.getElementById("total-price");
//Storage button
const ssd256Gb = document.getElementById("ssd-256-gb");
const ssd512Gb = document.getElementById("ssd-512-gb");
const ssd1Tb = document.getElementById("ssd-1-tb");

//delivery charge button
const delivery25Aug = document.getElementById("delivery-25-aug");
const delivery21Aug = document.getElementById("delivery-21-aug");

//extra memory cost function
function extraMemory(memoryPrice) {
  extraMemoryCostFeild.innerText = memoryPrice;
}
//extra storage cost function
function extraStorage(storagePrice) {
  extraStorageCostFeild.innerText = storagePrice;
}
//delivery charge function
function deliveryCost(deliveryPrice) {
  deliveryChargeFeild.innerText = deliveryPrice;
}
//total calculatio function
function priceCalculation() {
  const bestPrice = parseInt(bestPriceFeild.innerText);
  const extraMemoryPrice = parseInt(extraMemoryCostFeild.innerText);
  const extraStoragePrice = parseInt(extraStorageCostFeild.innerText);
  const deliveryCharge = parseInt(deliveryChargeFeild.innerText);
  const totalPrice = (bestPrice + extraMemoryPrice + extraStoragePrice + deliveryCharge);
  totalPriceFeild.innerText = totalPrice;
  totalFeild.innerText = totalPrice;
}
//add eventListener Memory button
memoryEightGb.addEventListener("click", function () {
  extraMemory(0); //call function price-0
  priceCalculation(); 
});
memorySixteenGb.addEventListener("click", function () {
  extraMemory(180); //call function price =180
  priceCalculation();
});
//add eventListener Storage button
//256 gb SSD storage 
ssd256Gb.addEventListener("click", function () {
  extraStorage(0);
  priceCalculation();
});
//512 gb SSD storage 
ssd512Gb.addEventListener("click", function () {
  extraStorage(100);
  priceCalculation();
});
//1 TB SSD storage 
ssd1Tb.addEventListener("click", function () {
  extraStorage(180);
  priceCalculation();
});
//add eventListener delivery charge button
// Friday,Aug 25 FREE Prime Delivery
delivery25Aug.addEventListener("click", function () {
  deliveryCost(0);
  priceCalculation();
});
// Friday,Aug 21 Delivery charge 20$
delivery21Aug.addEventListener("click", function () {
  deliveryCost(20);
  priceCalculation();
});
//apply pomo code
const pomoCodeInput = document.getElementById("pomo-code-input");
const pomoCodeBtn = document.getElementById("pomo-code-btn");
const totalFeild = document.getElementById("total");
//event add on pomo code button
pomoCodeBtn.addEventListener("click", function () {
  const pomoCode = pomoCodeInput.value;
  //check pomo code 
  if (pomoCode == "stevekaku") {
    const mainPrice = parseInt(totalPriceFeild.innerText);
    const discount = mainPrice / 5;
    const withPomocodePrice = mainPrice - discount;
    totalFeild.innerText = withPomocodePrice;
  } else {
    totalFeild.innerText = mainPrice;
  }
  //clear input
  pomoCodeInput.value = "";
});

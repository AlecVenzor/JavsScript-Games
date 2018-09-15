const taxRate=1.0725;

function taxCaculator(productPrice){
	let finalPrice = productPrice * taxRate;
	console.log(finalPrice);
	return  Math.round(finalPrice * 100) / 100; 
}
taxCaculator(10); 

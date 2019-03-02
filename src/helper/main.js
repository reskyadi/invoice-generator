const convertToNumber = (angka) => {
	var number = ''	
	var angkarev = angka.toString().split('').reverse().join('')
	for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) number += `${angkarev.substr(i,3)}.`
	return number.split('', number.length - 1).reverse().join('')
}

const convertToRupiah = (angka) => {
	var number = ''	
	var angkarev = angka.toString().split('').reverse().join('')
	for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) number += `${angkarev.substr(i,3)}.`
	return `Rp. ${number.split('', number.length - 1).reverse().join('')}`
}

const convertToAngka = (rupiah) => {
	return parseInt(rupiah.replace(/,.*|[^0-9]/g, ''), 10)
}

export default {
	convertToNumber,
	convertToAngka,
	convertToRupiah,
}

Array.prototype.includeCi = function(kelime) {
    return this.find((item)=> item.toLowerCase() === kelime.toLowerCase()) ? true :  false;
}

const dizi = [ "EsRa", "Esra","ESRA"];
console.log(dizi.includeCi("esra"))

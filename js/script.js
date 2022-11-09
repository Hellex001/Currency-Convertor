function turnon(){
    const npr = document.getElementById('inputn').value;
    
    console.log(npr);

    document.getElementById('inrOutput').innerHTML = npr/1.6;
    document.getElementById('usdOutput').innerHTML = npr*0.0087;
    document.getElementById('AusOutput').innerHTML = npr*0.013;
    document.getElementById('poundsOutput').innerHTML = npr*0.0070;
    
}

document.getElementById('inputn').addEventListener('input', () => turnon())
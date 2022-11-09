function turnon(){
    const npr = document.getElementById('inputn').value;
    
    console.log(npr);

    document.getElementById('cadOutput').innerHTML = npr/96.77;
    document.getElementById('usdOutput').innerHTML = npr/130.14;
    document.getElementById('AusOutput').innerHTML = npr/84.03;
    document.getElementById('poundsOutput').innerHTML = npr/148.69;
    
}

document.getElementById('inputn').addEventListener('input', () => turnon())
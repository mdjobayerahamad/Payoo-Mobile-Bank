document.getElementById('add-money-btn').addEventListener('click',function(){
   //1: Bank account get
  const bankAccount = getValueFromInput('add-money-bank');
    if (bankAccount== 'Select A Bank'){
    alert('please select a bank');
    return;
}

//2: get bank account number
const accon = getValueFromInput('bank-acc-number');
if(accon.length != 11){
    alert('invalid acc no');
    return;
}

//3: get ammount 

});
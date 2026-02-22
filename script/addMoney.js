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
const amount = getValueFromInput("add-money-amount");
const newBalance = getBalance()+Number(amount);

const pin = getValueFromInput('add-money-pin');
if(pin=='1234'){
alert(`Add Money Success From
    ${bankAccount}
    at ${new Date()}`);
setBalance(newBalance);
//1: history-container dhore niye ashbo
const history = document.getElementById('history-container');
//2: new div create korbo
const newHistory = document.createElement('div');
//3: new div er vitore inner html add korbo
newHistory.innerHTML=`
<div class="transaction-card p-5 bg-base-100">
Add Money Success From${bankAccount}, Acc-No ${accon} at ${new Date()}
</div>
`;
//4: history container a newDive ke append korbo
history.append(newHistory);
}
else{
    alert('invalid pin');
    return;
}
});
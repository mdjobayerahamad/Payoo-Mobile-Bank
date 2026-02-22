document.getElementById("cashout-btn").addEventListener('click', function(){
    //1: get the agent number and validate
    const cashoutNumber = getValueFromInput('cashout-number');
    if(cashoutNumber.length!=11){
        alert('invalid number')
        return;
    }
    //2: get the amount
    const cashoutAmount = getValueFromInput('cashout-amoun');
     //3: get the current Balance
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log(balance);

      //4: Calculate New Balance
    const currentBalance = getBalance();
    const newBalance = currentBalance-Number(cashoutAmount);
    console.log(newBalance)

    if(newBalance<0){
        alert('Invalid Amount');
        return;
    }
    const pin = getValueFromInput('cashout-pin');
    if(pin==='1234'){
        alert("cashout seccessfull");
        setBalance(newBalance);
        //1: history-container dhore niye ashbo
        const history = document.getElementById('history-container');
        //2: new div create korbo
        const newHistory = document.createElement('div');
        //3: new div er vitore inner html add korbo
        newHistory.innerHTML=`
        <div class="transaction-card p-5 bg-base-100">
        Cashout ${cashoutAmount} Taka Success From${cashoutNumber}, at ${new Date()}
        </div>
        `;
        //4: history container a newDive ke append korbo
        history.append(newHistory); 
        }
    else{
        alert('invalid pin');
        return;
    }

})



// document.getElementById("cashout-btn").addEventListener('click', function(){
//     //1: get the agent number and validate
//    const cashoutNumberInput = document.getElementById('cashout-number');
//    const cashoutNumber = cashoutNumberInput.value;
//    console.log(cashoutNumber);
//    if(cashoutNumber.length !=11){
//     alert('Invalid Agent Number');
//     return;
//    }
//     //2: get the amount 
//     const cashoutAmountInput = document.getElementById("cashout-amoun");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);

//     //3: get the current Balance
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     //4: Calculate New Balance
//     const newBalance = Number(balance)-Number(cashoutAmount);
    

//     if(newBalance<0){
//         alert('Invalid Amount');
//         return;
//     }
    

//     //5: get the pin and varify
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const pin = cashoutPinInput.value;
//     if(pin=="1234"){
//         //5.1: true :: show and alert > set balance
//         alert('cashout successfull');
//         console.log('New Balance:', newBalance)
//         balanceElement.innerText=newBalance;
//     }
//     else{
//          //5.2: false:: show an error alert > return 
//          alert('invalide pin');
//          return;
//     }
    
   
// });
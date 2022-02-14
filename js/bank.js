
document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositMoney= document.getElementById('deposit');
    const depositAmmountText=depositMoney.value;
    console.log(depositAmmountText);
    const newDeposit=parseFloat(depositAmmountText);
    


    const displayField=document.getElementById('deposit-balance');
    const displayFieldText=displayField.innerText;
    const displayNumber=parseFloat(displayFieldText);
    displayField.innerText=newDeposit+displayNumber;

    

    depositMoney.value='';


    // update total balance

    const balanceField=document.getElementById('balance-total');
    const balanceFieldText=balanceField.innerText;
    const balanceFieldNumber=parseFloat(balanceFieldText);
    balanceField.innerText=balanceFieldNumber+newDeposit;

    addReduceBalance('balance-total',newDeposit,true);


})


document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawMoney=document.getElementById('withdraw');
    const withdrawMoneyText=withdrawMoney.value;
    const withdrawMoneyNumber=parseFloat(withdrawMoneyText);
    const withdrawMoneyNumber= inputField('withdraw');


    const withdrawField=document.getElementById('withdraw-balance');
    const withdrawFieldText=withdrawField.innerText;
    const withdrawFieldNumber=parseFloat(withdrawFieldText);
    withdrawField.innerText=withdrawFieldNumber+withdrawMoneyNumber;


    
    const balanceField=document.getElementById('balance-total');
    const balanceFieldText=balanceField.innerText;
    const balanceFieldNumber=parseFloat(balanceFieldText);
    balanceField.innerText=balanceFieldNumber-withdrawMoneyNumber;

    
    withdrawMoney.value='';
})

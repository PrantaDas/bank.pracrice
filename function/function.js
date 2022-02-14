function inputField(inputid){
    const money= document.getElementById(inputid);
    const moneyintext=money.value;
    console.log(moneyintext);
    const newmoney=parseFloat(moneyintext);
    money.value='';
    return newmoney;
}


function updateBalance(giveId,finalMoney){

    const displayField=document.getElementById(giveId);
    const displayFieldText=displayField.innerText;
    const displayNumber=parseFloat(displayFieldText);
    displayField.innerText=finalMoney+displayNumber;
}


function addReduceBalance(reduceid,newDeposit,isAdd){
    const balanceField=document.getElementById(reduceid);
    const balanceFieldText=balanceField.innerText;
    const balanceFieldNumber=parseFloat(balanceFieldText);
    if(isAdd==true){
        balanceField.innerText=balanceFieldNumber+newDeposit;
    }
    else{
        balanceField.innerText=balanceFieldNumber-newDeposit;
    }
}

document.getElementById('deposit-btn').addEventListener('click',function(){
    const newDeposit= inputField('deposit');
    updateBalance('deposit-balance',newDeposit);
    addReduceBalance('balance-total',newDeposit,true);
})
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawMoneyNumber= inputField('withdraw');
    updateBalance('withdraw-balance',withdrawMoneyNumber);
    addReduceBalance('balance-total',withdrawMoneyNumber,false);
})
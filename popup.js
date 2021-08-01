async function getBTC(){
    const api_url=`https://api.cryptonator.com/api/ticker/${getSelectValue()}-${getSelectCurrency()}`
    const response=await fetch(api_url)
    const data=await response.json()
    //base=data.ticker.base
    price=data.ticker.price
    var str=`${price}`
    document.getElementById('price').value=str
}
function getSelectValue()
{
    var selectedValue = document.getElementById("list").value;
    return selectedValue
}
function getSelectCurrency()
{
    var selectedValue = document.getElementById("Currlist").value;
    return selectedValue
}
document.getElementById('calculate').addEventListener('click',getBTC)


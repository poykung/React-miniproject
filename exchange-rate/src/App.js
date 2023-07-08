import Currency from './component/Currency';
import money from './img/money.png'
import {useEffect, useState} from 'react'
function App() {
  
  const [currencyChioce,setCurrencyChioce] = useState([])
  const [fromCurrency,setFormCurrency] = useState('USD')
  const [toCurrency,setToCurrency] = useState('THB')

  const [amount,setAmount] = useState(1)
  const [exchange,setExchange] = useState(0)
  
  const [chceckFromCurrency,setCheckFormCurrency] = useState(true)
  let fromAmount,toAmount

  if(chceckFromCurrency){
    fromAmount = amount
    toAmount = (amount*exchange).toFixed(2)
  }else{
    toAmount = amount
    fromAmount = (amount/exchange).toFixed(2)
  }

  useEffect(()=>{
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setCurrencyChioce([...Object.keys(data.rates)])
      setExchange(data.rates[toCurrency])
    })
  },[fromCurrency,toCurrency])

  const amountFromCurrency =(e)=>{
    setAmount(e.target.value)
    setCheckFormCurrency(true)
  }

  const amountToCurrency =(e)=>{
    setAmount(e.target.value)
    setCheckFormCurrency(false)
  }

  return (
  <div>
    <img src={money} alt="logo" className="money-img"></img>
    <h1>Currency Exchange Calculator (API)</h1>
    <div className="container">
      <Currency 
      currencyChioce={currencyChioce} 
      selectCurrency={fromCurrency}
      changeCurrency={(e=>setFormCurrency(e.target.value))}
      amount = {fromAmount}
      onChangeAmount = {amountFromCurrency}
      
      />
      <div className="equal">To</div>
      <Currency 
      currencyChioce={currencyChioce} 
      selectCurrency={toCurrency}
      changeCurrency={(e=>setToCurrency(e.target.value))}
      amount = {toAmount}
      onChangeAmount = {amountToCurrency}
      />
    </div>
  </div>
  );
}

export default App;

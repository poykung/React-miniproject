import './Currency.css'

const Currency = (props)=>{
    const {currencyChioce,selectCurrency,changeCurrency,amount,onChangeAmount} = props
    return(
        <div className="currency">
            <select value={selectCurrency} onChange={changeCurrency}>
               {currencyChioce.map((choice)=>
                <option key={choice} value={choice}>{choice}</option>
                )}
            </select>
            <input type="number" 
            value={amount}
            onChange={onChangeAmount}
            />
        </div>
    )
}

export default Currency
const currencyFormat = (num)=>{
    return '$'+ Number(num.toFixed(2)).toLocaleString();
}

export default currencyFormat;
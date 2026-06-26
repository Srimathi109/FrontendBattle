interface Props{

currency:string;

setCurrency:(value:string)=>void;

}

export default function CurrencySwitcher({

currency,

setCurrency

}:Props){

return(

<select

value={currency}

onChange={(e)=>setCurrency(e.target.value)}

>

<option value="USD">

USD

</option>

<option value="INR">

INR

</option>

<option value="EUR">

EUR

</option>

</select>

);

}
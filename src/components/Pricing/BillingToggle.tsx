interface Props{

annual:boolean;

onToggle:()=>void;

}

export default function BillingToggle({

annual,

onToggle

}:Props){

return(

<button

className="billing-toggle"

onClick={onToggle}

>

{annual ? "Annual (-20%)" : "Monthly"}

</button>

);

}
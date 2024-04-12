import { createEffect, createSignal } from "solid-js"

export default (props:any) => {

    const [switcher, changeSwithcer] = createSignal(true);
    const toggle = () => changeSwithcer(!switcher());
    
    
    createEffect(()=>{
        //update chart from A formula to FO
    })

    return (
        <div>
        <button>

        </button>
        </div>
    )
}
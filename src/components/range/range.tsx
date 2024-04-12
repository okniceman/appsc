import { createEffect, createSignal, onMount, splitProps } from "solid-js"

import styles from "./range.module.css"

export function Range(props: any) {

    
    
    const [units, setUnits] = createSignal(props.units)
    const minvalue = Number.parseFloat(props.minimum);
    const maxvalue = Number.parseFloat(props.maximum);
    const defaultValue = Number.parseFloat(props.defaultValue);
    const [value, setValue] = createSignal(defaultValue)

    createEffect(()=>{
        alert(props.ref)
    })


    return (
        <>
        <div class={styles.range}>
            <p class={styles.title}>
                {props.title}
            </p>
            <p class={styles.current}>
                {value() + units()}
            </p>

            <div class={styles.container}>
                <p class={styles.minmax}>
                    {props.minimum + props.units}
                </p>
                <input 
                type="range" 
                name="" 
                id=""
                step={props.step} 
                class={styles.input}
                min={minvalue} 
                max={maxvalue}
                value={value()} onInput={(val)=>{
                    setValue(+val.target.value);
                }}/>
                <p class={styles.minmax}>
                    {props.maximum + props.units}
                </p>
            </div>
            <p class={styles.description}>
                {props.description}
            </p>

            <button class={styles.inputSwitcher}>
                {props.buttonDescription}
            </button>

        </div>
        </>
    )
}


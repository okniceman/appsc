import { createEffect, createSignal, onMount } from "solid-js"
import styles from "./field.module.css"

const MAX_LENGHT = 16;

export default (props: any) => {

    const [value, setValue] = createSignal(props.defaultValue);
    createEffect(() => {
        const val = value();
        setValue(val.replace(/[^0-9]/, ""))
    })

 
    return (
        <div class={styles.field}>
            <p class={styles.title}>
                {props.title}
            </p>
            <input class={styles.input}
                type="text"
                value={value()}
                maxlength={MAX_LENGHT}
                onInput={(val) => {
                    setValue(val.target.value);
                }
                } />
            <p class={styles.description}>
                {props.description}
            </p>
        </div>
    )
}
import { createSignal, mergeProps, onMount, type Component } from 'solid-js';
import { Range } from './components/range/range';
import logo from './logo.svg';
import styles from './App.module.css';
import Field from './components/field/field';
import Toggle from './components/toggle/toggle';
import Chart from './components/chart/chart';
import props from './assets/props'


const App: Component = () => {



  let magic;

  return (
    <>
    <div class={styles.App}>
      <Field {...props.price}/>
      <Field {...props.firstPay}/>
      <Range {...props.rate} />
      <Range {...props.term} ref={magic}/>
      <Toggle />
      <Chart />
    </div>
    </>
  );
};

export default App;

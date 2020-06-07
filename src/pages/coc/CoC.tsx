import React from 'react';
import { InputNumber } from 'rsuite';

const Status = () =>{
    const styles = { marginBottom: 10 };
    return(
    <div>
    <InputNumber style={styles} placeholder="STR"  max={18} min={2} />
    <InputNumber style={styles} placeholder="CON"  max={18} min={2} />
    <InputNumber style={styles} placeholder="POW"  max={18} min={2} />
    <InputNumber style={styles} placeholder="DEX"  max={18} min={2} />
    <InputNumber style={styles} placeholder="APP"  max={18} min={2} />
    <InputNumber style={styles} placeholder="SIZE" max={18} min={2} />
    <InputNumber style={styles} placeholder="INT"  max={18} min={8} />
    <InputNumber style={styles} placeholder="EDU"  max={21} min={6} />
  </div>
    )
}

const CoC = () => {
    return (
        <div className="App">
        <h1> CoC </h1>
        <Status />
        
        </div>

    )
}

export default CoC;
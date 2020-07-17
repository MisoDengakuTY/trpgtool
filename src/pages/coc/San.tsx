import React from 'react';
import { useState } from 'react';
import { InputNumber, Input,Button} from 'rsuite';


const San = () => {
    const styles = { 
        marginBottom: 10 ,}

    return(
        <div>
        <table className = "sanTable"> 
        <td><InputNumber style={styles} placeholder="SAN" max={99} min={0} /></td>
        <td><Input style={styles} value={"13"} disabled /></td>
        </table>
        </div>
    )

}

export default San
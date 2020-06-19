import React from 'react';
import { InputNumber, Input} from 'rsuite';

interface status{
    SAN : number
}

const San = () => {
    const styles = { 
        marginBottom: 10 ,}


    // props に直す
    const currentPOW = 13
    const cocS = 5
    const data = (Math.min(currentPOW,99) - cocS).toString()
    
    //CSS分かんね☆
    return(
        
        <table className = "sanTable"> 
        <td><InputNumber style={styles} placeholder="SAN" max={99} min={0} /></td>
        <td><Input style={styles} value={data} disabled /></td>
        </table>
    
    )

}

export default San
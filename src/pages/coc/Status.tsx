import React from 'react';
import { InputNumber, Input} from 'rsuite';

interface status{
    STR : number;
    CON : number;
    POW : number;
    DEX : number;
    APP : number;
    SIZE : number;
    INT : number;
    EDU : number;
}

const Status = () =>{
    const styles = { 
        marginBottom: 10 }

    const data =  {
        STR : "13",
        CON : "13",
        POW : "13",
        DEX : "13",
        APP : "13",
        SIZE : "13",
        INT : "13",
        EDU : "13",
    }
    
    return(
    <div className = "statusTable">
    <table>
    <th className="tableLeft">  </th>
    <th>STR</th>
    <th>CON</th>
    <th>POW</th>
    <th>DEX</th>
    <th>APP</th>
    <th>SIZE</th>
    <th>INT</th>
    <th>EDU</th>
    <tr>    

    <td>初期値</td> 
    <td><InputNumber style={styles} placeholder="STR"  max={18} min={2} /> </td>
    <td><InputNumber style={styles} placeholder="CON"  max={18} min={2} /> </td>
    <td><InputNumber style={styles} placeholder="POW"  max={18} min={2} /> </td>
    <td><InputNumber style={styles} placeholder="DEX"  max={18} min={2} /> </td>
    <td><InputNumber style={styles} placeholder="APP"  max={18} min={2} /> </td>
    <td><InputNumber style={styles} placeholder="SIZE" max={18} min={2} /> </td>
    <td><InputNumber style={styles} placeholder="INT"  max={18} min={8} /> </td>
    <td><InputNumber style={styles} placeholder="EDU"  max={21} min={6} /> </td>
    </tr>
    
    <tr>
    <td className="tableLeft">その他増減</td>
    <td><InputNumber style={styles} /> </td>
    <td><InputNumber style={styles} /> </td>
    <td><InputNumber style={styles} /> </td>
    <td><InputNumber style={styles} /> </td>
    <td><InputNumber style={styles} /> </td>
    <td><InputNumber style={styles} /> </td>
    <td><InputNumber style={styles} /> </td>
    <td><InputNumber style={styles} /> </td>
    </tr>

    <tr>
    <td className="tableLeft">現在値</td>
    <td> <Input value={data.STR} disabled /> </td>
    <td> <Input value={data.CON} disabled /> </td>
    <td> <Input value={data.POW} disabled /> </td>
    <td> <Input value={data.DEX} disabled /> </td>
    <td> <Input value={data.APP} disabled /> </td>
    <td> <Input value={data.SIZE} disabled /> </td>
    <td> <Input value={data.INT} disabled /> </td>
    <td> <Input value={data.EDU} disabled /> </td>
    </tr>
    </table>
    </div>
    )
}

export default Status;
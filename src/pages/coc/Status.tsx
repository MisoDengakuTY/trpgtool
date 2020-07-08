import React from 'react';
import { InputNumber, Input} from 'rsuite';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_STATUS = gql`
    query MyQuery {
        CoCCharacters_by_pk(id: 1) {
            str
            con
            pow
            dex
            app
            size
            int
            edu
        }
    }
`;



const Status = () =>{
    const styles = { 
        marginBottom: 10 }

    const { loading, error, data } = useQuery(GET_STATUS);

    if (loading) return <p>Loading...</p>; // fetch
    if (error) return <p>fuck you... {error.message} </p>; //error
    
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
    <td> <Input value={"10"} disabled /> </td>
    <td> <Input value={data.CoCCharacters_by_pk.con} disabled /> </td>
    <td> <Input value={data.CoCCharacters_by_pk.pow} disabled /> </td>
    <td> <Input value={data.CoCCharacters_by_pk.dex} disabled /> </td>
    <td> <Input value={data.CoCCharacters_by_pk.app} disabled /> </td>
    <td> <Input value={data.CoCCharacters_by_pk.size} disabled /> </td>
    <td> <Input value={data.CoCCharacters_by_pk.int} disabled /> </td>
    <td> <Input value={data.CoCCharacters_by_pk.edu} disabled /> </td>
    </tr>
    </table>
    </div>
    )
}

export default Status;
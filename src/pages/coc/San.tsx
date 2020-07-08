import React from 'react';
import { useState } from 'react';
import { InputNumber, Input,Button} from 'rsuite';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_SAN = gql`
    query MyQuery {
        CoCCharacters_by_pk(id: 1) {
            san
        }
    }
`;

const San = () => {
    const styles = { 
        marginBottom: 10 ,}

    
    // props に直す
    const currentPOW = 13
    const cocS = 5

    const { loading, error, data } = useQuery(GET_SAN);

    if (loading) return <p>Loading...</p>; // fetch
    if (error) return <p>fuck you... {error.message} </p>; //error
    console.log(data)
    return(
        <div>
        <table className = "sanTable"> 
        <td><InputNumber style={styles} placeholder="SAN" max={99} min={0} /></td>
        <td><Input style={styles} value={data.CoCCharacters_by_pk.san} disabled /></td>
        </table>
        </div>
    )

}

export default San
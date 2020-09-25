import React,{useState,useEffect} from 'react';

import MaterialTable, { Column } from 'material-table';


import axios from 'axios';

import { CoCCharacterType } from '../../dbtype/cocCharacter';

interface Row {
    id:number;
    name: string;
    san: number;
    str: number;
    con: number;
    pow: number;
    dex: number;
    app: number;
    size: number;
    int: number;
    edu: number;
  }
  
  interface TableState {
    columns: Array<Column<Row>>;
    data: Row[];
  }


const Load = () => {
const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
    /* useEffect(() => {
        axios.get(`http://localhost:3001/cocCharacter/`)
        .then(res => {
          const character : any = res.data;

          const datatmp : Row[] = character.map(t => 
            {
                id: t["_id"];
                name: t["name"];
                san: t["san"];
                str: t["statuses"][0]["statusPoint"]+
                t["statuses"][0]["otherFluctuation"]+
                t["statuses"][0]["temporaryFluctuation"];
                con: t["statuses"][1]["statusPoint"]+
                t["statuses"][1]["otherFluctuation"]+
                t["statuses"][1]["temporaryFluctuation"];
                pow: t["statuses"][2]["statusPoint"]+
                t["statuses"][2]["otherFluctuation"]+
                t["statuses"][2]["temporaryFluctuation"];
                dex: t["statuses"][3]["statusPoint"]+
                t["statuses"][3]["otherFluctuation"]+
                t["statuses"][3]["temporaryFluctuation"];
                app: t["statuses"][4]["statusPoint"]+
                t["statuses"][4]["otherFluctuation"]+
                t["statuses"][4]["temporaryFluctuation"];
                size: t["statuses"][5]["statusPoint"]+
                t["statuses"][5]["otherFluctuation"]+
                t["statuses"][5]["temporaryFluctuation"];
                int: t["statuses"][6]["statusPoint"]+
                t["statuses"][6]["otherFluctuation"]+
                t["statuses"][6]["temporaryFluctuation"];
                edu: t["statuses"][7]["statusPoint"]+
                t["statuses"][7]["otherFluctuation"]+
                t["statuses"][7]["temporaryFluctuation"];
              }         
            )
          setState({columns:columnsInit,data:datatmp});
        }
        )
        },[]);

    return(
        <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
    );
 */}

export default Load;
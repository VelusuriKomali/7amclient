import React from "react";
import Table,{ExampleComponent,List,name,getName } from 'my-first-react-to-react-table'

export const MyTable=({columns,headers, data }) => {

   return <div>
    <Table headers={headers} columns={columns} data={data} />
          <ExampleComponent text={`${name}-${getName()}`} />
          <List names={headers} />
      </div>
};
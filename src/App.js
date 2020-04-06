//this is a test comment
import React, { Component } from 'react';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/omega/theme.css';
import logo from './logo.svg';
import './App.css';
import { DataTable } from "primereact/components/datatable/DataTable";
import { Column } from "primereact/components/column/Column";

class App extends Component {

  constructor() {
    super();
    this.state = {
        cars: [{
          Id : 1,
          year:"2015",
          brand:"brand1",
          color:"color1"
        },
        {
          Id : 2,
          year:"1990",
          brand:"brand2",
          color:"color2"
        },
        {
          Id : 3,
          year:"1999",
          brand:"brand3",
          color:"color3"
        },
        {
          Id : 4,
          year:"2014",
          brand:"brand4",
          color:"color4"
        },
        {
          Id : 5,
          year:"2013",
          brand:"brand5",
          color:"color5"
        },
        {
          Id : 6,
          year:"2015",
          brand:"brand6",
          color:"color6"
        }
      ]
    };
}

rowExpansionTemplate(data) {
  return  <div>Expanded Row</div>;
}
 
  render() {
    return (
      <div className="App">
          <DataTable value={this.state.cars} resizableColumns={true} responsive={true} expandedRows={this.state.expandedRows} 
          onRowToggle={(e) => this.setState({expandedRows:e.data})} rowExpansionTemplate={this.rowExpansionTemplate} paginator={true}
          rows={5} rowsPerPageOptions={[5,10,20]}>
             <Column expander={true} style={{width: '2em'}} />
              <Column field="Id" header="ID" sortable={true} />
              <Column field="year" header="Year" filter={true} sortable={true}/>
              <Column field="brand" header="Brand" filter={true} sortable={true}/>
              <Column field="color" header="Color" filter={true} sortable={true}/>
          </DataTable>
      </div>
    );
  }
}

export default App;

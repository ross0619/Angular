import { ViewEncapsulation } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Angular';
  
  async rickMortyChar(){
    let response = await fetch('https://rickandmortyapi.com/api/character');
    let data = await response.json();
    console.log(data);
    return data
  }
  
  createTable(){
    this.rickMortyChar().then((data) => {
        var results = data.results;
        var myTable = document.createElement('table');
        myTable.setAttribute('id', 'myTable');
        var headerRow = myTable.insertRow(0)
        var headerArr = new Array();
        headerArr = ['Name', 'Status', 'Species', 'Type'];
        for(let j = 0; j < headerArr.length; j++){
            var headerObj = document.createElement('th');
            headerObj.innerHTML = headerArr[j];
            headerRow.appendChild(headerObj);
        }   
        
        
        for(let i = 0; i < results.length; i++){
            var tableRow = myTable.insertRow(i+1);
            var tableArr = new Array();
            tableArr = [results[i].name, results[i].status, results[i].species, results[i].type];
            for(let j = 0; j < tableArr.length; j++){
                var tableObj = document.createElement('td');
                tableObj.innerHTML = tableArr[j];
                tableRow.appendChild(tableObj);
            }
        }
            
        document.body.appendChild(myTable);
        // document.getElementById('createTable').disabled = true;
        
    });
  }
}





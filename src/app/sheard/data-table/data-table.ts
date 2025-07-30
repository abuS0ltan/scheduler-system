import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  imports: [],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss'
})
export class DataTable {
  @Input() data : any[]=[];
  @Input() modelInstance:any;
  columns: string[]=[]

  ngOnInit(){
    if(this.modelInstance){
      this.columns=Object.keys(this.modelInstance)
      console.log(this.data[0])
    }
  }
}

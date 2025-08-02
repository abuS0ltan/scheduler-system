import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-table',
  imports: [],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss'
})
export class DataTable {
  @Input() data : any[]=[];
  @Input() modelInstance:any;
  @Output() deleteId = new EventEmitter<number>();
  columns: string[]=[]

  ngOnInit(){
    console.log(this.data)
    if(this.modelInstance){
      this.columns=Object.keys(this.modelInstance)
      console.log(this.data[0])
    }
  }
  delete(id: number) {
    this.deleteId.emit(id);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  imports: [FormsModule],
  templateUrl: './form-data.html',
  styleUrl: './form-data.scss'
})
export class FormData {
  @Input() modelInstance: any = {};
  @Input() title: string = "";
  @Output() submitForm = new EventEmitter<any>();
  inputLabel: string[] = [];
  ngOnInit(){
    if(this.modelInstance){
      this.inputLabel = Object.keys(this.modelInstance);
    }
  }
  onSubmit() {
    console.log("Submitted Data:", this.modelInstance);
    this.submitForm.emit(this.modelInstance);
  }
}

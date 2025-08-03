import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-update-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-modal.html',
  styleUrl: './update-modal.scss'
})
export class UpdateModal {
  @Input() title: string = '';
  @Input() data: Client= new Client();
  @Input() instance: any;
  @Input() open: boolean = false;
  @Output() openChange = new EventEmitter<boolean>();
  inputLabel: string[] = [];
  ngOnInit() {
    if (this.instance) {
      this.inputLabel = Object.keys(this.instance);
    }
  }
  onCancel() {
    this.open = false;
  }
  onSubmit() {

  }
}

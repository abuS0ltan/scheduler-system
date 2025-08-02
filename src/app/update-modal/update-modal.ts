import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-update-modal',
  imports: [],
  templateUrl: './update-modal.html',
  styleUrl: './update-modal.scss'
})
export class UpdateModal {
  @Input() title: string = '';
  @Input() data: any;
  @Input() instance: any;
}

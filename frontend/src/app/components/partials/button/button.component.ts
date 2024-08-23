import { Component, Input } from '@angular/core';

@Component({
  selector: 'customButton',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() public text: string = '確定'
  @Input() public background: string = ''

}

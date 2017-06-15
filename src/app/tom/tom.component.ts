import {
  Component,
  ViewEncapsulation,
  Input
} from '@angular/core';

@Component({
  selector: 'app-tom',
  templateUrl: './tom.component.html',
  styleUrls: ['./tom.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TomComponent {

  // @Input('ser') series: string;
  @Input() series: string;
}

import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

type Grade= 'A' | 'B' | 'F'

@Component({
<<<<<<< HEAD
    imports: [],
    templateUrl: './control-flow.component.html',
    styles: ``
=======
  standalone: true,
  imports: [ TitleComponent ],
  templateUrl: './control-flow.component.html',
  styles: ``
>>>>>>> myDashboard-test
})
export default class ControlFlowComponent {

  public showContent= signal(false);
  public grade= signal<Grade>('A');
  public frameworks= signal(['Angular', 'React', 'Vue', 'Laravel'])
  public frameworks2= signal([])

  public toggleContent(){
    this.showContent.update( value => !value )
  }



}

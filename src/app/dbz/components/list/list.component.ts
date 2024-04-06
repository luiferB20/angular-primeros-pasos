import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] =[{
    name: "trunks",
    power: 10
  }]

  // onDelete = Index value: number
   @Output()
   public onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharcter(id?: string): void{

    if (!id) return;

    this.onDelete.emit(id)
  }


}

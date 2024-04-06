import { Component} from '@angular/core';
import { Character } from '../interfaces/Character.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class mainPageComponent  {

  constructor (private dbzService: dbzService){}

  get character(): Character[]{
    return[...this.dbzService.character]
  }

  onDeleteteCharacter( id: string):void{
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter (character: Character):void{
    this.dbzService.addCharacter(character);
  }



}

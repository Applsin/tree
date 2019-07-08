import { Component, OnInit } from '@angular/core';
import { Vulnarability } from '../vulnarability';

@Component({
  selector: 'app-vulnarabilities',
  templateUrl: './vulnarabilities.component.html',
  styleUrls: ['./vulnarabilities.component.css']
})
export class VulnarabilitiesComponent implements OnInit {

  vulnarabilities: Vulnarability[];

  constructor(
  ) {
    this.vulnarabilities = [
      { id: 1, name: 'SCRF' },
      { id: 2, name: 'Smth else' },
  ];
   }

  ngOnInit()
   {
     this.vulnarabilities = [
      { id: 1, name: 'SCRF' },
      { id: 2, name: 'Smth else' },
  ];
  }

  addVulnarability(InputName: string){
      console.log(InputName);
      let temp: Vulnarability = {
        id: this.vulnarabilities.length + 1,
        name: InputName
      }
      this.vulnarabilities.push(
        {id: temp.id,
        name: temp.name}
      )
      console.log(this.vulnarabilities.toString())
  }

}
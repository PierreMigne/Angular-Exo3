import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {

  @Output() changeCompteurEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  onChangeCompteurEmitter(){
    this.changeCompteurEmitter.emit();
  }

}

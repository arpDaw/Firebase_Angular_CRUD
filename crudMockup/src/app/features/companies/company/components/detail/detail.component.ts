import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company } from '../../../interfaces/company.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  @Input() company: Company;
  @Output() updateCompany = new EventEmitter<void>();
  @Output() deleteCompany = new EventEmitter<void>();


  constructor(){}

  ngOnInit(): void {
  }

  update(){
    this.updateCompany.emit();
  }

  delete(){
    this.deleteCompany.emit();
  }

}

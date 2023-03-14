import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../../../interfaces/company.interface';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  @Input() company$: Observable<Company[]>;
  @Output() companyEmitter = new EventEmitter<Company>();

  constructor(){}

  ngOnInit(): void {
  }

  selectCompany(company: Company){
    this.companyEmitter.emit(company);
  }

}

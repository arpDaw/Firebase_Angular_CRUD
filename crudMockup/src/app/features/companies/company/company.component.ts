import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, filter, tap } from 'rxjs';
import { CompanyService } from 'src/app/core/services/company/company.service';
import { Company } from '../interfaces/company.interface';
import { FormComponent } from './components/form/form.component';
import { UserService } from 'src/app/core/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit{
  allCompany$: Observable<Company[]>;
  selectedCompany?: Company;

  constructor(
    private readonly companyService: CompanyService,
    private readonly userService: UserService,
    private router: Router,
    private readonly dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.allCompany$ = this.companyService.getAll();
  }

  addCompany(){
    const dialogRef = this.dialog.open(FormComponent, {
      data: {},
      width: '40%',
    });

    dialogRef
    .afterClosed()
    .pipe(
      filter(Boolean),
      tap((company) => this.companyService.create(company))
    )
    .subscribe();
  }

  updateCompany(){
    const dialogRef = this.dialog.open(FormComponent, {
      data: {...this.selectedCompany},
      width: '40%',
    });

    dialogRef
    .afterClosed()
    .pipe(
      filter(Boolean),
      tap((company) => this.companyService.update(company)),
      tap((company) => this.selectCompany(company))
    )
    .subscribe();
  }

  selectCompany(company: Company) {
    this.selectedCompany = company;
  }

  deleteCompany(){
    this.companyService.delete(this.selectedCompany!.id);
    this.selectedCompany = undefined;
  }

  logout() {
    this.userService.logout()
    .then(() =>{
      this.router.navigate(['/login'])
    })
    .catch(error => console.log(error));
  }
}

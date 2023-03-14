import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { headerRoutes } from './lib.routes';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(headerRoutes)],
  declarations: [HeaderComponent],
})
export class HeaderModule {}

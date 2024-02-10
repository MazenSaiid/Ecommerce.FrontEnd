import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainlayoutComponent,
    SpinnerComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,AppRoutingModule,HttpClientModule,FormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    SidebarComponent,
    MainlayoutComponent,
    SelectComponent
  ]
})
export class SharedModule { }

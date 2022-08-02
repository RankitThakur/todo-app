import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoService } from './services/todo.service';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TododemoComponent } from './tododemo/tododemo.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TododemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [
    TodoService,
    HttpClientModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

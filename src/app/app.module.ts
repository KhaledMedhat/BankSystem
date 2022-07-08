import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { FundstransferComponent } from './fundstransfer/fundstransfer.component';
import { FormsModule } from '@angular/forms';
import { TransactiondetailsComponent } from './transactiondetails/transactiondetails.component';
import { HistoryComponent } from './history/history.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CustomerdetailsComponent,
    FundstransferComponent,
    TransactiondetailsComponent,
    HistoryComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

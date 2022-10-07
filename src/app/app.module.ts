import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';

import { DatatableComponent } from './component/datatable/datatable.component';

import { OverviewComponent } from './overview/overview.component';
import { MatIconModule } from '@angular/material/icon';
import { DisplydataComponent } from './component/displydata/displydata.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent,

    DatatableComponent,

    OverviewComponent,
    DisplydataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatIconModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,

    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './header/header.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { GuestComponent } from './guest/guest.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PerformancePageComponent } from './performance-page/performance-page.component';
import { DetailsComponent } from './details/details.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ReadLessPipe } from './pipes/read-less.pipe';
import { DataExplorerComponent } from './data-explorer/data-explorer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RequestComponent } from './request/request.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { MaxvalDirective } from './maxval.directive';

import { BackendApiService } from './backend-api.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from './pipes/date.pipe';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { FailDialogComponent } from './fail-dialog/fail-dialog.component';
import { CompleteDirective } from './complete.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FileUploadComponent,
    GuestComponent,
    UserComponent,
    PageNotFoundComponent,
    PerformancePageComponent,
    DetailsComponent,
    HighlightDirective,
    ReadLessPipe,
    DataExplorerComponent,
    SidebarComponent,
    MenuComponent,
    RequestComponent,
    RequestDetailComponent,
    MaxvalDirective,
    DatePipe,
    SuccessDialogComponent,
    FailDialogComponent,
    CompleteDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    AppRoutingModule,
    MatTableModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: [BackendApiService],
  bootstrap: [AppComponent],
  entryComponents: [
    SuccessDialogComponent,
    FailDialogComponent
  ]
})
export class AppModule { }

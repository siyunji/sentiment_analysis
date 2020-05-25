import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator'; 

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
    DatePipe
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
    MatPaginatorModule
  ],
  providers: [BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

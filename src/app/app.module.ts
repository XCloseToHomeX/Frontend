import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './public/pages/login/login.component';
import {RegisterKeeperComponent} from "./public/pages/register-user/register-keeper/register-keeper.component";
import {RegisterTravellerComponent} from "./public/pages/register-user/register-traveller/register-traveller.component";
import {FindHouseComponent} from "./public/pages/main-content-keeper/find-house/find-house.component";
import {MessengerKeeperComponent} from "./public/pages/main-content-keeper/messenger-keeper/messenger-keeper.component";
import {ProfileKeeperComponent} from "./public/pages/main-content-keeper/profile-keeper/profile-keeper.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {PageNotFoundComponent} from './public/pages/page-not-found/page-not-found.component';
import {KeeperComponent} from './public/pages/main-content-keeper/keeper/keeper.component';
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {HttpClientModule} from "@angular/common/http";
import { UpdateProfileComponent } from './public/pages/update-profile/update-profile.component';
import {MatDialogModule} from "@angular/material/dialog";
import { FindKeeperComponent } from './public/pages/main-content-traveler/find-keeper/find-keeper.component';
import { MessengerTravelerComponent } from './public/pages/main-content-traveler/messenger-traveler/messenger-traveler.component';
import { ProfileTravelerComponent } from './public/pages/main-content-traveler/profile-traveler/profile-traveler.component';
import { TravelerComponent } from './public/pages/main-content-traveler/traveler/traveler.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDividerModule} from "@angular/material/divider";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSortModule} from "@angular/material/sort";
import { SigninComponent } from './public/pages/signin/signin.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterKeeperComponent,
    RegisterTravellerComponent,
    FindHouseComponent,
    MessengerKeeperComponent,
    ProfileKeeperComponent,
    PageNotFoundComponent,
    KeeperComponent,
    UpdateProfileComponent,
    FindKeeperComponent,
    MessengerTravelerComponent,
    ProfileTravelerComponent,
    TravelerComponent,
    SigninComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSortModule,
    MatSidenavModule,
    MatDialogModule,
    MatGridListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

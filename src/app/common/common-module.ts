import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { LoginComponent } from "../auth/login/login.component";
import { MaterialModule } from "../material-module.module";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from "@angular/router";

@NgModule({
    declarations : [
        NavbarComponent,
        FooterComponent
    ],
    imports : [
        MatDialogModule,
        MatButtonModule,
        MaterialModule,
        CommonModule,
        BrowserModule,RouterModule
    ],
    exports : [
        NavbarComponent,
        FooterComponent
    ]
})

export class CommonModle {}
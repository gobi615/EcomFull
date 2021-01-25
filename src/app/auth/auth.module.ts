import { NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { UserService } from "./user.service";
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule } from '@angular/material/button';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';



@NgModule({
    declarations : [
    ],
    imports : [
        AngularFireAuthModule,AngularFireDatabaseModule,
        MatDialogModule,
        MatButtonModule
       
    ],
    exports : [
       
    ],
    providers : [
        AuthService,
        UserService
    ]
})

export class AuthModule {}
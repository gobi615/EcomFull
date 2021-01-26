import { NgModule } from "@angular/core";
import { ProductComponent } from "./product/product.component";
import {CommonModule} from "@angular/common"
import { RouterModule } from "@angular/router";
import {HttpClientModule} from "@angular/common/http"
import { BookService } from "./books-service";
import {MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import { FilterBookComponent } from "./filter-book/filter-book.component";
import { MaterialModule } from "../material-module.module";
import { FormsModule } from "@angular/forms";
import { MatTooltipModule } from "@angular/material";



@NgModule({
    declarations : [
        ProductComponent,
    ],
    imports : [
        CommonModule,
        HttpClientModule,
        MatSliderModule,
        MatCardModule,
        RouterModule.forChild([]),
        MatGridListModule,
        MatButtonModule,
        MatIconModule, FormsModule, 
        MatTooltipModule
        // MatRadioModule
    ],
    exports : [
        ProductComponent
    ],
    providers : [
        BookService
    ]
})

export class CoreModule {}
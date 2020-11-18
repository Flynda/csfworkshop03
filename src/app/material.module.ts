import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

const MATERIAL = [ 
    MatToolbarModule, 
    MatTableModule, 
    MatInputModule, 
    MatRadioModule, 
    MatDatepickerModule,
    MatMomentDateModule,
    MatButtonModule,
    MatFormFieldModule
];

@NgModule({
    imports: MATERIAL,
    exports: MATERIAL
})

export class MaterialModule {}
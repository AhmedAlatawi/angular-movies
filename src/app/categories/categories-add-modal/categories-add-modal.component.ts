import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-categories-add-modal',
  templateUrl: './categories-add-modal.component.html',
  styleUrls: ['./categories-add-modal.component.scss']
})
export class CategoriesAddModalComponent {

  constructor(
    public dialogRef: MatDialogRef<CategoriesAddModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

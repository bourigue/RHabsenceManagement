import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import { HolidayService } from "../../all-holidays.service";
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from "@angular/forms";
import { AllHoliday } from "../../all-holidays.model";

@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.sass"],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  holidayForm: UntypedFormGroup;
  holiday: AllHoliday;
  holiday2: AllHoliday;
  hmfi:any;
  hmfo:any;
  hmli:any;
  hmlo:any;
  vvvv:Date;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public holidayService: HolidayService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === "edit") {
      this.dialogTitle = data.holiday.id;
      this.holiday = data.holiday;
    } else {
      this.dialogTitle = "New Holiday";
      this.holiday = new AllHoliday({});
    }
    this.holidayForm = this.createContactForm();
  }
  formControl = new UntypedFormControl("", [
    Validators.required,
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError("required")
      ? "Required field"
      : this.formControl.hasError("email")
      ? "Not a valid email"
      : "";
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.holiday.id],
      first_in: [this.holiday.first_in],
      first_out: [this.holiday.first_out],
      last_in: [this.holiday.last_in],
      last_out: [this.holiday.last_out],
      status: [this.holiday.status],
      date: [this.holiday.date],
      shift: [this.holiday.shift],
    
    });
  }
  savePost(){
    this.holidayService.createPost(this.holidayForm.getRawValue()).subscribe( data =>{
      console.log(data);
      },
    error => console.log(error));
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
  
  
 
   // console.log(this.hfi+":"+this.mfi);
   // console.log(this.formatDate(this.holidayForm.getRawValue() ["first_in"]));

    
   /* this.holiday2.setFirst_in(this.hfi+":"+this.mfi);
    this.holiday2.setFirst_out(this.holidayForm.getRawValue() ["first_out"]);
    this.holiday2.setLast_in(this.holidayForm.getRawValue() ["last_in"]);
    this.holiday2.setLast_out(this.holidayForm.getRawValue() ["last_out"]);
    this.holiday2.setStatus(this.holidayForm.getRawValue() ["status"]);
    this.holiday2.setShift(this.holidayForm.getRawValue() ["shift"]);
    this.holiday2.setDate(this.holidayForm.getRawValue() ["date"]);
    this.holiday2.first_in=this.hfi+":"+this.mfi;
    console.log(this.holiday2.first_in);*/
   
    //this.holiday2=new AllHoliday(this.holidayForm.getRawValue());
   // this.holiday2.first_in=this.hmfi;
    //console.log(this.holiday2.first_in+"hhhhhhhh");
   
   //this.vvvv=this.holidayForm.getRawValue()["first_in"];
   // this.formatDate(this.vvvv);

    this.holidayService.addHoliday(this.holidayForm.getRawValue());
  }
  public myFilter=(d:Date):any=>{
    this.hmfi= d.getHours();
    return true;
}


 formatDate(date: Date){
  console.log(date.getHours());

}

}

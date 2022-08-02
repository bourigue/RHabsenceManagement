import { formatDate } from "@angular/common";
export class AllHoliday {
  id: number;
 // hName: string;
  first_in: string;
  first_out: string;
  last_in: string;
  last_out: string;
  shift: string;
  date: string;
  status:string;
  total:string;
  
  constructor(holiday) {
    {
      this.id = null;
 
  //    this.hName = holiday.hName || "";
      this.first_in = holiday.first_in || "";
      this.first_out = holiday.first_out || "";
      this.last_in = holiday.last_in || "";
      this.last_out = holiday.last_out || "";
      this.total = holiday.total || "";
      this.status = holiday.status || "";
      this.shift = holiday.shift || "";
      this.date = formatDate(new Date(), "yyyy-MM-dd", "en") || "";
     
    }

    
  }
  

  setFirst_in(first_in:any){
    this.first_in=first_in
    }
  setFirst_out(first_out:any){
      this.first_out=first_out
      }
  setLast_in(last_in:any){
        this.last_in=last_in
        }
  setLast_out(last_out:any){
          this.last_out=last_out;
          }
  setStatus(Status:any){
            this.status=Status
            }
  setShift(shift:any){
              this.shift=shift
              }
   setDate(date:any){
                this.date=date
                }





  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
  setId(){
    this.id=null;
}
}

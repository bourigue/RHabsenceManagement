import { formatDate } from "@angular/common";
export class Today {
  id: number;
  img: string;
  name: string;
  first_in: string;
  breakk: string;
  last_out: string;
  total: string;
  status: string;
  shift: string;

 
  first_out: string;
  last_in: string;
  details: string;
  date: string;
  location: string;

  constructor(today) {
    {
      this.id = today.id || this.getRandomID();
      this.img = today.avatar || "assets/images/user/usrbig1.jpg";
      this.name = today.name || "";
      this.first_in = today.first_in || "";
      this.breakk = today.breakk || "";
      this.last_out = today.last_out || "";
      this.total = today.total || "";
      this.status = today.status || "";
      this.shift = today.shift || "";

      this.first_out = today.first_out || "";
      this.last_in = today.last_in || "";
      this.details = today.details || "";

      this.date = today.date || "";
      this.location = today.location || "";
     
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}

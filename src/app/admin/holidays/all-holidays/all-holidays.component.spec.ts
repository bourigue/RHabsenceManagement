import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AllHolidayComponent } from "./all-holidays.component";
describe("AllholidayComponent", () => {
  let component: AllHolidayComponent;
  let fixture: ComponentFixture<AllHolidayComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AllHolidayComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AllHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

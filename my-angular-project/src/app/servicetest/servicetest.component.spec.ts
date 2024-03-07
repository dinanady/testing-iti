import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicetestComponent } from './servicetest.component';
import { MyServiceService } from '../my-service.service';
import { CommonModule } from '@angular/common'; // Import CommonModule or any other module if needed

describe('ServicetestComponent', () => {
  let component: ServicetestComponent;
  let fixture: ComponentFixture<ServicetestComponent>;
  let nameservice: MyServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [], // Remove ServicetestComponent from declarations
      imports: [CommonModule], // Import any required modules
      providers: [MyServiceService] // Provide MyServiceService here
    }).compileComponents();

    fixture = TestBed.createComponent(ServicetestComponent);
    component = fixture.componentInstance;
    nameservice = TestBed.inject(MyServiceService);
    fixture.detectChanges();
  });

  it('should test ngOnInit logic', () => {
    spyOn(nameservice, 'getname');
    component.ngOnInit();
    expect(nameservice.getname).toHaveBeenCalled();
  });
});

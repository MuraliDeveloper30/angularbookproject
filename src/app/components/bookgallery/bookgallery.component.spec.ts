import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookgalleryComponent } from './bookgallery.component';

describe('BookgalleryComponent', () => {
  let component: BookgalleryComponent;
  let fixture: ComponentFixture<BookgalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookgalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

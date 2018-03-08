import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DjPlaylistComponent } from './dj-playlist.component';

describe('DjPlaylistComponent', () => {
  let component: DjPlaylistComponent;
  let fixture: ComponentFixture<DjPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DjPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {TestBed, inject} from '@angular/core/testing';
import {NotesDataService} from './notes-data.service';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NotesDataService,
      ]
    });
  });

  it('should ...', inject([NotesDataService], (service: NotesDataService) => {
    expect(service).toBeTruthy();
  }));

});

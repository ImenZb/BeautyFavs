import { TestBed } from '@angular/core/testing';

import { PostsPerProductService } from './posts-per-product.service';

describe('PostsPerProductService', () => {
  let service: PostsPerProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsPerProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

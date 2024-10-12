import { TestBed } from '@angular/core/testing';

import { SendMessageToChannelService } from './send-message-to-channel.service';

describe('SendMessageToChannelService', () => {
  let service: SendMessageToChannelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendMessageToChannelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

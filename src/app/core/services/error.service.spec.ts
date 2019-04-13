import { ErrorService, Error } from './error.service';
import { createService } from '@netbasal/spectator';


describe('ErrorService', () => {
  const spectator = createService<ErrorService>(ErrorService);

  it('should be created and push errors', () => {
    const someError = new Error('', 'test message');

    spectator.service.getAllErrors().subscribe(error => expect(error.message).toEqual('test message'));
    spectator.service.pushError(someError);
  });
});

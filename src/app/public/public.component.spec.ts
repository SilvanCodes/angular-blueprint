import { PublicComponent } from './public.component';
import { Spectator, createTestComponentFactory } from '@netbasal/spectator';
import { RouterTestingModule } from '@angular/router/testing';

describe('PublicComponent', () => {
  let spectator: Spectator<PublicComponent>;
  const createComponent = createTestComponentFactory({
    component: PublicComponent,
    imports: [RouterTestingModule]
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});

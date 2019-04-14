import { MemberComponent } from './member.component';
import { Spectator, createTestComponentFactory } from '@netbasal/spectator';
import { AuthService } from '../core/services/auth.service';

describe('MemberComponent', () => {
  let spectator: Spectator<MemberComponent>;
  const createComponent = createTestComponentFactory({
    component: MemberComponent,
    mocks: [AuthService]
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});

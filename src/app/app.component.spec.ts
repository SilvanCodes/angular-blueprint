import { Spectator, createTestComponentFactory } from '@netbasal/spectator';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let spectator: Spectator<AppComponent>;
  const createComponent = createTestComponentFactory(AppComponent);

  beforeEach(() => spectator = createComponent());

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });

  it(`should have as title 'blueprint'`, () => {
    expect(spectator.component.title).toEqual('blueprint');
  });

  it('should render title in a h1 tag', () => {
    expect(spectator.query('h1').textContent).toContain('Welcome to blueprint!');
  });
});

import { TabViewModule } from './tab-view.module';

describe('TabViewModule', () => {
  let tabViewModule: TabViewModule;

  beforeEach(() => {
    tabViewModule = new TabViewModule();
  });

  it('should create an instance', () => {
    expect(tabViewModule).toBeTruthy();
  });
});

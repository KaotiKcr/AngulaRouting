import { APMPage } from './app.po';

describe('apm App', function() {
  let page: APMPage;

  beforeEach(() => {
    page = new APMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

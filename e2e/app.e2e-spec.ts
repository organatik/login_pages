import { UpworkTestPage } from './app.po';

describe('upwork-test App', () => {
  let page: UpworkTestPage;

  beforeEach(() => {
    page = new UpworkTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

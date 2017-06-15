import { DailyAppPage } from './app.po';

describe('daily-app App', () => {
  let page: DailyAppPage;

  beforeEach(() => {
    page = new DailyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

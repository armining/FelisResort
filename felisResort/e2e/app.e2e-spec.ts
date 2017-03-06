import { FelisResortPage } from './app.po';

describe('felis-resort App', () => {
  let page: FelisResortPage;

  beforeEach(() => {
    page = new FelisResortPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

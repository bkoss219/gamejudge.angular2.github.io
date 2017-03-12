import { Gamejudge.Angular2.Github.IoPage } from './app.po';

describe('gamejudge.angular2.github.io App', () => {
  let page: Gamejudge.Angular2.Github.IoPage;

  beforeEach(() => {
    page = new Gamejudge.Angular2.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

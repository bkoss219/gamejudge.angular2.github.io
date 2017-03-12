import { browser, element, by } from 'protractor';

export class Gamejudge.Angular2.Github.IoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}

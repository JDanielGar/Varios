import { EventEmmiterPage } from './app.po';

describe('event-emmiter App', () => {
  let page: EventEmmiterPage;

  beforeEach(() => {
    page = new EventEmmiterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

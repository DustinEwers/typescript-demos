import { NinjasQuestPage } from './app.po';

describe('ninjas-quest App', function() {
  let page: NinjasQuestPage;

  beforeEach(() => {
    page = new NinjasQuestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

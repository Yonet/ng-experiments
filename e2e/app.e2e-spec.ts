import { NgExperimentsPage } from './app.po';

describe('ng-experiments App', () => {
  let page: NgExperimentsPage;

  beforeEach(() => {
    page = new NgExperimentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ay works!');
  });
});

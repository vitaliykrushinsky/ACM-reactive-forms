import { APMCLIFinalUpdatedPage } from './app.po';

describe('apm-cli-final-updated App', () => {
  let page: APMCLIFinalUpdatedPage;

  beforeEach(() => {
    page = new APMCLIFinalUpdatedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

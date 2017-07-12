import { PROJECTVIMEOAMAAKOULPage } from './app.po';

describe('project-vimeo-amaakoul App', () => {
  let page: PROJECTVIMEOAMAAKOULPage;

  beforeEach(() => {
    page = new PROJECTVIMEOAMAAKOULPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

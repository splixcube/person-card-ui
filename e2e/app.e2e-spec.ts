import { PersonCrudUiNewPage } from './app.po';

describe('person-crud-ui-new App', function() {
  let page: PersonCrudUiNewPage;

  beforeEach(() => {
    page = new PersonCrudUiNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

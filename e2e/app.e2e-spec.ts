import { InyeccionDependienciasPage } from './app.po';

describe('inyeccion-dependiencias App', function() {
  let page: InyeccionDependienciasPage;

  beforeEach(() => {
    page = new InyeccionDependienciasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { TestBed, async } from '@angular/core/testing';
import { ListaComprasComponent } from './app.component';

describe('ListaCompraComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListaComprasComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ListaComprasComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'listaDeLaCompra'`, () => {
    const fixture = TestBed.createComponent(ListaComprasComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.comprar).toEqual('listaDeLaCompra');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ListaComprasComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('listaDeLaCompra app is running!');
  });
});

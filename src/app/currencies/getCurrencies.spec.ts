import {getCurrencies} from './getCurrencies';

describe('getCurrencies', () => {
  it('Should return the supported currencies', () => {
    const result = getCurrencies();
    expect(getCurrencies()).toContain('USD');
    expect(getCurrencies()).toContain('AUD');
    expect(getCurrencies()).toContain('EUR');
  });
}); 
import { sum, mult } from '../calculator';

it('sould return the sum on numbs', () => {
    const res = sum(1, 1);
    expect(res).toEqual(2);
});

it('sould return Nan - no parameter passed', () => {
    const res = sum();
    expect(res).toEqual(NaN);
});

it('sould return res from mult munbs', () => {
    const res = mult(4, 2);
    expect(res).toEqual(8);
});

it('sould return res from mult munbs', () => {
    const res = mult(1, 0);
    expect(res).toEqual(0);
});
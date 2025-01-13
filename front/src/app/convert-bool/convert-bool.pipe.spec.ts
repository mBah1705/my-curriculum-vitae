import { ConvertBoolPipe } from './convert-bool.pipe';

describe('ConvertBoolPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertBoolPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display "skills-table.yes" for true value', () => {
    const pipe = new ConvertBoolPipe();
    expect(pipe.transform(true)).toBe('skills-table.yes');
  });

  it('should display "skills-table.no" for false value', () => {
    const pipe = new ConvertBoolPipe();
    expect(pipe.transform(false)).toBe('skills-table.no');
  });

  it('should display "skills-table.no" for undefined value', () => {
    const pipe = new ConvertBoolPipe();
    expect(pipe.transform(undefined)).toBe('skills-table.no');
  });
});

import { pluralize } from './pluralize';

describe('test pluralize', () => {
  it('should return correct word', () => {
    expect(
      pluralize(16, {
        one: 'билет',
        few: 'билета',
        many: 'билетов',
      }),
    ).toEqual('билетов');
  });

  it('should return correct word for other options', () => {
    expect(
      pluralize(0.5, {
        one: 'билет',
        few: 'билета',
        many: 'билетов',
        other: 'билетик',
      }),
    ).toEqual('билетик');
  });
});

import { pluralize } from './pluralize';

describe('test pluralize', () => {
  test('happy path', () => {
    expect(
      pluralize(16, {
        one: 'билет',
        few: 'билета',
        many: 'билетов',
      }),
    ).toEqual('билетов');
  });

  test('other', () => {
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

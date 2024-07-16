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
});

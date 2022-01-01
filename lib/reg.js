let count = 0;

const counter = {
  inncrement() {
    return ++count;
  },
  decrement() {
    return -count;
  },
  getCount() {
    return count;
  },
};

Object.freeze(counter);
export {counter};

test('increment 1 time should be 1', () => {
  counter.inncrement;
  expects(counter.getCount()).toBe(1);
});

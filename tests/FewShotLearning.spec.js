// tests/FewShotLearning.spec.js

import FewShotLearning from '../src/utils/FewShotLearning';

describe('FewShotLearning', () => {
  let fewShot;

  beforeEach(() => {
    fewShot = new FewShotLearning();
  });

  test('should throw an error if predict is called before training', () => {
    expect(() => fewShot.predict('test')).toThrow('Model has not been trained.');
  });

  test('should train the model with a single element dataset', () => {
    const dataset = ['apple'];
    fewShot.train(dataset);
    expect(fewShot.predict('apple')).toBe('apple');
  });

  test('should train the model with a multi-element dataset', () => {
    const dataset = ['apple', 'banana', 'cherry'];
    fewShot.train(dataset);
    expect(fewShot.predict('banana')).toBe('apple'); // As per the current model logic
  });

  test('should return the first element of the dataset as prediction', () => {
    const dataset = ['first', 'second', 'third'];
    fewShot.train(dataset);
    expect(fewShot.predict('any')).toBe('first');
  });

  test('should handle different types of data', () => {
    const dataset = [1, 2, 3];
    fewShot.train(dataset);
    expect(fewShot.predict(2)).toBe(1);

    const dataset2 = [{ key: 'value' }, { key: 'another' }];
    fewShot.train(dataset2);
    expect(fewShot.predict({ key: 'test' })).toEqual({ key: 'value' });
  });
});

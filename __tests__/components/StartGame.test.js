import 'react-native';
import 'react-vr';
import React from 'react';
import StartGame from '../../vr/components/StartGame.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<StartGame />).toJSON();
  expect(tree).toMatchSnapshot();
});

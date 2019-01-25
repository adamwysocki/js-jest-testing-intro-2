import React from 'react';
import renderer from 'react-test-renderer';

import Index from '../../pages/index';

/** test the index page */
describe("Integration tests", () => {
    it('should match a snapshot', () => {
        const component = renderer.create(<Index />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});


import React from 'react';
import { shallow, mount } from 'enzyme';

import Index from '../../pages/index';

describe("Enzyme tests", () => {
    it('Should render correctly with no props', () => {
        const component = shallow(<Index />);
        expect(component).toMatchSnapshot();
    });

    it('Should change to spanish when language is toggled to true', () => {
        const component = mount(<Index />);
        component
            .find('input[type="checkbox"]')
            .simulate('change', {currentTarget: {checked: true}});

        expect(component).toMatchSnapshot();
        component.unmount();
    });
});
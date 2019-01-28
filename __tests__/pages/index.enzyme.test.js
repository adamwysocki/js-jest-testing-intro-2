import React from 'react';
import { shallow, mount } from 'enzyme';

import Index from '../../pages/index';

describe("Enzyme tests", () => {
    it('Should render correctly with no props', () => {
        const component = shallow(<Index />);
        expect(component).toMatchSnapshot();
    });

    it('Should change to spanish when language checkbox is toggled to true', () => {
        const component = mount(<Index />);
        component
            .find('input[type="checkbox"]')
            .simulate('change', {currentTarget: {checked: true}});

        expect(component).toMatchSnapshot();
        component.unmount();
    });

    it('Should update the welcome header when a name is typed', () => {
        const component = mount(<Index />);

        const input = component.find("input#name");

        input.instance().value = "adam wysocki";
        input.simulate('change');

        expect(component).toMatchSnapshot();
        component.unmount();
    });

    it('Should update the welcome header when a name is typed and language checkbox is toggled to true', () => {
        const component = mount(<Index />);

        component
          .find('input[type="checkbox"]')
          .simulate('change', {currentTarget: {checked: true}});

        const input = component.find("input#name");

        input.instance().value = "adam wysocki";
        input.simulate('change');

        expect(component).toMatchSnapshot();
        component.unmount();
    });
});
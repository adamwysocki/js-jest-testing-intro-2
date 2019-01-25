import { properCase } from '../../util';

/** test the properCase function */
describe('Unit tests for properCase util function', () => {
    it('should proper case a name', () => {
        const name = "adam wysocki";
        expect(properCase(name)).toBe("Adam Wysocki");
    });
    
    it('should proper case a name with a single word', () => {
        const name = "madonna";
        expect(properCase(name)).toBe("Madonna");
    });
    
    it('shoud proper case a name with more than two words', () => {
        const name = "john jacob jingleheimer schmidt";
        expect(properCase(name)).toBe("John Jacob Jingleheimer Schmidt");
    });
    
    it('should return null if passed null', () => {
        const name = null;
        expect(properCase(name)).toBeNull();
    });

    it('should match a snapshot', () => {
        const name = "miley cyrus";
        const properCasedName = properCase(name);
        expect(properCasedName).toMatchSnapshot();
    });
});

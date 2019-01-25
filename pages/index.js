/** import function for proper casing names */
import { properCase } from '../util';

/**
 * @function Index
 * @description renders an index page
 */
const Index = () => {
    const name = "adam wysocki";
    return(
        <h1>Hello {properCase(name)}!</h1>
    );
};

export default Index;
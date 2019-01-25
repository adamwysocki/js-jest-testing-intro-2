/**
 * @function properCase
 * @description - function for proper casing names
 * @param {string} name - the name to be proper cased
 * @returns {string} - the proper cased name
 */
export const properCase = (name) => {
    if(!name) return name;
    return name.split(" ").map( (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}
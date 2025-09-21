/**
 * **DESCRIPTION:**
 * 
 * With this function we can set the route of we are on the window
 * only on the test.
 * 
 * **PARAMETERS:**
 * 
 * @param newLink With this property you can set on the test 
 * on what route we are.
 * 
 * **EXAMPLE OF USE:**
 * 
 * @example
 * setRouteTo("/");
 */
export const setRouteTo = (newLink: string) => {
    window.history.pushState({}, '', newLink);
}
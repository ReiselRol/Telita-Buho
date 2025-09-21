import { setRouteTo } from "./setRouteTo"

/**
 * **DESCRIPTION:**
 * 
 * With this function we can set the route of we are on the window
 * to '/' only on the test.
 * 
 * **EXAMPLE OF USE:**
 * 
 * @example
 * resetRoute();
 */
export const resetRoute = () => {
    setRouteTo('/');
}
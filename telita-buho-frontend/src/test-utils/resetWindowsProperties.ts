import { resetRoute } from "./resetRoute";
import { resetScreenWidth } from "./resetScreenWidth"

/**
 * **DESCRIPTION:**
 * 
 * With this test util we can reset all the windows properties
 * that we can change for use the default ones.
 * 
 * **EXAMPLE OF USE:**
 * 
 * @example
 * afterEach(() => {
 *  resetWindowsProperties();
 * })
 */
export const resetWindowsProperties = () => {
    resetScreenWidth();
    resetRoute();
}
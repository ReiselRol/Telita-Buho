/**
 * **DESCRIPTION:**
 * 
 * With this method we can get the route of we are on the window
 * only on the test.
 * 
 * **RETURNS:**
 * 
 * @returns returns an string that is the actual path on the windows on tests.
 * 
 * **EXAMPLE OF USE:**
 * 
 * @example
 * const path = getCurrentRoute();
 */
export const getCurrentRoute = () => {
  return window.location.pathname;
};
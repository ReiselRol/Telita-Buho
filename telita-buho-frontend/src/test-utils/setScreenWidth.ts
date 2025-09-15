
/**
 * **DESCRIPTION:**
 * 
 * With this functionwe can set the size that have the window
 * when we a re testing it.
 * 
 * **PARAMETERS:**
 * 
 * @param width With this property you can set on the test 
 * how much width have the screen.
 * 
 * **EXAMPLE OF USE:**
 * 
 * @example
 * setScreenWidth(768);
 */
export const setScreenWidth = (width: number) => {

  window.innerWidth = width;

  window.matchMedia = window.matchMedia || function (query) {
    return {
      matches: query.includes(`max-width: ${width}px`),
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  };

  window.dispatchEvent(new Event('resize'));
}

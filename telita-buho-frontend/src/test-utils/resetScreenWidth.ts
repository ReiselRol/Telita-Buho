import { DefaultScreenInnerWidth } from "../constants/DefaultScreenInnerWidth"
import { setScreenWidth } from "./setScreenWidth"

/**
 * **DESCRIPTION:**
 * 
 * With this functionwe can set the size that have the window
 * to the default size.
 * 
 * **EXAMPLE OF USE:**
 * 
 * @example
 * resetScreenWidth();
 */
export const resetScreenWidth = () => {
    setScreenWidth(DefaultScreenInnerWidth);
}
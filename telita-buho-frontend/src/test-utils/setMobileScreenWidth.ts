import { DefaultMobileScreenWidth } from "../constants/DefaultMobileScreenWidth"
import { setScreenWidth } from "./setScreenWidth"

/**
 * **DESCRIPTION:**
 * 
 * With this functionwe can set the size that have the window
 * to the default mobile size.
 * 
 * **EXAMPLE OF USE:**
 * 
 * @example
 * setMobileScreenWidth();
 */
export const setMobileScreenWidth = () => {
    setScreenWidth(DefaultMobileScreenWidth);
}
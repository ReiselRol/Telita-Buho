import { type FC } from 'react';
import './ShopPage.css';
import { AppNavigator } from '../AppNavigator/AppNavigator';

/**
 * **PROPERTIES OF APP COMPONENT:**
 * 
 * This interface currently have 0 properties but if you add any property 
 * you must document it and type it correctly for the usability of the component.
 * 
 */
interface ShopPageProps {

}

/**
 * **DESCRIPTION:**
 * 
 * With this component you can render the section
 * of the aplication of telita buho about the page of
 * Shop.
 * 
 * This Page cotains the AppNavigator component for
 * have the access to other parts of the telita buho
 * site.
 * 
 * It's important to know that this component need to be inside of
 * the Provider that is using the store od *AppStore* because is
 * using properties from the state like the language.
 * 
 * It's important to know that this component need to be inside of
 * the Provider that is using the BrowseRouter too because we need
 * to know on what path we are actually.
 * 
 * **EXAMPLE OF USE:**
 * @example
 * return (
 *   <ShopPage/>
 * )
 */
export const ShopPage: FC<ShopPageProps> = ({ }) => {

  return (
    <AppNavigator>
      <div data-testid='ShopPage-Component'>
        Entry Point for ShopPage component. Good Luck!
      </div>
    </AppNavigator>
  )
}

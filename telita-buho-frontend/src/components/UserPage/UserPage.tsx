import { type FC } from 'react';
import './UserPage.css';
import { AppNavigator } from '../AppNavigator/AppNavigator';

/**
 * **PROPERTIES OF APP COMPONENT:**
 * 
 * This interface currently have 0 properties but if you add any property 
 * you must document it and type it correctly for the usability of the component.
 * 
 */
interface UserPageProps {

}

/**
 * **DESCRIPTION:**
 * 
 * With this component you can render the section
 * of the aplication of telita buho about the page of
 * User.
 * 
 * This Page cotains the AppNavigator component for
 * have the access to other parts of the telita buho
 * site.
 * 
 * If you try to access to this component without any
 * use logged it will redirect you to the LoginPage
 * component.
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
 *   <UserPage/>
 * )
 */
export const UserPage: FC<UserPageProps> = ({ }) => {

  return (
    <AppNavigator>
      <div data-testid='UserPage-Component'>
        Entry Point for UserPage component. Good Luck!
      </div>
    </AppNavigator>
  )
}

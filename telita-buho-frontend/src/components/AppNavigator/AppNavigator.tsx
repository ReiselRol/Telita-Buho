import { type FC, type ReactNode } from 'react';
import './AppNavigator.css';
import { Navbar } from '../Navbar/Navbar';

/**
 * **PROPERTIES OF APP COMPONENT:**
 * 
 * With this interface you can refer of what properties
 * need to pass to the component to function like in need
 * to be.
 */
interface AppNavigatorProps {
  /**
   * With this property you can pass the content that need to be
   * displayed under the header or before the header in case of
   * being displayed on a mobile.
   */
  children?: ReactNode
}

/**
 * **DESCRIPTION:**
 * 
 * With this component you can render the header with the header
 * options up or down depending of what dispositive you are on,
 * on mobil will display the header on the top and on the bigger
 * screens like the Pc's one.
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
 *   <AppNavigator>
 *     <div>
 *       Your content :)
 *     </div>
 *   </AppNavigator>
 * )
 */
export const AppNavigator: FC<AppNavigatorProps> = ({ children }) => {

  return (
    <div data-testid='AppNavigator-Component'>
      <Navbar />
      <div data-testid='AppNavigator-Content' className='AppNavigator-Content-styles'>
        {children}
      </div>
    </div>
  )
}

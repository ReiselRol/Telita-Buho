import { type FC } from 'react';
import './AboutUsPage.css';

/**
 * **PROPERTIES OF APP COMPONENT:**
 * 
 * This interface currently have 0 properties but if you add any property 
 * you must document it and type it correctly for the usability of the component.
 * 
 */
interface AboutUsPageProps {

}

/**
 * **DESCRIPTION:**
 * 
 * With this component you can render the section
 * of the aplication of telita buho about the page of
 * Abput us.
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
 *   <AboutUsPage/>
 * )
 */
export const AboutUsPage: FC<AboutUsPageProps> = ({ }) => {

  return (
    <div data-testid='AboutUsPage-Component'>
      Entry Point for AboutUsPage component. Good Luck!
    </div>
  )
}

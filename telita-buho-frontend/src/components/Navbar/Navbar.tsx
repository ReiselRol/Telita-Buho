import { type FC } from 'react';
import './Navbar.css';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';

/**
 * **PROPERTIES OF APP COMPONENT:**
 * 
 * This interface currently have 0 properties but if you add any property 
 * you must document it and type it correctly for the usability of the component.
 * 
 */
interface NavbarProps {

}

/**
 * **DESCRIPTION:**
 * 
 * With this component we can render the navbar of the telita buho
 * app. On the anner you can see the Logo and some menus for navigate
 * easily on the App. ON mobil the navbar will move to the bottom and
 * when the aplication is on the desktop it will appear on the top of
 * the page.
 * 
 * The transition will have som trail that depends on the direction that
 * is the navbar is moving on.
 * 
 * It's important to know that this component need to be inside of
 * the Provider that is using the store od *AppStore* because is
 * using properties from the state like the language.
 * 
 * It's important to know that this component need to be inside of
 * the Provider that is using the BrowseRouter too because we need
 * to know on what path we are actually.
 * **EXAMPLE OF USE:**
 * @example
 * return (
 *   <Navbar/>
 * )
 */
export const Navbar: FC<NavbarProps> = ({ }) => {

  return (
    <div data-testid='Navbar-Component' className='Navbar-styles'>
      <table className='Navbar-table'>
        <tbody>
          <tr>
            <td>Logo</td>
            <td>Inicio</td>
            <td>Tienda</td>
            <td>Crear mi producto</td>
            <td>Sobre nosotros</td>
            <td><LanguageSelector/></td>
            <td>Usuario</td>
          </tr>
        </tbody>
      </table>
    </div >
  )
}

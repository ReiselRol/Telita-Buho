import { Provider } from 'react-redux';
import { AppStore } from '../../redux/AppStore';
import { type FC } from 'react';
import './App.css';

/**
 * **PROPERTIES OF APP COMPONENT:**
 * 
 * This interface currently have 0 properties but if you add any property 
 * you must document it and type it correctly for the usability of the component.
 * 
 */
interface AppProps {

}

/**
 * **DESCRIPTION:**
 * 
 * With this Component you can render all the app of the telita-buho
 * frontend services.
 * 
 * **EXAMPLE OF USE:**
 * @example
 * return (
 *   <App/>
 * )
 * 
 * @returns return the initial point of the telita-buho frontend project.
 */
export const App: FC<AppProps> = ({ }) => {

  return (
    <Provider store={AppStore}>
      <div data-testid='App-Component'>
        Entry Point. Good Luck with the project of telita-buho
      </div>
    </Provider>
  )
}

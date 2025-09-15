import { Provider } from 'react-redux';
import { AppStore } from '../../redux/AppStore';
import { type FC } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppNavigator } from '../AppNavigator/AppNavigator';

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
 * frontend services. This components contains the browser-router
 * and the store for the redux state.
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
      <BrowserRouter>
        <div data-testid='App-Component' className='App-styles'>
          <AppNavigator/>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

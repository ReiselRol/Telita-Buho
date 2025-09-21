import { Provider } from 'react-redux';
import { AppStore } from '../../redux/AppStore';
import { type FC } from 'react';
import './App.css';
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom';
import { AppRoutes } from '../../constants/AppRoutes';
import { ShopPage } from '../ShopPage/ShopPage';
import { HomePage } from '../HomePage/HomePage';
import { AboutUsPage } from '../AboutUsPage/AboutUsPage';
import { RegisterPage } from '../RegisterPage/RegisterPage';
import { LoginPage } from '../LoginPage/LoginPage';
import { UserPage } from '../UserPage/UserPage';

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
          <Routes>
            <Route path={AppRoutes.HomePage} element={<HomePage />} />
            <Route path={AppRoutes.ShopPage} element={<ShopPage />} />
            <Route path={AppRoutes.AboutUsPage} element={<AboutUsPage />} />
            <Route path={AppRoutes.RegisterPage} element={<RegisterPage />} />
            <Route path={AppRoutes.LoginPage} element={<LoginPage />} />
            <Route path={AppRoutes.UserPage + ':id'} element={<UserPage />} />
            <Route path="*" element={<Navigate to={AppRoutes.HomePage} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

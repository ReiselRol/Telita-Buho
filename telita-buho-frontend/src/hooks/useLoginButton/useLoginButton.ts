import { useNavigate } from "react-router-dom"
import { AppRoutes } from "../../constants/AppRoutes";

/**
 * **DESCRIPTION:**
 * 
 * With this interface we can represent the return of the
 * custom hook of the useLoginButton, that this custom
 * hook will return only one property that an object of this
 * type that contains one property called `goToLogin`. With that
 * property you can call it because is a function and it will+
 * redirect to the login page
 */
interface UseLoginButtonReturn {
    /**
   * **DESCRIPTION:**
   * 
   * With this function you can navihgate to the url /login/
   *
   * **EXAMPLE OF USE:**
   * 
   * @example
   * const { goToLogin } = useLoginButton({});
   * goToLogin();
   */
    goToLogin: () => void;
}

/** * **DESCRIPTION:**
 * 
 * This interface currently have 0 properties but if you add any property
 * you must document it and type it correctly for the usability of the custom hook.
 */
interface UseLoginButtonProps {

}

/**
 * **DESCRIPTION:**
 * 
 * With this customhoom you gonna recive an object with the
 * property of `goToLogin` that is a function that redirect you
 * to the url /login/
 * 
 * **RETURNS:**
 * 
 * @returns returns an object with the properties of: 
 * * `goToLogin`: with this property that is a function you can call it to navigate to
 * /login/ url.
 * 
 * **EXAMPLE OF USE:**
 * 
 * @example
 * const { goToLogin } = useLoginButton({}); 
 * goToLogin();
 */
export const useLoginButton = ({ }: UseLoginButtonProps): UseLoginButtonReturn => {

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate(AppRoutes.LoginPage);
    }

    return {
        goToLogin
    }

}

import { useLoginButton } from '../../hooks/useLoginButton/useLoginButton';
import { type FC } from 'react';
import './LoginButton.css';

/**
 * **PROPERTIES OF APP COMPONENT:**
 * 
 * This interface currently have 0 properties but if you add any property 
 * you must document it and type it correctly for the usability of the component.
 * 
 */
interface LoginButtonProps {

}

/**
 * **DESCRIPTION:**
 * 
 * With this component we can render a button that if we click on it we gonna
 * go to the url of /login/.
 * 
 * **EXAMPLE OF USE:**
 * @example
 * return (
 *   <LoginButton/>
 * )
 */
export const LoginButton: FC<LoginButtonProps> = ({ }) => {

  const { goToLogin } = useLoginButton({});

  return (
    <button data-testid='LoginButton-Component' onClick={goToLogin}>
      Login
    </button>
  )
}

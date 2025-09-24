import { type FC } from 'react';
import './UserButton.css';
import { LoginButton } from '../LoginButton/LoginButton';

/**
 * **PROPERTIES OF APP COMPONENT:**
 * 
 * This interface currently have 0 properties but if you add any property 
 * you must document it and type it correctly for the usability of the component.
 * 
 */
interface UserButtonProps {

}

/**
 * **DESCRIPTION:**
 * 
 * With this component we can render what button we want to load
 * depending if we have user or not logged in.
 * 
 * **EXAMPLE OF USE:**
 * @example
 * return (
 *   <UserButton/>
 * )
 */
export const UserButton: FC<UserButtonProps> = ({ }) => {

  return (
    <div data-testid='UserButton-Component'>
      <LoginButton/>
    </div>
  )
}

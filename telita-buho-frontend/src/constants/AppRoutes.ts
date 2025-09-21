/**
 * **DESCRIPTION:**
 * 
 * With this constant you can get all
 * the routes for navigate on the app.
 * 
 * **EXAMPLE OF USE:**
 * 
 * @example
 * const HomeRoute = AppRoutes.HomePage;
 * const AboutUsRoute = AppRoutes.AboutUsPage;
 * const UserRoute = AppRoutes.UserPage;
 * const ShopRoute = AppRoutes.ShopPage;
 * const LoginRoute = AppRoutes.LoginPage;
 * const RegisterRoute = AppRoutes.RegisterPage;
 */
export const AppRoutes = {
    /**
     * With this property you can get the values of the Home page route
     */
    HomePage: '/',
    /**
     * With this property you can get the values of the About Us page route
     */
    AboutUsPage: '/about-us/',
    /**
     * With this property you can get the values of the Shop page route
     */
    ShopPage: '/shop/',
    /**
     * With this property you can get the values of the User page route
     */
    UserPage: '/user/',
    /**
     * With this property you can get the values of the Login page route
     */
    LoginPage: '/login/',
    /**
     * With this property you can get the values of the Register page route
     */
    RegisterPage: '/register/',
} as const;
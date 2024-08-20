import { Route, Routes } from "react-router-dom"
import routes from "../Constants/Routes"
import Home from "../pages/home/Home"
// import Cart from "../pages/cart/Cart"
import { WithHeader } from "./WithHeader"
import Cart from "../pages/cart/Cart"
import Shops from "../pages/shops/shops"
import MyAccount from "../pages/MyAccount/MyAccount"
import PrivateRoutes from "./PrivateRoutes"
import Chechout from "../pages/checkout/Chechout"
import Error from "../pages/Error/Error"

const PublicRoutes: React.FC = () => {
    const isAuthenticated = true;
    return (
        <div>
            <Routes>
                <Route
                    path={routes.HOME}
                    element={<WithHeader component={Home} route={routes.HOME} isAuthenticated={isAuthenticated} />}
                />
                <Route
                    path={routes.CART}
                    element={<WithHeader component={Cart} route={routes.CART} isAuthenticated={isAuthenticated} />}
                />
                <Route
                    path={routes.SHOPS}
                    element={<WithHeader component={Shops} route={routes.SHOPS} isAuthenticated={isAuthenticated} />}
                />
                {/* <Route
                    path={routes.ERROR}
                    element={<WithHeader component={Error} route={routes.ERROR} isAuthenticated={isAuthenticated} />}
                /> */}
                 <Route
                    path="*"
                    element={<WithHeader component={Error} route={routes.ERROR} isAuthenticated={isAuthenticated} />}
                />
                {/*  PRIVATE ROUTES  */}
                <Route
                    element={<PrivateRoutes isAuthenticated={isAuthenticated} />}
                >
                    <Route
                        path={routes.MYACCOUNT}
                        element={<WithHeader component={MyAccount} route={routes.MYACCOUNT} isAuthenticated={isAuthenticated} />}
                    />
                    <Route
                        path={routes.CHECKOUT}
                        element={<WithHeader component={Chechout} route={routes.CHECKOUT} isAuthenticated={isAuthenticated} />}
                    />
                </Route>
            </Routes>
        </div>
    )
}
export default PublicRoutes;

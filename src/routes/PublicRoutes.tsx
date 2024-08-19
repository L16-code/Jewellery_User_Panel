import { Route, Routes } from "react-router-dom"
import routes from "../Constants/Routes"
import Home from "../pages/home/Home"
import Cart from "../pages/cart/Cart"

const PublicRoutes: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path={routes.HOME} element={<Home/>} />
                <Route path={routes.CART} element={<Cart/>} />
                <Route path={routes.HOME} element={<Home/>} />


            </Routes>
        </div>
    )
}
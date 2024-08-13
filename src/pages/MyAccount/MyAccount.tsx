import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import ScrollTop from "../../components/scrollTop/ScrollTop"
import Preloader from "../../components/preloader/Preloader"
import { useEffect, useState } from "react"

const MyAccount = () => {
    const [Loading, SetLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            SetLoading(false)
        }, 1000);

        return () => clearTimeout(timer);
    })
    return (
        <>
            {
                Loading && <Preloader />
            }
            <Header />
            <main className="main__content_wrapper">
                {/* Start breadcrumb section */}
                <div className="breadcrumb__section breadcrumb__bg">
                    <div className="container">
                        <div className="row row-cols-1">
                            <div className="col">
                                <div className="breadcrumb__content text-center">
                                    <ul className="breadcrumb__content--menu d-flex justify-content-center">
                                        <li className="breadcrumb__content--menu__items">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li className="breadcrumb__content--menu__items">
                                            <span>My Account</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End breadcrumb section */}
                {/* my account section start */}
                <section className="my__account--section section--padding">
                    <div className="container">
                        <p className="account__welcome--text">
                            Hello, Admin welcome to your dashboard!
                        </p>
                        <div className="my__account--section__inner border-radius-10 d-flex">
                            <div className="account__left--sidebar">
                                <h2 className="account__content--title mb-20">My Profile</h2>
                                <ul className="account__menu">
                                    <li className="account__menu--list active">
                                        <a href="my-account.html">Dashboard</a>
                                    </li>
                                    <li className="account__menu--list">
                                        <a href="my-account-2.html">Addresses</a>
                                    </li>
                                    <li className="account__menu--list">
                                        <a href="wishlist.html">Wishlist</a>
                                    </li>
                                    <li className="account__menu--list">
                                        <a href="login.html">Log Out</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="account__wrapper">
                                <div className="account__content">
                                    <h2 className="account__content--title h3 mb-20">Orders History</h2>
                                    <div className="account__table--area">
                                        <table className="account__table">
                                            <thead className="account__table--header">
                                                <tr className="account__table--header__child">
                                                    <th className="account__table--header__child--items">
                                                        Order
                                                    </th>
                                                    <th className="account__table--header__child--items">
                                                        Date
                                                    </th>
                                                    <th className="account__table--header__child--items">
                                                        Payment Status
                                                    </th>
                                                    <th className="account__table--header__child--items">
                                                        Fulfillment Status
                                                    </th>
                                                    <th className="account__table--header__child--items">
                                                        Total
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="account__table--body mobile__none">
                                                <tr className="account__table--body__child">
                                                    <td className="account__table--body__child--items">
                                                        #2014
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        November 24, 2022
                                                    </td>
                                                    <td className="account__table--body__child--items">Paid</td>
                                                    <td className="account__table--body__child--items">
                                                        Unfulfilled
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        $40.00 USD
                                                    </td>
                                                </tr>
                                                <tr className="account__table--body__child">
                                                    <td className="account__table--body__child--items">
                                                        #2024
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        November 24, 2022
                                                    </td>
                                                    <td className="account__table--body__child--items">Paid</td>
                                                    <td className="account__table--body__child--items">
                                                        Fulfilled
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        $44.00 USD
                                                    </td>
                                                </tr>
                                                <tr className="account__table--body__child">
                                                    <td className="account__table--body__child--items">
                                                        #2164
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        November 24, 2022
                                                    </td>
                                                    <td className="account__table--body__child--items">Paid</td>
                                                    <td className="account__table--body__child--items">
                                                        Unfulfilled
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        $36.00 USD
                                                    </td>
                                                </tr>
                                                <tr className="account__table--body__child">
                                                    <td className="account__table--body__child--items">
                                                        #2345
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        November 24, 2022
                                                    </td>
                                                    <td className="account__table--body__child--items">Paid</td>
                                                    <td className="account__table--body__child--items">
                                                        Unfulfilled
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        $87.00 USD
                                                    </td>
                                                </tr>
                                                <tr className="account__table--body__child">
                                                    <td className="account__table--body__child--items">
                                                        #1244
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        November 24, 2022
                                                    </td>
                                                    <td className="account__table--body__child--items">Paid</td>
                                                    <td className="account__table--body__child--items">
                                                        Fulfilled
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        $66.00 USD
                                                    </td>
                                                </tr>
                                                <tr className="account__table--body__child">
                                                    <td className="account__table--body__child--items">
                                                        #3455
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        November 24, 2022
                                                    </td>
                                                    <td className="account__table--body__child--items">Paid</td>
                                                    <td className="account__table--body__child--items">
                                                        Fulfilled
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        $55.00 USD
                                                    </td>
                                                </tr>
                                                <tr className="account__table--body__child">
                                                    <td className="account__table--body__child--items">
                                                        #4566
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        November 24, 2022
                                                    </td>
                                                    <td className="account__table--body__child--items">Paid</td>
                                                    <td className="account__table--body__child--items">
                                                        Unfulfilled
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        $87.00 USD
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody className="account__table--body mobile__block">
                                                <tr className="account__table--body__child">
                                                    <td className="account__table--body__child--items">
                                                        <strong>Order</strong>
                                                        <span>#2014</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Date</strong>
                                                        <span>November 24, 2022</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Payment Status</strong>
                                                        <span>Paid</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Fulfillment Status</strong>
                                                        <span>Unfulfilled</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Total</strong>
                                                        <span>$40.00 USD</span>
                                                    </td>
                                                </tr>
                                                <tr className="account__table--body__child">
                                                    <td className="account__table--body__child--items">
                                                        <strong>Order</strong>
                                                        <span>#2014</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Date</strong>
                                                        <span>November 24, 2022</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Payment Status</strong>
                                                        <span>Paid</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Fulfillment Status</strong>
                                                        <span>Unfulfilled</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Total</strong>
                                                        <span>$40.00 USD</span>
                                                    </td>
                                                </tr>
                                                <tr className="account__table--body__child">
                                                    <td className="account__table--body__child--items">
                                                        <strong>Order</strong>
                                                        <span>#2014</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Date</strong>
                                                        <span>November 24, 2022</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Payment Status</strong>
                                                        <span>Paid</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Fulfillment Status</strong>
                                                        <span>Unfulfilled</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Total</strong>
                                                        <span>$40.00 USD</span>
                                                    </td>
                                                </tr>
                                                <tr className="account__table--body__child">
                                                    <td className="account__table--body__child--items">
                                                        <strong>Order</strong>
                                                        <span>#2014</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Date</strong>
                                                        <span>November 24, 2022</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Payment Status</strong>
                                                        <span>Paid</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Fulfillment Status</strong>
                                                        <span>Unfulfilled</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Total</strong>
                                                        <span>$40.00 USD</span>
                                                    </td>
                                                </tr>
                                                <tr className="account__table--body__child">
                                                    <td className="account__table--body__child--items">
                                                        <strong>Order</strong>
                                                        <span>#2014</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Date</strong>
                                                        <span>November 24, 2022</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Payment Status</strong>
                                                        <span>Paid</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Fulfillment Status</strong>
                                                        <span>Unfulfilled</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Total</strong>
                                                        <span>$40.00 USD</span>
                                                    </td>
                                                </tr>
                                                <tr className="account__table--body__child">
                                                    <td className="account__table--body__child--items">
                                                        <strong>Order</strong>
                                                        <span>#2014</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Date</strong>
                                                        <span>November 24, 2022</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Payment Status</strong>
                                                        <span>Paid</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Fulfillment Status</strong>
                                                        <span>Unfulfilled</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Total</strong>
                                                        <span>$40.00 USD</span>
                                                    </td>
                                                </tr>
                                                <tr className="account__table--body__child">
                                                    <td className="account__table--body__child--items">
                                                        <strong>Order</strong>
                                                        <span>#2014</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Date</strong>
                                                        <span>November 24, 2022</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Payment Status</strong>
                                                        <span>Paid</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Fulfillment Status</strong>
                                                        <span>Unfulfilled</span>
                                                    </td>
                                                    <td className="account__table--body__child--items">
                                                        <strong>Total</strong>
                                                        <span>$40.00 USD</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* my account section end */}
                {/* Start feature section */}
                <section className="feature__section section--padding pt-0">
                    <div className="container">
                        <div className="feature__inner d-flex justify-content-between">
                            <div className="feature__items d-flex align-items-center">
                                <div className="feature__icon">
                                    <img src="assets/img/other/feature1.webp" alt="img" />
                                </div>
                                <div className="feature__content">
                                    <h2 className="feature__content--title h3">Free Shipping</h2>
                                    <p className="feature__content--desc">Free shipping over $100</p>
                                </div>
                            </div>
                            <div className="feature__items d-flex align-items-center">
                                <div className="feature__icon ">
                                    <img src="assets/img/other/feature2.webp" alt="img" />
                                </div>
                                <div className="feature__content">
                                    <h2 className="feature__content--title h3">Support 24/7</h2>
                                    <p className="feature__content--desc">Contact us 24 hours a day</p>
                                </div>
                            </div>
                            <div className="feature__items d-flex align-items-center">
                                <div className="feature__icon">
                                    <img src="assets/img/other/feature3.webp" alt="img" />
                                </div>
                                <div className="feature__content">
                                    <h2 className="feature__content--title h3">100% Money Back</h2>
                                    <p className="feature__content--desc">You have 30 days to Return</p>
                                </div>
                            </div>
                            <div className="feature__items d-flex align-items-center">
                                <div className="feature__icon">
                                    <img src="assets/img/other/feature4.webp" alt="img" />
                                </div>
                                <div className="feature__content">
                                    <h2 className="feature__content--title h3">Payment Secure</h2>
                                    <p className="feature__content--desc">We ensure secure payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End feature section */}
            </main>

            <Footer />
            <ScrollTop />

        </>
    )
}

export default MyAccount

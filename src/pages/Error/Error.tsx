import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import ScrollTop from "../../components/scrollTop/ScrollTop"
import Preloader from "../../components/preloader/Preloader"
import { useEffect, useState } from "react"
const Error = () => {
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
                                            <span>Error 404</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End breadcrumb section */}
                {/* Start error section */}
                <section className="error__section section--padding">
                    <div className="container">
                        <div className="row row-cols-1">
                            <div className="col">
                                <div className="error__content text-center">
                                    <img
                                        className="error__content--img display-block mb-50"
                                        src="assets/img/other/404-thumb.webp"
                                        alt="error-img"
                                    />
                                    <h2 className="error__content--title">
                                        Opps ! We,ar Not Found This Page{" "}
                                    </h2>
                                    <p className="error__content--desc">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Excepturi animi aliquid minima assumenda.
                                    </p>
                                    <a className="error__content--btn primary__btn" href="index.html">
                                        Back To Home
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End error section */}
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

export default Error

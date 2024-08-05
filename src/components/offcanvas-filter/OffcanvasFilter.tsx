
const OffcanvasFilter = () => {
    return (
        <div className="offcanvas__filter--sidebar widget__area active">
            <button type="button" className="offcanvas__filter--close" data-offcanvas="">
                <svg
                    className="minicart__close--icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={32}
                        d="M368 368L144 144M368 144L144 368"
                    />
                </svg>{" "}
                <span className="offcanvas__filter--close__text">Close</span>
            </button>
            <div className="offcanvas__filter--sidebar__inner">
                <div className="single__widget widget__bg">
                    <h2 className="widget__title h3">Categories</h2>
                    <ul className="widget__categories--menu">
                        <li className="widget__categories--menu__list active">
                            <label className="widget__categories--menu__label d-flex align-items-center">
                                <img
                                    className="widget__categories--menu__img"
                                    src="assets/img/product/small-product/product1.webp"
                                    alt="categories-img"
                                />
                                <span className="widget__categories--menu__text">
                                    Fairness cream
                                </span>
                                <svg
                                    className="widget__categories--menu__arrowdown--icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12.355"
                                    height="8.394"
                                >
                                    <path
                                        d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                                        transform="translate(-6 -8.59)"
                                        fill="currentColor"
                                    />
                                </svg>
                            </label>
                            <ul className="widget__categories--sub__menu " style={{display:"block",boxSizing:"border-box"}}>
                                <li className="widget__categories--sub__menu--list">
                                    <a
                                        className="widget__categories--sub__menu--link d-flex align-items-center"
                                        href="shop.html"
                                    >
                                        <img
                                            className="widget__categories--sub__menu--img"
                                            src="assets/img/product/small-product/product2.webp"
                                            alt="categories-img"
                                        />
                                        <span className="widget__categories--sub__menu--text">
                                            Massage Cream
                                        </span>
                                    </a>
                                </li>
                                <li className="widget__categories--sub__menu--list">
                                    <a
                                        className="widget__categories--sub__menu--link d-flex align-items-center"
                                        href="shop.html"
                                    >
                                        <img
                                            className="widget__categories--sub__menu--img"
                                            src="assets/img/product/small-product/product3.webp"
                                            alt="categories-img"
                                        />
                                        <span className="widget__categories--sub__menu--text">
                                            Matte Walnut{" "}
                                        </span>
                                    </a>
                                </li>
                                <li className="widget__categories--sub__menu--list">
                                    <a
                                        className="widget__categories--sub__menu--link d-flex align-items-center"
                                        href="shop.html"
                                    >
                                        <img
                                            className="widget__categories--sub__menu--img"
                                            src="assets/img/product/small-product/product4.webp"
                                            alt="categories-img"
                                        />
                                        <span className="widget__categories--sub__menu--text">
                                            Bamboo Scrub{" "}
                                        </span>
                                    </a>
                                </li>
                                <li className="widget__categories--sub__menu--list">
                                    <a
                                        className="widget__categories--sub__menu--link d-flex align-items-center"
                                        href="shop.html"
                                    >
                                        <img
                                            className="widget__categories--sub__menu--img"
                                            src="assets/img/product/small-product/product5.webp"
                                            alt="categories-img"
                                        />
                                        <span className="widget__categories--sub__menu--text">
                                            Castor Oil
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="widget__categories--menu__list">
                            <label className="widget__categories--menu__label d-flex align-items-center">
                                <img
                                    className="widget__categories--menu__img"
                                    src="assets/img/product/small-product/product2.webp"
                                    alt="categories-img"
                                />
                                <span className="widget__categories--menu__text">Skin Silver</span>
                                <svg
                                    className="widget__categories--menu__arrowdown--icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12.355"
                                    height="8.394"
                                >
                                    <path
                                        d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                                        transform="translate(-6 -8.59)"
                                        fill="currentColor"
                                    />
                                </svg>
                            </label>
                            <ul className="widget__categories--sub__menu">
                                <li className="widget__categories--sub__menu--list">
                                    <a
                                        className="widget__categories--sub__menu--link d-flex align-items-center"
                                        href="shop.html"
                                    >
                                        <img
                                            className="widget__categories--sub__menu--img"
                                            src="assets/img/product/small-product/product2.webp"
                                            alt="categories-img"
                                        />
                                        <span className="widget__categories--sub__menu--text">
                                            Massage Cream
                                        </span>
                                    </a>
                                </li>
                                <li className="widget__categories--sub__menu--list">
                                    <a
                                        className="widget__categories--sub__menu--link d-flex align-items-center"
                                        href="shop.html"
                                    >
                                        <img
                                            className="widget__categories--sub__menu--img"
                                            src="assets/img/product/small-product/product3.webp"
                                            alt="categories-img"
                                        />
                                        <span className="widget__categories--sub__menu--text">
                                            Matte Walnut{" "}
                                        </span>
                                    </a>
                                </li>
                                <li className="widget__categories--sub__menu--list">
                                    <a
                                        className="widget__categories--sub__menu--link d-flex align-items-center"
                                        href="shop.html"
                                    >
                                        <img
                                            className="widget__categories--sub__menu--img"
                                            src="assets/img/product/small-product/product4.webp"
                                            alt="categories-img"
                                        />
                                        <span className="widget__categories--sub__menu--text">
                                            Bamboo Scrub{" "}
                                        </span>
                                    </a>
                                </li>
                                <li className="widget__categories--sub__menu--list">
                                    <a
                                        className="widget__categories--sub__menu--link d-flex align-items-center"
                                        href="shop.html"
                                    >
                                        <img
                                            className="widget__categories--sub__menu--img"
                                            src="assets/img/product/small-product/product5.webp"
                                            alt="categories-img"
                                        />
                                        <span className="widget__categories--sub__menu--text">
                                            Castor Oil
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="widget__categories--menu__list">
                            <label className="widget__categories--menu__label d-flex align-items-center">
                                <img
                                    className="widget__categories--menu__img"
                                    src="assets/img/product/small-product/product3.webp"
                                    alt="categories-img"
                                />
                                <span className="widget__categories--menu__text">Night Serum</span>
                                <svg
                                    className="widget__categories--menu__arrowdown--icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12.355"
                                    height="8.394"
                                >
                                    <path
                                        d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                                        transform="translate(-6 -8.59)"
                                        fill="currentColor"
                                    />
                                </svg>
                            </label>
                            <ul className="widget__categories--sub__menu">
                                <li className="widget__categories--sub__menu--list">
                                    <a
                                        className="widget__categories--sub__menu--link d-flex align-items-center"
                                        href="shop.html"
                                    >
                                        <img
                                            className="widget__categories--sub__menu--img"
                                            src="assets/img/product/small-product/product2.webp"
                                            alt="categories-img"
                                        />
                                        <span className="widget__categories--sub__menu--text">
                                            Massage Cream
                                        </span>
                                    </a>
                                </li>
                                <li className="widget__categories--sub__menu--list">
                                    <a
                                        className="widget__categories--sub__menu--link d-flex align-items-center"
                                        href="shop.html"
                                    >
                                        <img
                                            className="widget__categories--sub__menu--img"
                                            src="assets/img/product/small-product/product3.webp"
                                            alt="categories-img"
                                        />
                                        <span className="widget__categories--sub__menu--text">
                                            Matte Walnut{" "}
                                        </span>
                                    </a>
                                </li>
                                <li className="widget__categories--sub__menu--list">
                                    <a
                                        className="widget__categories--sub__menu--link d-flex align-items-center"
                                        href="shop.html"
                                    >
                                        <img
                                            className="widget__categories--sub__menu--img"
                                            src="assets/img/product/small-product/product4.webp"
                                            alt="categories-img"
                                        />
                                        <span className="widget__categories--sub__menu--text">
                                            Bamboo Scrub{" "}
                                        </span>
                                    </a>
                                </li>
                                <li className="widget__categories--sub__menu--list">
                                    <a
                                        className="widget__categories--sub__menu--link d-flex align-items-center"
                                        href="shop.html"
                                    >
                                        <img
                                            className="widget__categories--sub__menu--img"
                                            src="assets/img/product/small-product/product5.webp"
                                            alt="categories-img"
                                        />
                                        <span className="widget__categories--sub__menu--text">
                                            Castor Oil
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="widget__categories--menu__list">
                            <label className="widget__categories--menu__label d-flex align-items-center">
                                <img
                                    className="widget__categories--menu__img"
                                    src="assets/img/product/small-product/product4.webp"
                                    alt="categories-img"
                                />
                                <span className="widget__categories--menu__text">Cream Oil</span>
                                <svg
                                    className="widget__categories--menu__arrowdown--icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12.355"
                                    height="8.394"
                                >
                                    <path
                                        d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                                        transform="translate(-6 -8.59)"
                                        fill="currentColor"
                                    />
                                </svg>
                            </label>
                            <ul className="widget__categories--sub__menu">
                                <li className="widget__categories--sub__menu--list">
                                    <a
                                        className="widget__categories--sub__menu--link d-flex align-items-center"
                                        href="shop.html"
                                    >
                                        <img
                                            className="widget__categories--sub__menu--img"
                                            src="assets/img/product/small-product/product2.webp"
                                            alt="categories-img"
                                        />
                                        <span className="widget__categories--sub__menu--text">
                                            Massage Cream
                                        </span>
                                    </a>
                                </li>
                                <li className="widget__categories--sub__menu--list">
                                    <a
                                        className="widget__categories--sub__menu--link d-flex align-items-center"
                                        href="shop.html"
                                    >
                                        <img
                                            className="widget__categories--sub__menu--img"
                                            src="assets/img/product/small-product/product3.webp"
                                            alt="categories-img"
                                        />
                                        <span className="widget__categories--sub__menu--text">
                                            Matte Walnut{" "}
                                        </span>
                                    </a>
                                </li>
                                <li className="widget__categories--sub__menu--list">
                                    <a
                                        className="widget__categories--sub__menu--link d-flex align-items-center"
                                        href="shop.html"
                                    >
                                        <img
                                            className="widget__categories--sub__menu--img"
                                            src="assets/img/product/small-product/product4.webp"
                                            alt="categories-img"
                                        />
                                        <span className="widget__categories--sub__menu--text">
                                            Bamboo Scrub{" "}
                                        </span>
                                    </a>
                                </li>
                                <li className="widget__categories--sub__menu--list">
                                    <a
                                        className="widget__categories--sub__menu--link d-flex align-items-center"
                                        href="shop.html"
                                    >
                                        <img
                                            className="widget__categories--sub__menu--img"
                                            src="assets/img/product/small-product/product5.webp"
                                            alt="categories-img"
                                        />
                                        <span className="widget__categories--sub__menu--text">
                                            Castor Oil
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="widget__categories--menu__list">
                            <label className="widget__categories--menu__label d-flex align-items-center">
                                <img
                                    className="widget__categories--menu__img"
                                    src="assets/img/product/small-product/product5.webp"
                                    alt="categories-img"
                                />
                                <span className="widget__categories--menu__text">Skin Cleaner</span>
                                <svg
                                    className="widget__categories--menu__arrowdown--icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12.355"
                                    height="8.394"
                                >
                                    <path
                                        d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                                        transform="translate(-6 -8.59)"
                                        fill="currentColor"
                                    />
                                </svg>
                            </label>
                            <ul className="widget__categories--sub__menu">
                                <li className="widget__categories--sub__menu--list">
                                    <a
                                        className="widget__categories--sub__menu--link d-flex align-items-center"
                                        href="shop.html"
                                    >
                                        <img
                                            className="widget__categories--sub__menu--img"
                                            src="assets/img/product/small-product/product2.webp"
                                            alt="categories-img"
                                        />
                                        <span className="widget__categories--sub__menu--text">
                                            Massage Cream
                                        </span>
                                    </a>
                                </li>
                                <li className="widget__categories--sub__menu--list">
                                    <a
                                        className="widget__categories--sub__menu--link d-flex align-items-center"
                                        href="shop.html"
                                    >
                                        <img
                                            className="widget__categories--sub__menu--img"
                                            src="assets/img/product/small-product/product3.webp"
                                            alt="categories-img"
                                        />
                                        <span className="widget__categories--sub__menu--text">
                                            Matte Walnut{" "}
                                        </span>
                                    </a>
                                </li>
                                <li className="widget__categories--sub__menu--list">
                                    <a
                                        className="widget__categories--sub__menu--link d-flex align-items-center"
                                        href="shop.html"
                                    >
                                        <img
                                            className="widget__categories--sub__menu--img"
                                            src="assets/img/product/small-product/product4.webp"
                                            alt="categories-img"
                                        />
                                        <span className="widget__categories--sub__menu--text">
                                            Bamboo Scrub{" "}
                                        </span>
                                    </a>
                                </li>
                                <li className="widget__categories--sub__menu--list">
                                    <a
                                        className="widget__categories--sub__menu--link d-flex align-items-center"
                                        href="shop.html"
                                    >
                                        <img
                                            className="widget__categories--sub__menu--img"
                                            src="assets/img/product/small-product/product5.webp"
                                            alt="categories-img"
                                        />
                                        <span className="widget__categories--sub__menu--text">
                                            Castor Oil
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="single__widget widget__bg">
                    <h2 className="widget__title h3">Dietary Needs</h2>
                    <ul className="widget__form--check">
                        <li className="widget__form--check__list">
                            <label className="widget__form--check__label" htmlFor="check6">
                                Bath &amp; Body
                            </label>
                            <input
                                className="widget__form--check__input"
                                id="check6"
                                type="checkbox"
                            />
                            <span className="widget__form--checkmark" />
                        </li>
                        <li className="widget__form--check__list">
                            <label className="widget__form--check__label" htmlFor="check7">
                                Hair Care
                            </label>
                            <input
                                className="widget__form--check__input"
                                id="check7"
                                type="checkbox"
                            />
                            <span className="widget__form--checkmark" />
                        </li>
                        <li className="widget__form--check__list">
                            <label className="widget__form--check__label" htmlFor="check8">
                                Make Up
                            </label>
                            <input
                                className="widget__form--check__input"
                                id="check8"
                                type="checkbox"
                            />
                            <span className="widget__form--checkmark" />
                        </li>
                        <li className="widget__form--check__list">
                            <label className="widget__form--check__label" htmlFor="check9">
                                Health Care
                            </label>
                            <input
                                className="widget__form--check__input"
                                id="check9"
                                type="checkbox"
                            />
                            <span className="widget__form--checkmark" />
                        </li>
                        <li className="widget__form--check__list">
                            <label className="widget__form--check__label" htmlFor="check10">
                                Styling Products
                            </label>
                            <input
                                className="widget__form--check__input"
                                id="check10"
                                type="checkbox"
                            />
                            <span className="widget__form--checkmark" />
                        </li>
                    </ul>
                </div>
                <div className="single__widget price__filter widget__bg">
                    <h2 className="widget__title h3">Filter By Price</h2>
                    <form className="price__filter--form" action="#">
                        <div className="price__filter--form__inner mb-15 d-flex align-items-center">
                            <div className="price__filter--group">
                                <label className="price__filter--label" htmlFor="Filter-Price-GTE1">
                                    From
                                </label>
                                <div className="price__filter--input border-radius-5 d-flex align-items-center">
                                    <span className="price__filter--currency">$</span>
                                    <input
                                        className="price__filter--input__field border-0"
                                        name="filter.v.price.gte"
                                        id="Filter-Price-GTE1"
                                        type="number"
                                        placeholder="0"
                                        min={0}
                                        max={250.0}
                                    />
                                </div>
                            </div>
                            <div className="price__divider">
                                <span>-</span>
                            </div>
                            <div className="price__filter--group">
                                <label className="price__filter--label" htmlFor="Filter-Price-LTE1">
                                    To
                                </label>
                                <div className="price__filter--input border-radius-5 d-flex align-items-center">
                                    <span className="price__filter--currency">$</span>
                                    <input
                                        className="price__filter--input__field border-0"
                                        name="filter.v.price.lte"
                                        id="Filter-Price-LTE1"
                                        type="number"
                                        min={0}
                                        placeholder="250.0"
                                        max={250.0}
                                    />
                                </div>
                            </div>
                        </div>
                        <button className="primary__btn price__filter--btn" type="submit">
                            Filter
                        </button>
                    </form>
                </div>
                <div className="single__widget widget__bg">
                    <h2 className="widget__title h3">Top Rated Product</h2>
                    <div className="shop__sidebar--product">
                        <div className="small__product--card d-flex">
                            <div className="small__product--thumbnail">
                                <a className="display-block" href="product-details.html">
                                    <img
                                        src="assets/img/product/small-product/product1.webp"
                                        alt="product-img"
                                    />
                                </a>
                            </div>
                            <div className="small__product--content">
                                <h3 className="small__product--card__title">
                                    <a href="product-details.html">White Cream </a>
                                </h3>
                                <div className="small__product--card__price mb_5">
                                    <span className="current__price">$239.52</span>
                                </div>
                                <ul className="rating small__product--rating d-flex">
                                    <li className="rating__list">
                                        <span className="rating__icon">
                                            <svg
                                                width={12}
                                                height={11}
                                                viewBox="0 0 14 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                    </li>
                                    <li className="rating__list">
                                        <span className="rating__icon">
                                            <svg
                                                width={12}
                                                height={11}
                                                viewBox="0 0 14 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                    </li>
                                    <li className="rating__list">
                                        <span className="rating__icon">
                                            <svg
                                                width={12}
                                                height={11}
                                                viewBox="0 0 14 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                    </li>
                                    <li className="rating__list">
                                        <span className="rating__icon">
                                            <svg
                                                width={12}
                                                height={11}
                                                viewBox="0 0 14 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                    </li>
                                    <li className="rating__list">
                                        <span className="rating__icon">
                                            <svg
                                                width={12}
                                                height={11}
                                                viewBox="0 0 14 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="small__product--card d-flex">
                            <div className="small__product--thumbnail">
                                <a className="display-block" href="product-details.html">
                                    <img
                                        src="assets/img/product/small-product/product2.webp"
                                        alt="product-img"
                                    />
                                </a>
                            </div>
                            <div className="small__product--content">
                                <h3 className="small__product--card__title">
                                    <a href="product-details.html">Sneaky lips </a>
                                </h3>
                                <div className="small__product--card__price mb_5">
                                    <span className="current__price">$180.52</span>
                                </div>
                                <ul className="rating small__product--rating d-flex">
                                    <li className="rating__list">
                                        <span className="rating__icon">
                                            <svg
                                                width={12}
                                                height={11}
                                                viewBox="0 0 14 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                    </li>
                                    <li className="rating__list">
                                        <span className="rating__icon">
                                            <svg
                                                width={12}
                                                height={11}
                                                viewBox="0 0 14 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                    </li>
                                    <li className="rating__list">
                                        <span className="rating__icon">
                                            <svg
                                                width={12}
                                                height={11}
                                                viewBox="0 0 14 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                    </li>
                                    <li className="rating__list">
                                        <span className="rating__icon">
                                            <svg
                                                width={12}
                                                height={11}
                                                viewBox="0 0 14 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                    </li>
                                    <li className="rating__list">
                                        <span className="rating__icon">
                                            <svg
                                                width={12}
                                                height={11}
                                                viewBox="0 0 14 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="small__product--card d-flex">
                            <div className="small__product--thumbnail">
                                <a className="display-block" href="product-details.html">
                                    <img
                                        src="assets/img/product/small-product/product3.webp"
                                        alt="product-img"
                                    />
                                </a>
                            </div>
                            <div className="small__product--content">
                                <h3 className="small__product--card__title">
                                    <a href="product-details.html">Matte Walnut </a>
                                </h3>
                                <div className="small__product--card__price mb_5">
                                    <span className="current__price">$220.52</span>
                                </div>
                                <ul className="rating small__product--rating d-flex">
                                    <li className="rating__list">
                                        <span className="rating__icon">
                                            <svg
                                                width={12}
                                                height={11}
                                                viewBox="0 0 14 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                    </li>
                                    <li className="rating__list">
                                        <span className="rating__icon">
                                            <svg
                                                width={12}
                                                height={11}
                                                viewBox="0 0 14 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                    </li>
                                    <li className="rating__list">
                                        <span className="rating__icon">
                                            <svg
                                                width={12}
                                                height={11}
                                                viewBox="0 0 14 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                    </li>
                                    <li className="rating__list">
                                        <span className="rating__icon">
                                            <svg
                                                width={12}
                                                height={11}
                                                viewBox="0 0 14 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                    </li>
                                    <li className="rating__list">
                                        <span className="rating__icon">
                                            <svg
                                                width={12}
                                                height={11}
                                                viewBox="0 0 14 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single__widget widget__bg">
                    <h2 className="widget__title h3">Brands</h2>
                    <ul className="widget__tagcloud">
                        <li className="widget__tagcloud--list">
                            <a className="widget__tagcloud--link" href="shop.html">
                                {" "}
                                Hair Care
                            </a>
                        </li>
                        <li className="widget__tagcloud--list">
                            <a className="widget__tagcloud--link" href="shop.html">
                                Make Up
                            </a>
                        </li>
                        <li className="widget__tagcloud--list">
                            <a className="widget__tagcloud--link" href="shop.html">
                                Skin Care
                            </a>
                        </li>
                        <li className="widget__tagcloud--list">
                            <a className="widget__tagcloud--link" href="shop.html">
                                Styling{" "}
                            </a>
                        </li>
                        <li className="widget__tagcloud--list">
                            <a className="widget__tagcloud--link" href="shop.html">
                                Products{" "}
                            </a>
                        </li>
                        <li className="widget__tagcloud--list">
                            <a className="widget__tagcloud--link" href="shop.html">
                                Fairness
                            </a>
                        </li>
                        <li className="widget__tagcloud--list">
                            <a className="widget__tagcloud--link" href="shop.html">
                                Cream Oil{" "}
                            </a>
                        </li>
                        <li className="widget__tagcloud--list">
                            <a className="widget__tagcloud--link" href="shop.html">
                                Matte Walnut{" "}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default OffcanvasFilter

const ScrollTop = () => {
    const scrollTop = document.getElementById("scroll__top");
    if (scrollTop) {
        scrollTop.addEventListener("click", function () {
            window.scroll({ top: 0, left: 0, behavior: "smooth" });
        });
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                scrollTop.classList.add("active");
            } else {
                scrollTop.classList.remove("active");
            }
        });
    }
    return (
        <button id="scroll__top">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
            >
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={48}
                    d="M112 244l144-144 144 144M256 120v292"
                />
            </svg>
        </button>

    )
}

export default ScrollTop
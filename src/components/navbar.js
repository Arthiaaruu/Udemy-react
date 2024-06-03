function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__s1">
                <h1 className="navbar__s1__title">Udemy</h1>
            </div>

            <div className="navbar__s2">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input placeholder="Search for anything here. Tech, Business, Art..."></input>

            </div>

            <div className="navbar__s3">
                <p>Courses</p>
                <div className="mylearning">
                    <p>My Learning</p>
                    <div className="mylearning__popup">
                        <p>you did not purchase anything yet</p>
                    </div>
                </div>
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-sharp fa-solid fa-bell"></i>
                <i class="fa-solid fa-user"></i>

            </div>
            <div className="navbar__s4">
                <i class="fa-solid fa-bars"></i>
            </div>

        </div>
    )
}

export default Navbar
import popular1 from "../Assests/images/image1.jpeg"
import popular2 from "../Assests/images/image2.jpeg"
import popular3 from "../Assests/images/image3.jpeg"
import popular4 from "../Assests/images/image4.jpeg"
import popular5 from "../Assests/images/image5.jpeg"
import c1image from "../Assests/images/c1.jpg"
import c2image from "../Assests/images/c4.jpg"
function Mostpopular() {
    return (
        <div className="popular">
            <h1 className="popular__title"> Most Popular Course</h1>
            <p className="popular__subtitle">Pick the best one</p>
            <div className="popular__container">

                <div className="course-card">
                    <img src={popular1} alt="popular"></img>
                    <h3>Angular-The Complete Guide </h3>
                    <p>col steele</p>
                    <p>4.8 ⭐⭐⭐⭐</p>
                    <p>560 <del>2999</del></p>
                </div>

                <div className="course-card">
                    <img src={popular2} alt="popular"></img>
                    <h3>Basic to Advance Java Programming 2023</h3>
                    <p>col steele</p>
                    <p>4.3 ⭐⭐⭐</p>
                    <p>339 <del>1989</del></p>
                </div>

                <div className="course-card">
                    <img src={popular3} alt="popular"></img>
                    <h3>Web Development Bootcamp 2.0</h3>
                    <p>col steele</p>
                    <p>4.5 ⭐⭐⭐</p>
                    <p>469 <del>1989</del></p>
                </div>

                <div className="course-card">
                    <img src={popular4} alt="popular"></img>
                    <h3>The complete Android Oreo Developer Course </h3>
                    <p>col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={popular5} alt="popular"></img>
                    <h3>Python data visualization master class 3.0</h3>
                    <p>col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={popular3} alt="popular"></img>
                    <h3>Advance Programming with EMC 3.0</h3>
                    <p>col steele</p>
                    <p>4.8 ⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={c2image} alt="popular"></img>
                    <h3> The Advance Web Development Bootcamp</h3>
                    <p>col steele</p>
                    <p>4.7 ⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={c1image} alt="popular"></img>
                    <h3>Internet and Web Development Fundamentals</h3>
                    <p>col steele</p>
                    <p>4.3 ⭐⭐⭐⭐</p>
                    <p>479 <del>1899</del></p>
                </div>

            </div>
        </div>
    )
}
export default Mostpopular
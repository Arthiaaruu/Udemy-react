import c1image from "../Assests/images/c1.jpg"
import c2image from "../Assests/images/c2.jpg"
import c3image from "../Assests/images/c3.jpg"
import c4image from "../Assests/images/c4.jpg"
function Recommended(){
    return(
        <div className="recommended">
        <h1 className="recommended__title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div className="recommended__container">
            <div className="course-card">
                <img src={c1image} alt="course1"></img>
                <h3>2023 Python data visualization master class</h3>
                <p>col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={c2image} alt="course2"></img>
                <h3>Basic to Advance Programming with EMC</h3>
                <p>col steele</p>
                <p>4.9 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={c3image} alt="course3"></img>
                <h3>Web Development Bootcamp 2023</h3>
                <p>col steele</p>
                <p>4.9 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={c4image} alt="course4"></img>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

        </div>
    </div>
    )
}
export default Recommended
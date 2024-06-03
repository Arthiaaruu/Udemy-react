import saleimage from "../Assests/images/sale image.jpg"
function Saleimage() {
    return (
        <div className="sale-image">
            <img src = {saleimage} alt="sale"></img>
            <div className="sale-image__offer">
                <h1>Udemy Flash Sale% 24 hours to save</h1>
                <p>Get the top courses for just 499.Just one day to save but a lifetime to learn</p>
            </div>
        </div>
    )
}
export default Saleimage
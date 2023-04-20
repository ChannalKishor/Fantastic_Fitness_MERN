import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import "../styles/css/_previous-search.css"
import Navbar from "./Navbar"

export default function PreviousSearches(){
    const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup'] 

    return (
        <div className="previous-searches section">
            <Navbar />            
            <div className="previous-searches-container" style={{marginTop:"-8rem"}}>
                { searches.map((search, index) => (<div key={index} style={{animationDelay: index * .1 + "s"}} className="search-item">
                    {search}
                </div>)) }
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search ..." />
                <button className="btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}
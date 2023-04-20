import "../styles/css/_improve-section.css"
export default function ImproveSkills(){

    const list = [
        "No more salads to loose weight",
        "Learn new recepies",
        "Experiment with food",
        "Maintain your fitness",
        "Know nutrition facts",        
        "Get fit"
    ]

    return(
        <div className="section improve-skills">

            <div className="col img">
                <img src="/img/gallery/img_10.jpg" alt="" />
            </div>

            <div className="col typography">
                <h1 className="title">Diet plans best for you</h1>
                { list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                )) }
                <button className="btn">Our Diet Plan</button>
            </div>
       
        </div>
    )
   
}
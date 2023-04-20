import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/improveSkills";
import QouteSection from "../components/QuoteSection";
import ChiefsSection from "../components/ChiefsSection";
import "../styles/css/index.css"
import "../styles/css/size.css"

export default function Home(){
    return (
        <div>
            <HeroSection />
            <ImproveSkills />
            <QouteSection />
            <ChiefsSection />
        </div>
    )
}
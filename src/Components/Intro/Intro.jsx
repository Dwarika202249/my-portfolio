import "./Intro.css"
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'


const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>HY! I Am</span>
                <span>Dwarika Kumar</span>
                <span>A passionate web developer dedicated to creating elegant and functional online solutions, turning concepts into captivating user journeys.</span>
            </div>
            <button className="button i-button">
                Hire me
            </button>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassesimoji} alt="" />

            <div style={{top: '-4%', left: '58%'}}>
                <FloatingDiv image={Crown} txt1='Elevating' txt2='Ideas' />
            </div>
            <div style={{top: '18rem', left: '1.5rem'}}>
                <FloatingDiv image={thumbup} txt1='Executing' txt2='Excellence' />
            </div>
            {/* blur divs */}
            <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
            <div className="blur" style={{background: "#C1F5FF", top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'

const Services = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span>Elevating Brands</span>
            <span>through my services</span>
            <span>Transforming ideas into immersive web experiences, one line of code at a time, 
            <br />    
            to make your digital vision a reality.</span>
            <a href={Resume} download>
            <button className="button s-button">Download Resume</button>
            </a>
            <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
        </div>

        {/* right side */}
        <div className="cards">
            <div style={{left: '14rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {'Figma, Sketch, Adobe Photoshop'}
                />
            </div>
            <div style={{top: '12rem', left: '-4rem'}}>
                <Card
                emoji = {Glasses}
                heading = {'Developer'}
                detail = {'HTML, CSS, Javascript, MERN'}
                />
            </div>
            <div style={{top: '19rem', left: '12rem'}}>
                <Card
                emoji = {Humble}
                heading = {'UI/UX'}
                detail = {'Elevating user satisfaction through visually appealing and user-friendly UI/UX solutions.'}
                />
            </div>
            <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services
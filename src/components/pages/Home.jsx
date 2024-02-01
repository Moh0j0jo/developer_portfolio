import Logos from '../Logos';
import siteContent from  './Content.json'
import spencePic from '../../Assets/Spense.png'
import yelpCampPic from '../../Assets/YelpCamp.png'
import Button
 from '../Button';
const Home = () => {


  const {sections} = siteContent
  
  return (
    <div className='home-wrapper'>
      {sections.map((section, index) => (
        
        <section key={index} id={'S'+(index+1)}>
          {(index === 1) &&  <img src={spencePic} alt="" srcSet="" />}
          {(index === 2) &&  <img src={yelpCampPic} alt="" srcSet="" />}
          <h1>{section.header}</h1>
          <p>{section.paragraph}</p>
          {(index === 0) && <Logos/>}
          {(index === 4) &&  <Button label='Get in touch'/>}          
        </section>
        
      ))}
    </div>
  );
}
 
export default Home;
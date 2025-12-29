import Tourcard from "./tourCard";
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'

const tours = [
  {
    img:card1,
    title:"Jaipur, Rajasthan",
    description: "enjoy the joy of Rajasthan with Tripx"
  },
  {
    img:card2,
    title:"Jaipur, Rajasthan",
    description: "enjoy the joy of Rajasthan with Tripx"
  },
  {
    img:card3,
    title:"Jaipur, Rajasthan",
    description: "enjoy the joy of Rajasthan with Tripx"
  },
]
const Tour = () =>{
  return(
    <div className="container-fluid py-5">
      <div className="container text-center">
        <h1 className="mb-1" style={{fontFamily:"sans-serif", fontSize: "2rem", color:"#222"}}>Our <span style={{color:" #ff7a00"}}>Famous Spots</span></h1>
        <h3 className="mb-3" style={{fontFamily:"sans-serif", fontSize: "1.2rem", color:"#66666b", marginBottom:"5rem"}}>Some of our most booked places below at best price</h3>
        <div className="row">
          {tours.map((tour,index)=>(
            <div className="col-md-4" key={index}>
              <Tourcard 
              img= {tour.img}
              title = {tour.title}
              description = {tour.description}/>
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}

export default Tour;

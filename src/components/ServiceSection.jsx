import ServiceCard from "./serviceCard";
import "./services.css";

import { GiParachute, GiMountainClimbing, GiCycling, GiPartyPopper, GiSailboat } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdBed } from "react-icons/md";
import { PiFirstAidKit } from "react-icons/pi";

const Services = [
  {
    icon: <GiParachute />,
    title: "Luxury Cabin",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    icon: <IoFastFoodOutline />,
    title: "Food",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
  },
  {
    icon: <MdBed />,
    title: "Hiking",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
  },
  {
    icon: <GiMountainClimbing />,
    title: "Party nights",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
  },
  {
    icon: <GiSailboat />,
    title: "Boating",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    icon: <GiCycling />,
    title: "Cycling",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
  },
  {
    icon: <GiPartyPopper />,
    title: "Party",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
  },
  {
    icon: <PiFirstAidKit />,
    title: "First Aid",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
  }
];

const ServiceSection = () => {
  return (
    <div className="container-fluid custom-container">
      <div className="container">
        <h1 className="custom-head">
          Our <span>Services</span>
        </h1>

        <p className="custom-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ab
          laboriosam quod cupiditate accusamus, consequuntur eius.
        </p>

        <div className="row g-4 justify-content-center">
          {Services.map((service, index) => (
            <div className="col-12 col-sm-6 col-md-3" key={index}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

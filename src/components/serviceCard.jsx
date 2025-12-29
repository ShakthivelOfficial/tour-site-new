const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="card service-card text-center">
      <div className="icon-box">
        {icon}
      </div>

      <h4 className="card-title">{title}</h4>

      <p className="card-text">{description}</p>

      <button className="btn explore-btn">
        Explore →
      </button>
    </div>
  );
};

export default ServiceCard;

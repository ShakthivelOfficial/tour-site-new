
const Tourcard = ({ img, title, description }) => {
  return (
    <div className="card tour-card h-100">
      <div className="img-wrapper">
        <img src={img} alt={title} className="card-img-top" />
      </div>

      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>

      <div className="card-footer bg-white border-0 text-center pb-4">
        <a href="#" className="btn btn-outline-primary px-4">
          Book now
        </a>
      </div>
    </div>
  );
};

export default Tourcard;

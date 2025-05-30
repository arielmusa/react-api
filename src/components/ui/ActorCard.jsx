export default function ActorCard({
  imgUrl,
  name,
  biography,
  birthYear,
  nationality,
  awards,
}) {
  return (
    <div className="col-3">
      <div className="card h-100">
        <img
          src={imgUrl}
          className="card-img-top img-fluid h-50 object-fit-cover "
          alt={name}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{biography}</p>
          <p>{birthYear}</p>
          <p>{nationality}</p>
          <p>{awards}</p>
        </div>
      </div>
    </div>
  );
}

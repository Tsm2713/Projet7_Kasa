import "./user.scss";

function User({ name, picture }) {
  // Sépare le prénom et le nom pour un affichage sur deux lignes
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="host">
      <p className="host__name">
        {firstName}<br />
        {lastName}
      </p>
      <img className="host__picture" src={picture} alt={name} />
    </div>
  );
}

export default User;

import "./user.scss";

function User({ name, picture }) {
  // Sépare le prénom et le nom pour un affichage sur deux lignes
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="user">
      <p className="user__name">
        {firstName}<br />
        {lastName}
      </p>
      <img className="user__picture" src={picture} alt={name} />
    </div>
  );
}

export default User;

import React from "react";
import Card from "./Card.jsx";

const users = [
  {
    id: 3,
    title: "Ivsan",
    descriprion: "jdjsddasdsaga",
    image:
      "https://t3.ftcdn.net/jpg/03/94/89/90/360_F_394899054_4TMgw6eiMYUfozaZU3Kgr5e0LdH4ZrsU.jpg",
    urlLinkedin: "https://www.google.com/",
  },
  {
    id: 4,
    title: "Antonio",
    descriprion: "Desarrollador de la pagina",
    image: "https://www.svgrepo.com/show/192244/man-user.svg",
    urlLinkedin: "https://www.facebook.com/",
  },
];
function Cards() {
  return (
    <>
      <div>
        <div className="row">
          {users.map((userCard) => (
            <div className="col-md-4" key={userCard.id}>
              <Card
                title={userCard.title}
                imageUrl={userCard.image}
                descriprion={userCard.descriprion}
                urlLinkedin={userCard.urlLinkedin}
              ></Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Cards;

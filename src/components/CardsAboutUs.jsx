import React from "react";
import CardAboutUs from "./CardAboutUs.jsx";
import "./styles/styleAboutUs.css";
const users = [
  {
    id: 1,
    title: "Ivan",
    descriprion: "La descripción de personas ",
    image:
      "https://scontent.fpbc4-1.fna.fbcdn.net/v/t39.30808-1/330296746_8679805508761000_1006268750703738412_n.jpg?stp=c97.0.200.200a_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=VyPkXwNJGQ4Q7kNvgF9BW2y&_nc_ht=scontent.fpbc4-1.fna&oh=00_AYCIkDqa6IZd2VjVE2rGthghJnO--56jR08hIdznSzyF2g&oe=66B37045",
    urlLinkedin: "https://www.google.com/",
  },
  {
    id: 2,
    title: "Antonio",
    descriprion: "Desarrollador de la pagina",
    image: "https://www.svgrepo.com/show/192244/man-user.svg",
    urlLinkedin: "https://www.facebook.com/",
  },
  {
    id: 3,
    title: "Varela",
    descriprion: "jdjsddasdsaga",
    image:
      "https://t3.ftcdn.net/jpg/03/94/89/90/360_F_394899054_4TMgw6eiMYUfozaZU3Kgr5e0LdH4ZrsU.jpg",
    urlLinkedin: "https://www.google.com/",
  },
];
function Cards() {
  return (
    <>
      <div>
        <div className="row">
          {users.map((userCard) => (
            <div className="col cards-container" key={userCard.id}>
              <CardAboutUs
                title={userCard.title}
                imageUrl={userCard.image}
                descriprion={userCard.descriprion}
                urlLinkedin={userCard.urlLinkedin}
              ></CardAboutUs>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Cards;

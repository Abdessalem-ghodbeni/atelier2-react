import React from "react";
import HomeImage from "../../public/images/Events-amico.png";
import NavBar from "../Components/NavBar.jsx";
function Home() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row d-flex jutify-content-center align-items-center">
          <div className="col-12 col-md-5">
            <h2 className="custumer_title">
              Les secrets cachés de l'histoire révélés !
            </h2>
            <p className="custumer_paragraphe">
              <strong>
                Les événements sont les catalyseurs du changement, ils nous
                poussent à nous surpasser et à grandir.{" "}
              </strong>
            </p>
            <div className="custumer_title">
              <strong>Made by Ghodbeni Abdessalem</strong>
            </div>
          </div>
          <div className="col-12 col-md-6 offset-md-1">
            <img src={HomeImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

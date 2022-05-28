import React from "react";

import './BikeChat.css';
import {Footer} from "../Footer/Footer";

export const BikeChat = () => {
  return (
      <>
          <div className="chat-view">
              {/*podzielić środek na dwie części*/}
              {/*u góry info o możliuwość zadania pytania*/}
              {/*na dole tak samo wklęsła jak po lewej, część z "chatem"*/}
              {/*podkreślenie pytaania linią i może inny kolor na wcześniejsze i aktualne bez odpowiedzi?*/}
          </div>
          <Footer/>
      </>
  );
};
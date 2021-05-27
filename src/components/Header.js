import React, {useState} from "react";
import logo from "../images/logo.svg";
import search from "../images/search-icon.svg";
import bookmark from "../images/bookmark-icon.svg";
import promotion from "../images/promotion-icon.svg";
import profile from "../images/profile.jpg";

function Header(props) {
    const [movieSearch, setMovieSearch] = useState('');

    return (
        <div className="header">
            <div className="icons">
                <img src={logo} alt="logomarca"/>
                <div className="input">
                    <input type="text" placeholder="Pesquise filmes.." setFilter={props.setFilter} onChange={e => setMovieSearch(e.target.value)} value={movieSearch} />
                    <img className="search" src={search} alt="icone de busca" onClick={() => props.setFilter(movieSearch)} />
                </div>
                <div className="fav">
                    <img src={bookmark} alt="icone favoritos" />
                    <p>Favoritos</p>
                </div>
                <div className="promo">
                    <img src={promotion} alt="icone promoções" />
                    <p>Promoções</p>
                </div>
                <div className="profile">
                    <p>Bem vindo Dina</p>
                    <img className="image" src={profile} alt="imagem de perfil" />
                </div>
            </div>
        </div>
  );
}

export default Header;
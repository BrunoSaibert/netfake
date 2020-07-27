import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';

import * as S from './styles';

import logo from '../../assets/logo.png';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();

  useEffect(_ => {
    const handleScroll = _ => {
      if (window.pageYOffset > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return _ => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.Container scrolled={scrolled}>
      <S.Content>
        <S.Logo src={logo} alt="Netfake" />

        <S.Nav>
          <S.NavLink>
            <Link to="/" className={pathname === '/' ? 'active' : null}>
              Início
            </Link>
          </S.NavLink>
          <S.NavLink>
            <Link
              to="/series"
              className={pathname === '/series' ? 'active' : null}
            >
              Séries
            </Link>
          </S.NavLink>
          <S.NavLink>
            <Link
              to="/movies"
              className={pathname === '/movies' ? 'active' : null}
            >
              Filmes
            </Link>
          </S.NavLink>
          <S.NavLink>
            <Link
              to="/latest"
              className={pathname === '/latest' ? 'active' : null}
            >
              Mais recentes
            </Link>
          </S.NavLink>
          <S.NavLink>
            <Link
              to="/my-list"
              className={pathname === '/my-list' ? 'active' : null}
            >
              Minha lista
            </Link>
          </S.NavLink>
        </S.Nav>
      </S.Content>

      <S.Actions>
        <FaSearch />
        <FaBell />
        <FaUser />
      </S.Actions>
    </S.Container>
  );
}

export default Header;

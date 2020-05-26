import React from 'react';

import { useRouteMatch } from 'react-router-dom';

import { Container, HeaderItem } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const matchImport = useRouteMatch({
    path: '/import',
  });
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <HeaderItem to="/" selected={matchImport === null}>
            Listagem
          </HeaderItem>
          <HeaderItem to="/import" selected={matchImport !== null}>
            Importar
          </HeaderItem>
        </nav>
      </header>
    </Container>
  );
};
export default Header;

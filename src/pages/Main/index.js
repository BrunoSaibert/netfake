import React from 'react';

import Hero from '../../components/Hero';
import Slider from '../../components/Slider';

import * as S from './styles';

export default function Main() {
  return (
    <S.Container>
      <Hero />

      <Slider title="Minha lista" />
      <Slider title="Em alta" />
      <Slider title="Assistir novamente" />
    </S.Container>
  );
}

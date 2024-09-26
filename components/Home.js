import React, { useState } from 'react';
import { Container, Title, Input, Button, ButtonText, Label, Image } from './style';
import image from '../assets/bomba-de-combustivel.png';

export default function Home() {
  const [alcool, setAlcool] = useState();
  const [gasolina, setGasolina] = useState();
  const [resultado, setResultado] = useState();

  function calcular() {
    if (alcool > 0 && gasolina > 0) {
      if (alcool / gasolina < 0.7) {
        return setResultado('Alcool é a melhor opção!');
      }
      return setResultado('Gasolina é a melhor opção!');
    }
    return setResultado('Preencha os valores validos!');
  }

  return (
    <Container>
      <Image source={image} />
      <Title>Qual a melhor opção?</Title>
      <Label>Álcool (preço por litro)</Label>
      <Input keyboardType="numeric" placeholder="Digite o valor do Álcool" onChangeText={alcool => setAlcool(alcool)}/>
      <Label>Gasolina (preço por litro)</Label>
      <Input keyboardType="numeric" placeholder="Digite o valor da Gasolina" onChangeText={gasolina => setGasolina(gasolina)}/>
      <Button onPress={calcular}>
        <ButtonText>Calcular</ButtonText>
      </Button>
      <Label>{resultado ? resultado : ''}</Label>
    </Container>
  );
}

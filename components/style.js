import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #272b36;
`;

export const Image = styled.Image`
  width: 250px;
  height: 250px;
  margin-bottom: 20px;`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
`;

export const Label = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 2px;
`;

export const Input = styled.TextInput`
  height: 55px;
  width: 320px;
  border: 1px solid #ccc;
  margin: 10px 0;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #fff;

`;

export const Button = styled.TouchableOpacity`
  background-color: #f9cd40;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
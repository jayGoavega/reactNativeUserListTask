import styled from 'styled-components/native';
import Colors from '../colors';

export const Card = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 5px;
  padding: 10px;
  background-color: ${Colors.bgLightBlue};
  justify-content: space-around;
`;
export const UserName = styled.Text`
  color: ${Colors.textBlackPrimary};
  font-size: 15px;
`;
export const UserUrl = styled.Text`
  color: ${Colors.textGraySecondary};
  font-size: 13px;
`;
export const Thumbnail = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

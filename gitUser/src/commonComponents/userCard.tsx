import React, {FC} from 'react';
import {View} from 'react-native';
import {
  Card,
  UserName,
  UserUrl,
  Thumbnail,
} from '../styledComponents/styledComponents';
import {gitUserType} from '../utils';

interface Props {
  gitUserData: {api: {read(): gitUserType[]}};
}

const userCard: FC<Props> = ({gitUserData}) => {
  let user: gitUserType[] = gitUserData.api.read();
  return (
    <View>
      {user &&
        user.slice(0, 10).map((item: gitUserType, index: number) => {
          return (
            <View key={index}>
              <Card>
                <Thumbnail source={{uri: item.avatar_url}} />
                <View style={{width: '70%'}}>
                  <UserName>{item.login}</UserName>
                  <UserUrl>{item.url}</UserUrl>
                </View>
              </Card>
            </View>
          );
        })}
    </View>
  );
};

export default userCard;

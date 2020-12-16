import React, {FC} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

const card: FC<any> = ({state}): JSX.Element => {
  let data: any[] = state;
  return (
    <View>  
      {data &&
        data.slice(0,10).map((item, index) => {
          return (
            <View key={index}>
              <View style={Style.card}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '10%',
                  }}>
                  <Image
                    style={{width: 50, height: 50, borderRadius: 50 / 2}}
                    source={{
                      uri: item.avatar_url,
                    }}
                  />
                </View>
                <View style={{width: '70%'}}>
                  <Text style={{color: '#424242'}}>{item.login}</Text>
                  <Text style={{color: 'gray'}}>{item.url}</Text>
                </View>
              </View>
            </View>
          );
        })}
    </View>
  );
};

export default card;

const Style = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#E8EAF6',
    flex: 1,
    margin: 5,
    padding: 10,
  },
});

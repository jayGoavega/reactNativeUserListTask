import React, {FC, Suspense} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import Card from '../commonComponents/userCard';
import {Style} from '../styles';
import {createResource} from '../githubApi';

const gitUserData = createResource();

const userListPage: FC = (): JSX.Element => {
  return (
    <View style={Style.container}>
      <View style={Style.headerContainer}>
        <Text style={Style.headerTitle}>GitHub Users</Text>
      </View>
      <ScrollView>
        <View>
          <Suspense fallback={<ActivityIndicator size="large" color="gray" />}>
            <Card userDetails={gitUserData} />
          </Suspense>
        </View>
      </ScrollView>
    </View>
  );
};

export default userListPage;

import React, {FC, Suspense} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import Card from '../commonComponents/userCard';
import {Style} from '../styles';
import {createResource} from '../githubApi';
import {gitUserType} from '../utils';
const resource: {api: {read(): gitUserType[]}} = createResource();

const userListPage: FC = (): JSX.Element => {
  return (
    <View style={Style.container}>
      <View style={Style.headerContainer}>
        <Text style={Style.headerTitle}>GitHub Users</Text>
      </View>
      <ScrollView>
        <View>
          <Suspense fallback={<ActivityIndicator size="large" color="gray" />}>
            <Card gitUserData={resource} />
          </Suspense>
        </View>
      </ScrollView>
    </View>
  );
};

export default userListPage;

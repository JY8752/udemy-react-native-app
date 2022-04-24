import { View, Text } from 'react-native';
import React, { VFC, useEffect } from 'react';
import tw from 'tailwind-rn';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Button } from 'react-native-elements';

type Props = NativeStackScreenProps<RootStackParamList, 'RdeuxTK'>;

export const ReduxTKScreen: VFC<Props> = ({ navigation }) => {
  useEffect(() => {
    console.log('mounted ReduxTK');
    return () => {
      console.log('un-mounted ReduxTK');
    };
  }, []);
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>ReduxTKScreen</Text>
      <View style={tw('my-3')}>
        <Button
          title="Go to FlexBox"
          onPress={() => navigation.navigate('FlexBox')}
        />
      </View>
    </View>
  );
};

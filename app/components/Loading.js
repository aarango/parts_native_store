import React from 'react';
import { StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import { Overlay } from 'react-native-elements';
import { Colors } from '@auteco/theme';


const Loading = ({ isVisible, text }) => {
  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rgba(0,0,0,0.5"
      overlayBackgroudColot="transparent"
      overlayStyle={styles.overlay}
    >
      <View>
        <ActivityIndicator size="large" color={Colors.ORANGE_BG}/>
        {text && <Text>{text}</Text>}
      </View>
    </Overlay>
  );
};

export default Loading;

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 300,
    backgroundColor: Colors.GRAY_LIGHT,
    borderColor: Colors.ORANGE_BG,
    borderWidth: 2,
    borderRadius: 20,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#00a680',
    textTransform: 'uppercase',
    marginTop: 10,
  },
});

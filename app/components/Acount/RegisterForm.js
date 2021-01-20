import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { Colors } from '@auteco/theme';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());

  const onSubmit = () => {
    console.log(formData);
  };

  const onChange = (event, type) => {
    //console.log({ [type]: event.nativeEvent.text });
    //setFormData({ [type]: event.nativeEvent.text });
    setFormData({formData, [type]: event.nativeEvent.text })
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.inputForm}
        onChange={(event) => onChange(event, 'email')}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRigth}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showPassword ? false : true}
        //onChange={(event) => onChange(event, 'password')}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={styles.iconRigth}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Input
        placeholder="Repetir contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showRepeatPassword ? false : true}
        //onChange={(event) => onChange(event, 'repeatPassword')}
        rightIcon={
          <Icon
            type="material-community"
            name={showRepeatPassword ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={styles.iconRigth}
            onPress={() => setShowRepeatPassword(!showRepeatPassword)}
          />
        }
      />
      <Button
        title="Registrarse"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnStyle}
        onPress={() => onSubmit()}
      />
    </View>
  );
}

function defaultFormValue() {
  return {
    email: '',
    password: '',
    repeatPassword: '',
  };
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 30,
  },
  inputForm: {
    //borderRadius: 5,
    //borderWidth: 1,
    marginTop: 20,
    //height: 50,
    width: '100%',
  },
  btnContainer: {
    padding: 6,
    fontSize: 16,
  },
  btnStyle: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 50,
    width: '100%',
  },
  iconRigth: {
    color: Colors.GRAY_TEXT,
  },
});

import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as ImagePicker from 'expo-image-picker';
import React, { useRef, useCallback } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  View,
  TextInput,
  Alert,
} from 'react-native';

import theme from '../../../../global/styles/theme';
import { useAuth } from '../../../../shared/hooks/auth';
import Input from '../../components/Form/Input';

// import Input from '../../components/Input';

// import getValidationErrors from '../../utils/getValidationErros';
import {
  Container,
  BackButton,
  UserAvatarButton,
  UserAvatar,
  PowerButton,
  ConfirmChangeButton,
  PasswordWrapper,
} from './styles';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const { user, signOut } = useAuth();

  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const emailInputRef = useRef<TextInput>(null);
  const oldPasswordInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  // const handleSubmit = useCallback(
  //   async (data: ProfileFormData) => {
  //     try {
  //       formRef.current?.setErrors({});

  //       const schema = Yup.object().shape({
  //         name: Yup.string().required('Nome obrigatório'),
  //         email: Yup.string()
  //           .required('E-mail obrigatório')
  //           .email('Digite um e-mail válido'),
  //         old_password: Yup.string(),
  //         password: Yup.string().when('old_password', {
  //           is: (val: string | any[]) => !!val.length,
  //           then: Yup.string().required('Campo obrigatório'),
  //           otherwise: Yup.string(),
  //         }),
  //         password_confirmation: Yup.string()
  //           .when('old_password', {
  //             is: (val: string | any[]) => !!val.length,
  //             then: Yup.string().required('Campo obrigatório'),
  //             otherwise: Yup.string(),
  //           })
  //           .oneOf([Yup.ref('password')], 'Passwords must match'),
  //       });

  //       const { name, email, old_password, password, password_confirmation } =
  //         data;

  //       const formData = {
  //         name,
  //         email,
  //         ...(data.old_password
  //           ? {
  //               old_password,
  //               password,
  //               password_confirmation,
  //             }
  //           : {}),
  //       };

  //       await schema.validate(data, {
  //         abortEarly: false,
  //       });

  //       const response = await api.put('/profile', formData);

  //       updateUser(response.data);

  //       navigation.goBack();

  //       Alert.alert('Perfil atualizado com sucesso!');
  //     } catch (err) {
  //       console.log(err);
  //       if (err instanceof Yup.ValidationError) {
  //         const error = getValidationErrors(err);

  //         formRef.current?.setErrors(error);

  //         return;
  //       }

  //       Alert.alert(
  //         'Erro ao atualizar o perfil',
  //         'Ocorreu um erro ao atualizar seu perfil, tente novamente.',
  //       );
  //     }
  //   },
  //   [navigation, updateUser],
  // );
  const handleSubmit = () => {};

  const handleUpdateAvatar = useCallback(async () => {
    const result = (await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      allowsMultipleSelection: true,
    })) as any;

    if (result.cancelled) {
      return;
    }
    const data = new FormData();

    data.append('avatar', {
      type: 'image/jpeg',
      name: `${user.id}.jpg`,
      uri: result.uri,
    } as any);

    // api.patch('users/avatar', data).then(apiResponse => {
    //   updateUser(apiResponse.data);
    // });
  }, [user.id]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: theme.colors.Secondary }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <BackButton onPress={handleGoBack}>
              <Icon name="chevron-left" size={24} color="#999591" />
            </BackButton>

            <PowerButton onPress={signOut}>
              <Icon name="power" size={24} color="#999999" />
            </PowerButton>

            <UserAvatarButton onPress={handleUpdateAvatar}>
              <UserAvatar
                source={{ uri: 'https://thispersondoesnotexist.com/image' }}
              />
            </UserAvatarButton>

            <Form initialData={user} ref={formRef} onSubmit={handleSubmit}>
              <Input
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => emailInputRef.current?.focus()}
              />

              <Input
                ref={emailInputRef}
                keyboardType="email-address"
                autoCorrect={false}
                icon="mail"
                autoCapitalize="none"
                name="email"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => oldPasswordInputRef.current?.focus()}
              />
              <PasswordWrapper>
                <Input
                  ref={oldPasswordInputRef}
                  secureTextEntry
                  icon="lock"
                  name="old_password"
                  placeholder="Senha atual"
                  textContentType="newPassword"
                  returnKeyType="next"
                  onSubmitEditing={() => passwordInputRef.current?.focus()}
                />

                <Input
                  ref={passwordInputRef}
                  icon="lock"
                  secureTextEntry
                  name="password"
                  placeholder="Senha"
                  textContentType="newPassword"
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    confirmPasswordInputRef.current?.focus()
                  }
                />

                <Input
                  ref={confirmPasswordInputRef}
                  secureTextEntry
                  icon="lock"
                  name="password_confirmation"
                  placeholder="Confirmar senha"
                  textContentType="newPassword"
                  returnKeyType="send"
                  onSubmitEditing={() => formRef.current?.submitForm()}
                />
              </PasswordWrapper>

              <ConfirmChangeButton
                // loading={false}
                onPress={() => formRef.current?.submitForm()}
              >
                Confirmar mudanças
              </ConfirmChangeButton>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Profile;

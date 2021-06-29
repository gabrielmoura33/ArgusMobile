import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import React, { useCallback, useRef } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native';
import * as Yup from 'yup';

import logoSrc from '../../../../assets/company/logo.png';
import theme from '../../../../global/styles/theme';
import { useAuth } from '../../../../shared/hooks/auth';
import api from '../../../../shared/services/api';
import getValidationErrors from '../../../../shared/utils/getValidationErrors';
import SignInput from '../SignIn/components/SignInput';
import {
  Container,
  Logo,
  ContentContainer,
  WelcomeText,
  Button,
  Label,
} from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

function SignUp() {
  const { user } = useAuth();
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No minimo 6 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', {
          ...data,
          birth_date: user.birth_date || undefined,
        });

        Alert.alert(
          'Cadastro realizado com sucesso',
          'Um e-mail de confirmação foi enviado para o sua caixa de mensagem!',
        );
        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        // console.log(err);
        Alert.alert('Erro na autenticação', 'Ocorreu um erro na autenticação');
      }
    },
    [navigation, user.birth_date],
  );
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.colors.DarkBackground }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Logo source={logoSrc} />
          <ContentContainer>
            <WelcomeText>Vamos {'\n'} começar!</WelcomeText>
            <Form
              onSubmit={handleSignUp}
              ref={formRef}
              initialData={{ name: user.name }}
            >
              <SignInput
                icon="user"
                name="name"
                textContentType="name"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />
              <Label>Nome</Label>
              <SignInput
                ref={emailInputRef}
                keyboardType="email-address"
                textContentType="emailAddress"
                autoCorrect={false}
                autoCapitalize="none"
                name="email"
                icon="mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Label>E-Mail</Label>
              <SignInput
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                icon="lock"
                returnKeyType="send"
                textContentType="newPassword"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
              <Label>Senha</Label>
            </Form>

            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              Cadastrar
            </Button>
          </ContentContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignUp;

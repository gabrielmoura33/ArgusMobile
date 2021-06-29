import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import React, { useRef, useCallback } from 'react';
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
import { useAccess } from '../../../../shared/hooks/access';
import { useAuth } from '../../../../shared/hooks/auth';
import getValidationErrors from '../../../../shared/utils/getValidationErrors';
import SignInput from './components/SignInput';
import {
  Container,
  Logo,
  ContentContainer,
  WelcomeText,
  Button,
  Label,
  LabelWrapper,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}
function SignIn() {
  const { handleSetFirstLaunch } = useAccess();
  const { signIn } = useAuth();
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const handleNavigateSignUp = useCallback(() => {
    return navigation.navigate('SignUp');
  }, [navigation]);

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha Obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        handleSetFirstLaunch();
        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert('Ops...', 'Verifique suas informaçōes e tente novamente');
      }
    },
    [handleSetFirstLaunch, signIn],
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
            <WelcomeText>Bem-vindo!</WelcomeText>
            <Form onSubmit={handleSignIn} ref={formRef}>
              <SignInput
                ref={emailInputRef}
                keyboardType="email-address"
                autoCorrect={false}
                icon="mail"
                autoCapitalize="none"
                name="email"
                textContentType="emailAddress"
                placeholder="Digite seu e-mail"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current?.focus()}
              />
              <Label>E-Mail</Label>
              <SignInput
                ref={passwordInputRef}
                icon="lock"
                name="password"
                textContentType="newPassword"
                returnKeyType="send"
                placeholder="Digite sua senha"
                secureTextEntry
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
              Entrar
            </Button>
            <LabelWrapper onPress={handleNavigateSignUp}>
              <Label>Não tem uma conta? Cadastre-se</Label>
            </LabelWrapper>
          </ContentContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignIn;

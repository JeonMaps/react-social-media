import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Button from '../components/Button'
import { wp } from '../helpers/common'
import  Home from '../assets/icons/Home'
import { useRouter } from 'expo-router'
import { theme } from '../constants/theme'

const Login = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <Text>Login</Text>
      <TextInput></TextInput>
      <Home strokeWidth={2} color={theme.colors.rose} onPress={() => {router.push('welcome')}}></Home>
      <Button title="Login" buttonStyle={{marginHorizontal: wp(20)}}/>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({

})
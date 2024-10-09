import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import { useAuth } from '../../contexts/AuthContext'
import { supabase } from '../../lib/supabase'

const Home = () => {

    const { user, setAuth } = useAuth()

    

    const onLogout = async () => {
        // setAuth(null);
        const {error} = await supabase.auth.signOut();
        if(error) {
            Alert.alert('Sign Out', "Error signing out!")
        }
    }
    return (
        <ScreenWrapper>
            <Text>Home</Text>
            <Button title="logout" onPress={onLogout} />
        </ScreenWrapper>
    )
}

export default Home

const styles = StyleSheet.create({})
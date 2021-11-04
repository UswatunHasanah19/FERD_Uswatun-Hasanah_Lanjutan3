import React from 'react'
import { Text, View } from 'react-native'

export default function Header() {
    return (
    <View style={{ backgroundColor: '#7C9473', padding: 10 }}>
        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold'}}>
            Customer
        </Text>
    </View>
    )
}
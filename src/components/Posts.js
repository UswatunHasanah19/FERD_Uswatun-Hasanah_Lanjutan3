import React from "react";
import { Text, View, Button } from 'react-native';

const Posts = ({navigation }) => {
    return( 
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text> Home Page </Text>
            <Button 
            title={"ke  halaman Home"} any
            onPress={() => navigation.navigate("Home")}
            />
        </View>
    );
}

export default Posts;
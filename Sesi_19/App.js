import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text,  ScrollView, Image} from 'react-native';

export default function App() {
  const [user, setUser] = useState([]);
  let datauser = async () => {
    await fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((user) => setUser(user.results));
  };
  useEffect(() => {
    datauser();
  }, []);
  return (
    
    <View style={styles.container}>
      <View style={{ backgroundColor: '#7C9473', padding: 10 }}>
        <Text style={{ fontSize: 30, color: 'white',  fontWeight: 'bold'}}>
            Customer
        </Text>
    </View>
      <ScrollView style={styles.scroll}>
        {
          user.map((user, idx) => (
        <View style={styles.box} key={idx} >

          <View style={styles.pict}>
          <Image
        style={styles.uswaLogo}
        source={{ uri: user.picture.thumbnail }}
      />
          </View>

          <View style={styles.desc}>
          <Text style={{ fontSize: 20, color: 'black',  fontWeight: 'bold'}}>
            {user.name.title} {user.name.first} {user.name.last}
          </Text>
          <Text>{user.location.street.number} {user.location.street.name}, {user.location.city} {user.location.country}</Text>
          <Text>
            {user.email}
          </Text>
          </View>  
           
        </View>  
        ))
        }  
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: '#7C9473'
  },
  scroll: {
    padding: 10
  },
  box: {
    backgroundColor: '#DCDCDC',
    marginBottom: 10,
    padding: 10 ,
    flexDirection:'row',
    borderRadius: 10
  },
  pict: {
    flex:0.4,
    margin:5,
    borderRadius: 10
    
  },
  desc: {
    flex:0.8,
    margin:5,
    padding:5
  },
  uswaLogo: {
    flex: 1,
    aspectRatio: 1,
  },

});


import React, {useEffect, useState} from 'react';
import { Button,StyleSheet, Text, View, TextInput, Pressable, } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Post(){
    
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [id, setId] = useState(-1)


    const addPost = async () => {
        const res = await fetch('http://192.168.43.228:4000/posts/', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({ title, description })
        })
        const data = await res.json()
        setPosts([...posts, data])
        setTitle('')
        setDescription('')

    }

    const deletePost = async (id) => {
        await fetch(`http://192.168.43.228:4000/posts/${id}`, {
            method: 'DELETE',
        })
        const data = posts.filter((post) => post.id !== id).map(({id, title, description}) => ({id, title, description}))
        setPosts(data)
    }

    const editPost = async (id) => {
        const res = await fetch(`http://192.168.43.228:4000/posts/${id}`, {
            method: 'GET',
        })
        const data = await res.json()
        setId(id)
        setTitle(data.title)
        setDescription(data.description)      
    }

    const updatePost = async () => {
        const temp = posts
        const res = await fetch(`http://192.168.43.228:4000/posts/${id}`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({ title, description })
        })
        const data = await res.json()
        const newData = temp.map(item => item.id === data.id ? data : item)
        setPosts(newData)
        setTitle('')
        setDescription('')
        setId(-1)
    }

    const savePost = () => {
        if(id !== -1){
            updatePost()
        }else{
            addPost()
        }        
    }

    const getData = async () => {
        const res= await fetch('http://192.168.43.228:4000/posts/')
        const data = await res.json()
        setPosts(data)
    }

    useEffect(() => {
        getData()
    }, [])

    
    return(
        <>
        <TextInput 
            style={styles.input}
            placeholder="Title"
            placeholderTextColor='#ffffff'
            onChangeText={input=> setTitle(input)}
            defaultValue={title}
        />
        <TextInput 
            style={styles.input}
            placeholder="Deskripsi"
            placeholderTextColor='#ffffff'
            onChangeText={input => setDescription(input)}
            defaultValue={description}
        />
        <Button 
        color="green" 
        title='Save' 
        onPress={savePost}
        />
        {
            posts.map((post, idx) => (
                <View style={styles.list} key={idx}>
                    <View style={styles.lists}>
                        <View style={styles.box}>
                            <Text style={styles.title}>
                                {post.title}
                            </Text>
                            <Text style={styles.description}>
                                {post.description}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.action}>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <Pressable onPress={() => editPost(post.id)} >
                                <MaterialCommunityIcons name="circle-edit-outline" size={30}/>
                            </Pressable>
                            <Pressable onPress={() => deletePost(posts[idx].id)} >
                                <MaterialCommunityIcons name="delete" size={30} color={'red'}/>
                            </Pressable>
                        </View>
                    </View>
                </View>
            ))
        }
        </>
    )
}

const styles = StyleSheet.create({
    list: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 10,
      borderRadius:10,
      backgroundColor: '#E8EAE6',
    },
    lists: {
      flex: 4,
    },
    action: {
      flex: 1,
      marginTop: 15,
    },
    box: {
      flex: 1,
      backgroundColor: '#E8EAE6',
      padding: 7,
      borderRadius: 5
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "black"
    },
    description: {
      fontSize: 15,
      fontWeight: 'normal',
      color: "black"
    },
    input: {
      color: '#ffffff',
      padding: 5,
      borderWidth: 1,
      borderColor: '#ffffff',
      marginBottom: 5
    }
});

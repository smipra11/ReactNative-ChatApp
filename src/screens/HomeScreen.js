import React, { useContext, useState, useEffect } from 'react'
import { View,Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Title } from 'react-native-paper';
import FormButton from "../components/FormButton"
import { AuthContext } from '../navigation/AuthProvider';
import { List, Divider } from 'react-native-paper';
import firebase from 'firebase';

export default function HomeScreen({ navigation }) {

  const [threads, setThreads] = useState([])

  useEffect(() => {
    const unsubscribe = firebase.firestore()
      .collection('THREADS')
      // .orderBy('latestMessage.createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const threads = querySnapshot.docs.map(documentSnapshot => {
          return {
            _id: documentSnapshot.id,
            // give defaults
            name: '',
            ...documentSnapshot.data()
          };
        });

        setThreads(threads);

        
      });

    /**
     * unsubscribe listener
     */
    return () => unsubscribe();
  }, []);


  return (
    <View style={styles.container}>
      <FlatList
        data={threads}
        keyExtractor={item => item._id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Room', { thread: item })}
          ><View>
           <Text style= {styles.listTitle}>
              {item.name}
              </Text>
        <Text>"Item Description"</Text>
              </View>
              
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listTitle: {
    fontSize: 20,
    color: "black",
    margin:10
  },
  listDescription: {
    fontSize: 16,
    margin:10
  }
});
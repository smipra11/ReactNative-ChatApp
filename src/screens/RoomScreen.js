import React, { useContext,useState,useEffect } from 'react';
import { GiftedChat,Bubble } from 'react-native-gifted-chat';
import { AuthContext } from '../navigation/AuthProvider';
import firebase from 'firebase';

export default function RoomScreen({route}) {
  const { user } = useContext(AuthContext);
  const currentUser = user.toJSON();
  const { thread } = route.params;

  useEffect(() => {
    console.log({ user });
  }, []);


  const [messages, setMessages] = useState([
    /**
     * Mock message data
     */
    // example of system message
    {
      _id: 0,
      text: 'New room created.',
      createdAt: new Date().getTime(),
      system: true
    },
    // example of chat message
    {
      _id: 1,
      text: 'Henlo!',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Test User'
      }
    }
  ]);

  // helper method that is sends a message
  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  function renderBubble(props){
    return(
      <Bubble
      {...props}
        wrapperStyle={{
          right: {
            // Here is the color change
            backgroundColor: '#6646ee'
          }
        }}
        textStyle={{
          right: {
            color: '#fff'
          }
        }}

      />
    )
  }

  async function handleSend(messages) {
    const text = messages[0].text;
  
   firebase.firestore()
      .collection('THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .add({
        text,
        createdAt: new Date().getTime(),
        user: {
          _id: currentUser.uid,
          email: currentUser.email
        }
      });
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      user={{ _id: 1,name:" User Test" }}
      renderBubble= {renderBubble}
      
      placeholder="Type your message here..."
      showUserAvatar
      alwaysShowSend
      scrollToBottom
    />
  );
}
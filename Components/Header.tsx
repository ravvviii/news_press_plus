import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


export default function Header() {
  return (
    <View>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://pbs.twimg.com/profile_images/1632647183735619584/VcsKSpkF_400x400.jpg' }} 
          style={styles.adminImage} 
        />
        <Text style={styles.appName}>Press Plus</Text>
       
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 5,
    backgroundColor: '#2C3A47',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  adminImage: {
    marginTop: 20,
    height: 50,
    width: 50,
    borderRadius: 25,
    marginBottom: 20,
  },
  appName: {
    fontSize: 20,
    color: '#FFFFFF', // Changed text color to white
    marginLeft: 70,
    fontWeight: '600',
  },
  Action_header: {
    backgroundColor: '#4834DF',
    paddingBottom: 10,
    flexDirection: 'row',  // Align items in a row
    justifyContent: 'space-around',  // Space out the items evenly
    paddingVertical: 10,
  },
  
  Setting:{
    marginLeft:10
    
},
Search:{
      marginLeft:110,
      marginRight:10
      

  },

});

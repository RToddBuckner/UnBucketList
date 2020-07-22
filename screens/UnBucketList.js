import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ListItem,
  List,
} from 'react-native';
import { connect } from 'react-redux';

const UnBucketList = (props) => {
    console.log('PASSED PROPS TO LIST COMPONENT',props)
    return(
        <View style={styles.container}>
             <FlatList
            data={props.events}
            renderItem={({item}) =>(
                console.log('item object',item),
                <Text style={styles.paragraph}>
                Event Name: {item.eventName} 
                {'\n'}
                Event Details: {item.eventDetails} 
                {'\n'}
                Event Location: {item.eventLoc}
                {'\n'}
                Event Time: {item.eventTime}
                {'\n'}
                Participants: {item.eventGuests} 
                {'\n'}  
                </Text>
                
                
                               
            )}
            
            />
        </View>
       
    )
}
const styles = StyleSheet.create({
    container: {
        flex: .5,
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 500
      },
  
  });




export default UnBucketList;
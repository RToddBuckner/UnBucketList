import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import UnBucketList from './UnBucketList'


const mapStateToProps = (state) => ({
  events: state.unBucket.events,
});

const mapDispatchToProps = (dispatch) => ({
  // pertinent actions here
});

const Home = (props) => {
  console.log(props.events);
  
  // const eventList = [];
  // props.events.forEach((events,i) => {
  //   console.log(i)
  //   eventList.push(
  //     <UnBucketList key={`list${i}`}
  //       eventName={events.eventName}
  //      eventName={events.eventDetails}
  //      eventLoc={events.eventLoc}
  //      eventTime={events.eventTime}
  //      participants={events.eventGuests}
  //      id={`list${i}`}/>
  //   )

  // }) 
  return (
    

    <View style={styles.container}>
      <Text>This is Home</Text>
      <br></br>
      <UnBucketList events={props.events}/>
         <br></br>
      <TouchableOpacity
        onPress={() => {
          console.log('Add event pressed');
          props.navigation.navigate('AddEvent');
        }}
      >
        <Text>+ Add an Event</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log('Edit event pressed');
          props.navigation.navigate('EditEvent');
        }}
      >
        <Text>Edit an Event</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

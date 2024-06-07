import React, {useState, useEffect} from 'react';
import {Alert, FlatList,  StyleSheet, Text, View} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
// import Storage from 'react-native-storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';
//
//
// const storage = new Storage({
//   // maximum capacity, default 1000 key-ids
//   size: 10,
//
//   // Use AsyncStorage for RN apps, or window.localStorage for web apps.
//   // If storageBackend is not set, data will be lost after reload.
//   //storageBackend: AsyncStorage, // for web: window.localStorage
//   storageBackend: window.localStorage,
//
//   // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
//   // can be null, which means never expire.
//   // defaultExpires: 1000 * 3600 * 24,
//   defaultExpires: null,
//
//   // cache data in the memory. default is true.
//   enableCache: true,
//
//   // if data was not found in storage or expired data was found,
//   // the corresponding sync method will be invoked returning
//   // the latest data.
//   sync: {
//     // we'll talk about the details later.
//   }
// });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'white',
  },
});

const  _storeData = async () => {
      try {
        console.log("saving.." + JSON.stringify(_toDos));
//         storage.save({
//           key: 'ToDos', // Note: Do not use underscore("_") in key!
//           id: 'currentUser', // Note: Do not use underscore("_") in id!
//           data: JSON.stringify(_toDos),
//           expires: 1000 * 60
//         });


      } catch (error) {
        // Error saving data
        console.log();
      }
    };

const ListItem =({item}) => {
    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <React.Fragment>
         <BouncyCheckbox
            isChecked={isChecked}
            onPress={isChecked => {
                item.done = !item.done;
                setIsChecked(item.done);
//                 console.log(item);
              }}
             text={item.name} style={{marginBottom: 16}}
         />
        </React.Fragment>
    );
}

export function ItemsList({items} : Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} />}
      />
    </View>
  );
};

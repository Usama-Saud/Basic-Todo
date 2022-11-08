// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Button,
//   TextInput,
//   ScrollView,
//   FlatList,
//   SafeAreaView,
//   ActivityIndicator,
// } from 'react-native';

// export default function App() {
//   //Hooks give us the way to use special functions to tap into certain features in
//   //React Liberary

//   const [name, setName] = useState('usama'); //passing initial value usama in state,it can be nill as well
//   const [person, setPerson] = useState({name: 'Ali', age: 30}); //several states in react component
//   const [data, setData] = useState({firstName: 'Umair', newAge: 20});
//   const [user, setUser] = useState('Imran');
//   const [birth, setBirth] = useState('1950');

//   const [people, setPeople] = useState([
//     {name: 'ALI', key: '1'}, //this is array of objects
//     {name: 'Umer', key: '2'}, //we can use id instead of key as well

//     {name: 'ALI', key: '4'}, //this is array of objects
//     {name: 'Umer', key: '5'},
//     {name: 'Tahir', key: '6'},
//     {name: 'ALI', key: '7'}, //this is array of objects
//     {name: 'Umer', key: '8'},
//     {name: 'Tahir', key: '9'},
//     {name: 'ALI', key: '10'}, //this is array of objects
//     {name: 'Umer', key: '11'},
//     {name: 'Tahir', key: '12'},
//   ]);

//   const [val, setVal] = useState([{fName: 'Ahmed', age: 19}]);

//   const [society, setSociety] = useState([
//     {name: 'Usama', id: 25}, //aray of objects
//     {name: 'Anees', id: 35},
//   ]);

//   const handleUsama = () => {
//     setName('Usama Saud');
//     setPerson({name: 'M. Ali', age: 35});
//   };

//   const handleUmair = () => {
//     setData({firstName: 'Umair Khan', newAge: 22});
//   };

//   const handleVal = () => {
//     setVal({fName: 'Ahmed Boi', age: 26});
//   };

//   return (
//     <ScrollView style={{flex: 1}}>
//       <View>
//         <View style={styles.container}>
//           <View style={styles.header}>
//             <Text style={{fontSize: 20}}>Practice Project</Text>
//           </View>

//           <View style={styles.inherit}>
//             <Text
//               style={{
//                 fontSize: 30,
//                 borderRadius: 6,
//                 borderWidth: 2,
//                 margin: 5,
//                 textAlign: 'center',
//               }}>
//               My name is: {name}
//             </Text>

//             <Text
//               style={{
//                 fontSize: 30,
//                 borderRadius: 6,
//                 borderWidth: 2,
//                 margin: 5,
//                 textAlign: 'center',
//               }}>
//               His Name is: {person.name}, and Age is: {person.age}
//             </Text>

//             <Text
//               style={{
//                 fontSize: 30,
//                 borderRadius: 6,
//                 borderWidth: 2,
//                 margin: 5,
//                 textAlign: 'center',
//               }}>
//               New name is: {data.firstName}, and new age is: {data.newAge}
//             </Text>

//             <Text
//               style={{
//                 fontSize: 30,
//                 borderRadius: 6,
//                 borderWidth: 2,
//                 margin: 5,
//                 textAlign: 'center',
//               }}>
//               Correct Ahmd: {val.fName}, and his age is: {val.age}
//             </Text>
//           </View>

//           <View style={styles.buttonContainer}>
//             <Button title="Click to update name" onPress={handleUsama}></Button>
//           </View>

//           <View style={styles.newButton}>
//             <Button title="click to change Data" onPress={handleUmair}></Button>
//           </View>
//           <View style={styles.ahmedButt}>
//             <Button title="Click on Ahmed" onPress={handleVal}></Button>
//           </View>

//           <View style={{marginTop: 10}}>
//             <Text style={{fontSize: 30}}>Enter userName and Age:</Text>

//             <TextInput
//               style={styles.input}
//               placeholder="Enter UserName"
//               //multiline
//               keyboardType="default"
//               onChangeText={val => setUser(val)}></TextInput>

//             <TextInput
//               style={styles.input2}
//               placeholder="Enter Age"
//               keyboardType="numbers"
//               onChangeText={val => setBirth(val)}></TextInput>

//             <Text style={{fontSize: 25, textAlign: 'center', marginTop: 10}}>
//               Prime Minister Name is: {user}
//             </Text>
//             <Text style={{fontSize: 25, textAlign: 'center', marginTop: 10}}>
//               Prime Minister Birth is: {birth}
//             </Text>
//           </View>

//           {/* <View style={{}}>
//               <ActivityIndicator size="large" color="#00ff00" />
//             </View> */}

//           <FlatList
//             data={people}
//             //numColumns={2}
//             keyExtractor={item => item.key} //it will take all the items of array
//             //Destructering the item
//             //item is the individual value in the state, name and key/id
//             renderItem={({item}) => (
//               <Text style={styles.mapvalue}> {item.name}</Text>
//             )}
//           />
//           <FlatList
//             data={society} //its read only
//             keyExtractor={item => item.id} //all the items/objects of array
//             renderItem={({item}) => (
//               <Text style={styles.newMap}> {item.name}</Text>
//             )}
//           />

//           {/* <View>  //We can use FlatList Instead
//         {people.map(e => (
//           <View key={e.key}>
//             <Text style={styles.mapvalue}> {item.name} </Text>
//           </View>
//         ))}
//       </View> */}
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     fontsize: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   header: {
//     backgroundColor: '#f71',
//     padding: 30,
//     borderRadius: 10,
//   },
//   inherit: {
//     backgroundColor: '#aa4',
//     padding: 15,
//     margin: 15,
//     borderRadius: 10,
//   },
//   buttonContainer: {
//     backgroundColor: '#434',
//     marginTop: 10,
//   },
//   newButton: {
//     marginTop: 15,
//   },
//   ahmedButt: {
//     marginTop: 10,
//   },
//   input: {
//     marginTop: 10,
//     borderWidth: 2,
//     borderColor: 'ff3',
//     textAlign: 'center',
//     fontSize: 30,
//   },
//   input2: {
//     borderWidth: 2,
//     marginTop: 10,
//     borderColor: 'ff3',
//     textAlign: 'center',
//     fontSize: 30,
//   },
//   mapvalue: {
//     textAlign: 'center',
//     fontSize: 30,
//     color: '#ff5',
//     padding: 15,
//     backgroundColor: 'lightblue',
//     borderWidth: 2,
//     margin: 10,
//   },
//   newMap: {
//     textAlign: 'center',
//     fontSize: 30,
//     color: '#ff5',
//     padding: 15,
//     backgroundColor: 'green',
//     borderWidth: 2,
//     margin: 10,
//   },
// });

import React, {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ]);

  //key means to select that which object to delete
  //on every key press, 1 item will be deleted
  const pressHandler = key => {
    console.log('Key', key);
    //todos.filter means our program will filter/delete the current values/states on pressing the key step by step
    const deleteTodos = todos.filter(todo => todo.key != key);
    setTodos(deleteTodos);
  };
  //Create a function so it will add the new values before the array of objects
  //submitHandler will take a text which user will type in the textinput to get the new value
  //we need to call the submit handler from addTodo button, when we press on item
  //we need to pass the submitHandler as a prop to AddTodo in App.js
  const submitHandler = text => {
    if (text.length > 3) {
      //agr text ke lenght 3 sy brri h too list update hojay ge
      //setTodos will take a function as an argument because we gonna relay on the previous todos
      setTodos(prevTodos => {
        //returning a new array with a new object with a text we gonna pass through and previous todos
        //so, the new state will be this array
        return [...prevTodos, {text: text, key: Math.random().toString()}]; //...prevTodos is a spread operator and it will return the new array including all its previous values
      });
    } else {
      Alert.alert('Enter More Values');
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismiss keyboard', [
          {text: 'Understood', onPress: () => console.log('close alert')},
        ]);
      }}>
      <View style={styles.container}>
        {/* Header */}

        <Header />

        <View style={styles.content}>
          {/* Todo Form */}
          <AddTodo submitHandler={submitHandler} />

          <View style={styles.list}>
            <FlatList
              data={todos}
              //{({item})} it means we are destructuring the item, it will take all the array of object values 1 by 1
              renderItem={({item}) => (
                //Todoitem is the function in renderItem which returns some jsx
                <TodoItem
                  style={{fontSize: 25}}
                  item={item}
                  pressHandler={pressHandler} //we're receiving pressHandler function here in this component
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4dbddd',
  },
  content: {
    flex: 1,
    padding: 25,
  },
  list: {
    flex: 1,
    marginTop: 50,
  },
});

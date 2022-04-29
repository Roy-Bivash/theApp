import * as React from 'react';
import { View} from 'react-native';

class Espacement extends React.Component {
  render(){
    return (
      <View style={{
        height: this.props.espacement,
        backgroundColor: 'transparent'
      }}>
      </View>
    )
  }
  
}


export default Espacement;
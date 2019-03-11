import React, {
	Component
}
from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	ImageBackground,
	AppRegistry,
	Button,
	Alert,
	TouchableOpacity
}
from 'react-native';
import Orientation from 'react-native-orientation';
import {
	createStackNavigator,
	createAppContainer
}
from 'react-navigation';
import HomeScreen from '../app'

class PageWriteLetter extends React.Component {
	_onPressButton_back() {
		this.props.navigation.goBack();
	}

	_onPressButton1() {
		Alert.alert('感情问题');
	}

	_onPressButton2() {
		Alert.alert('事业困惑');
	}

	_onPressButton3() {
		Alert.alert('朋友之间');
	}

	_onPressButton4() {
		Alert.alert('家庭烦恼');
	}

	_onPressButton5() {
		Alert.alert('碎碎念');
	}

	render() {
		return (
			 < ImageBackground
			style = {
				styles.container
			}
			source = {
				require("./../img/background2.jpg")
			}
			 >

			 < View style = { {
					flex: 1,
					flexDirection: 'column',
				}
			}
			 >
			 < View style = { {
					flex: 1
				}
			}
			/>
			        <View style={{flex: 1}}>
			              <View style={{
			                flex: 1,
			                flexDirection: 'row'
			              }}>
			                <View style={{flex: 66}}>
			                      <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
			                        <TouchableOpacity style={{ height: 60, width:60, marginTop: 10 }} onPress={() => this._onPressButton_back()}>
			                        </TouchableOpacity >
			 <  / View >
			 <  / View >
			 < View style = { {
					flex: 93
				}
			}
			 >
			 < View style = { {
					flex: 1,
					flexDirection: 'row'
				}
			}
			 >
			 < TouchableOpacity style = { {
					flex: 1
				}
			}
			onPress = {
				() => this._onPressButton1()
			}
			 >
			 <  / TouchableOpacity >
			 < TouchableOpacity style = { {
					flex: 1
				}
			}
			onPress = {
				() => this._onPressButton2()
			}
			 >
			 <  / TouchableOpacity >
			 < TouchableOpacity style = { {
					flex: 1
				}
			}
			onPress = {
				() => this._onPressButton3()
			}
			 >
			 <  / TouchableOpacity >
			 < TouchableOpacity style = { {
					flex: 1
				}
			}
			onPress = {
				() => this._onPressButton4()
			}
			 >
			 <  / TouchableOpacity >
			 < TouchableOpacity style = { {
					flex: 1
				}
			}
			onPress = {
				() => this._onPressButton5()
			}
			 >
			 <  / TouchableOpacity >
			 <  / View >
			 <  / View >
			 < View style = { {
					flex: 153
				}
			}
			/>
			              </View >
			 <  / View >
			 <  / View >
			 <  / ImageBackground > );
	}
}

const styles = StyleSheet.create({
		container: {
			flex: 1,
			paddingTop: Platform.OS === 'ios' ? 60 : 80,
		}
	});

//const AppNavigator = createStackNavigator(
//  {
//    Home: HomeScreen,
//    PageWriteLetter: PageWriteLetter
//  }
//);

export default PageWriteLetter;

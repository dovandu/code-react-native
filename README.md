# code-react-native

## 1. fix bug : [iOS] Navigation from drawer doesn't work

https://github.com/wix/react-native-navigation/issues/1143#issuecomment-297627738

you can export navigator reference from your root screen. You need to define variable and export it:

```javascript
export let rootNavigator = null
```

Then you need to assign navigator ref to it on your RootScreen constructor:

```javascript
class RootScreen extends Component {
  constructor() {
    rootNavigator = this.props.navigator
  }
  // ..some other code
}
```

And then you can use it in the whole app after RootScreen initialized:
```javascript
import {rootNavigator} from './RootScreen'

class Drawer extends Component {
  handleNavigate() {
    this.props.navigator.push({screen: 'SomeScreen'}) // won't work
    rootNavigator.push({screen: 'SomeScreen'}) // works as well
  }
}
```

Or you can also wrap each screen with HOC and pass navigation prop to it from somewhere and pass to your screens.

## 2. fix bug : How to solve Google Play Services version collision in gradle dependencies

https://medium.com/@suchydan/how-to-solve-google-play-services-version-collision-in-gradle-dependencies-ef086ae5c75f


## 3. Regular Expressions: 

- In JavaScript, regular expressions are also objects. These patterns are used with the exec and test methods of RegExp, and with the match, replace, search, and split methods of String. This chapter describes JavaScript regular expressions.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
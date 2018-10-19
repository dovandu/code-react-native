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

## 4. Load data from url host ios: http://acb:3000/image.jpg ("abc")
- open Info.plist and add code : 
```swift
<key>NSAppTransportSecurity</key>
    <dict>
        <key>NSAllowsArbitraryLoads</key>
        <true/>
        <key>NSExceptionDomains</key>
        <dict>
            <key>abc</key>. // change this
            <dict>
                <key>NSExceptionAllowsInsecureHTTPLoads</key>
                <true/>
                <key>NSTemporaryExceptionMinimumTLSVersion</key>
                <string>TLSv1.1</string>
                <key>NSIncludesSubdomains</key>
                <true/>
            </dict>
        </dict>
    </dict>
```

## 5. Sign apk release
- 1: create file jks by android studio at app/
- 2: change app/build.gradle

```java
defaultConfig {
....
// add this
         signingConfigs {
                release {
                    if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                        storeFile file(MYAPP_RELEASE_STORE_FILE)
                        storePassword MYAPP_RELEASE_STORE_PASSWORD
                        keyAlias MYAPP_RELEASE_KEY_ALIAS
                        keyPassword MYAPP_RELEASE_KEY_PASSWORD
                    }
                }
              }

    }
    
    // add this
    buildTypes {
        release {
            minifyEnabled enableProguardInReleaseBuilds
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
            signingConfig signingConfigs.release
        }
    }
```
- 3: change gradle.properties
```java
android.useDeprecatedNdk=true
MYAPP_RELEASE_STORE_FILE=file.jks
MYAPP_RELEASE_KEY_ALIAS=key0
MYAPP_RELEASE_STORE_PASSWORD= ***
MYAPP_RELEASE_KEY_PASSWORD= ***
```

- 4 run cmd:
```sh
 $ cd android
 $ ./gradlew assembleRelease
```

## 6.[TextInput] When maxLength is full automatically focus next field 
https://github.com/facebook/react-native/issues/5617

## 7. React native keyboard bar
https://medium.com/@nhancv/react-native-keyboard-bar-b4af07434b6a



# code-react-native: https://github.com/ReactNativeNews/React-Native-Apps
```sh
chmod 755 android/gradlew
```
## react-native-navigation :
- exmaple v2: https://github.com/birkir/kvikmyndr-app , https://github.com/junedomingo/movieapp
- example v2: https://github.com/dabit3/react-native-navigation-v2/tree/Part1
- example v2: with redux:https://medium.com/@drorbiran/react-native-navigation-v2-adding-redux-b4fa0c0254d9
- with drawer+ tab: https://github.com/Vinu-MysteriousTechVision/TestProjectRNNavigationV2/blob/master/Sample3RNNavigationV2/src/Start.js
- with drawer: 
- fix icon bottomtab ios: https://github.com/wix/react-native-navigation/issues/1415
- switchToTab
```javascript
Navigation.mergeOptions(this.props.componentId, {
  bottomTabs: {
    currentTabIndex: 1
  }
}
```

### Item more : https://github.com/mxck/react-native-material-menu

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

- How disable drawer on current window:

```javascript
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(
            this.onNavigatorEvent.bind(this)
        );
    }

    // If this screen was the first screen app (like a slash or login page), you will need do this
    // componentWillMount() {
    //     this.props.navigator.setDrawerEnabled({
    //          side: "left",
    //          enabled: false
    //      });
    // }

    onNavigatorEvent(event) {
        switch (event.id) {
            case "willAppear":
                // On enter on this screen, enable the drawer
                this.props.navigator.setDrawerEnabled({
                    side: "left",
                    enabled: false
                });
                break;
            case "willDisappear":
                // On leave from this screen, enable the drawer
                this.props.navigator.setDrawerEnabled({
                    side: "left",
                    enabled: true
                });
                break;
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

## 8. Toast android and ios
https://github.com/remobile/react-native-toast.git

## 9. Animation 
- example: https://github.com/joeyschroeder/react-native-simple-animations
- lib: https://github.com/oblador/react-native-animatable

## 10. custom keyboar
https://github.com/douglasjunior/react-native-keyboard-manager
https://github.com/ardaogulcan/react-native-keyboard-accessory

## 11: Iphone Helper
https://github.com/sameer-ahmed/react-native-iphone-types-helper
https://github.com/ptelad/react-native-iphone-x-helper#readme

## 12: GREAT ON EVERY DEVICE
https://blog.solutotlv.com/size-matters/

## 13: react-native-render-html
https://github.com/archriss/react-native-render-html

## 14: How_to_add_Firebase_Auth_with_react_native

https://github.com/g6ling/React-Native-Tips/tree/master/How_to_add_Firebase_Auth_with_react_native

## 15: Click outside modal to close:

@mmazzarolo : Check this link first: https://facebook.github.io/react-native/docs/panresponder.html.
focus on locationX, locationY, PageX and PageY.

You can use console for log to see position you are tap on model view.
```javascrip
onPanResponderGrant: (evt, gestureState) => {
       if(event.nativeEvent.locationY !==event.nativeEvent.pageY){
this.setState({visible:false})
}
      },
```
For more information, check here: https://www.youtube.com/watch?v=HzpuBZK3Ef0

## 15. get refs when component connect redux:

- children ref = 'ABC'
- children of children ref = 'selector'

```sh
    connect(mapStateToProps, null, null, { withRef: true })(Component)
    
    this.refs.ABC.getWrappedInstance().refs['selector'].focus();
```
## 16. collapsible-navbar (scroll expand collapse show hide toolbar react native)
https://github.com/janicduplessis/collapsible-navbar
https://medium.com/@andi.gu.ca/a-collapsing-navbar-with-tabs-in-react-native-e80790588830

## 17: React-Native iOS - How can I navigate to a non-React-Native view (native iOS view controller) from a React-Native view with a button press?
- https://stackoverflow.com/a/46007680
- https://blog.bam.tech/developper-news/react-native-inside-native-apps-the-navigation-challenge
```swift
Yes this possible you can do by making application window root UINavigationController rather than UIViewController.
You need to make below changes in appDelegate.m
NSURL *jsCodeLocation;

jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
moduleName:@"projectName"
initialProperties:nil
launchOptions:launchOptions];
rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
UIViewController *rootViewController = [UIViewController new];
UINavigationController *navigationController = [[UINavigationController alloc] initWithRootViewController:rootViewController];
rootViewController.view = rootView;
self.window.rootViewController = navigationController;
navigationController.navigationBar.hidden = YES;
[self.window makeKeyAndVisible];

then pass call back to native code in any native class and push by below code
dispatch_async(dispatch_get_main_queue(), ^{
AppDelegate app = (AppDelegate)[[UIApplication sharedApplication] delegate];
MYViewController *dd = [[MYViewController alloc]init];

[((UINavigationController*)app.window.rootViewController) pushViewController:dd animated:YES];
});
```

## 18. Animation : https://animationbook.codedaily.io/introduction/

## 19. Push Notification for React Native: 
- Xcode setup: https://medium.com/google-cloud/push-notification-for-react-native-bef05ea4d1d0
- Acc developer setup: https://medium.com/@ankushaggarwal/generate-apns-certificate-for-ios-push-notifications-85e4a917d522

## 20. transitionconfig react navigation fast: 

- https://github.com/lintonye/react-native-diary
- https://github.com/fram-x/FluidTransitions#readme
- https://github.com/plmok61/react-navigation-transitions#readme

## 21. Keyboard placement (chat emoiji)
- https://github.com/shimohq/react-native-keyboard-view#readme

## 22: bug google sigin android, fb login

### a. google singin

```sh
WRONG SIGNIN Error: DEVELOPER_ERROR at new GoogleSigninError (GoogleSignin.android.js:53) at GoogleSignin.android.js:129 at RCTDeviceEventEmitter.emit (EventEmitter.js:181) at MessageQueue.__callFunction (MessageQueue.js:242) at MessageQueue.js:108 at guard (MessageQueue.js:46) at MessageQueue.callFunctionReturnFlushedQueue (MessageQueue.js:107) at debuggerWorker.js:71
```
- fix:

```sh
same here - anyone solved the problem?

EDIT:
Duh - Don't forget to add the SHA-1 of your debug keystore to firebase.

keytool -exportcert -list -v \
-alias androiddebugkey -keystore ~/.android/debug.keystore


```

https://developers.google.com/android/guides/client-auth

https://stackoverflow.com/questions/40088741/google-sign-in-error-statusstatuscode-developer-error-resolution-null

### b.fb login: 

- android facebook integration invalid key hash

https://stackoverflow.com/a/23863110

## 23: geolocation:
- fix the location timeout issue on android: https://github.com/Agontuk/react-native-geolocation-service
- android: https://github.com/Richou/react-native-android-location-enabler

## 24. Emoiji:
- emoiji lib: https://github.com/makemoji/Makemoji-React-Native


## 25: update state type object: 
- key: Best way to update / change state object in react native?
- https://stackoverflow.com/a/44208159/10819917


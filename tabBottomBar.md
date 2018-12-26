

```javascript
// BottomTab
const BottomTab = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: strings('tab_label.home'),
            tabBarIcon: ({focused, tintColor}) => <IconTab style={{backgroundColor: 'red'}} name="home"
                                                           focused={focused}/>,
            gesturesEnabled: false,
        }
    },
    News: {
        screen: NewsStack,
        navigationOptions: ({navigation, screenProps}) => {
            console.log('screenProps', screenProps)
            return {
                tabBarLabel: strings('tab_label.news'),
                tabBarIcon: (props) => <IconTab name="news" focused={props.focused} screenProps={screenProps}
                                                navigation={navigation}/>
            }
        }
    },
    Video: {
        screen: VideoStack,
        navigationOptions: ({navigation, screenProps}) => {
            return {
                tabBarLabel: strings('tab_label.video'),
                tabBarIcon: (props) => <IconTab name="video" focused={props.focused} screenProps={screenProps}
                                                navigation={navigation}/>
            }
        }
    },
    LiveStream: {
        screen: LiveStreamStack,
        navigationOptions: ({navigation, screenProps}) => {
            return {
                tabBarLabel: 'Truyền Hình',
                tabBarIcon: (props) => <IconTab name="livestream"  focused={props.focused} screenProps={screenProps}
                                                               navigation={navigation}/>,
            }
        }
    },
    Field: {
        screen: FieldStack,
        navigationOptions: {
            tabBarLabel: strings('tab_label.field'),
            tabBarIcon: ({focused, tintColor}) => <IconTab name="field" focused={focused}/>
        }
    },
}, {
    animationEnabled: true,
    initialRouteName: 'Home',
    navigationOptions: ({navigation}) => ({
        tabBarOnPress: (scene, jumpToIndex) => {
            jumpToIndex(scene.index);
        },
    }),
    tabBarOptions: {
        showIcon: true,
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.gray,
        labelStyle: {
            fontFamily: Fonts.type.base,
            fontSize: 13,
            marginTop: 28,
            paddingBottom: 2
        },
        style: {
            height: Metrics.tabHeight,
            shadowColor: '#000000',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 5,
            shadowOpacity: 1.0,
            padding: 4,
            paddingTop: 8,
        }
    },
});

// IconTab


const IconTab = (props) => {
    let icon = null;
    let isShowBadge = false;
    switch (props.name) {
        case 'home':
            icon = props.focused ? require('./assets/icons/ic_tab_home_active.png') : require('./assets/icons/ic_tab_home.png');
            break;
        case 'news':
            isShowBadge = !focused[props.name] && ((props.screenProps.news !== commonStore.prev_id_news && !props.focused) || commonStore.read_latest_id_news !== props.screenProps.news);
            icon = props.focused ? require('./assets/icons/ic_tab_news_active.png') : require('./assets/icons/ic_tab_news.png');
            break;
        case 'video':
            if (!focused['video'] && props.focused)
                focused['video'] = false;
            isShowBadge = !focused[props.name] && ((props.screenProps.video !== commonStore.prev_id_video) || commonStore.read_latest_id_video !== props.screenProps.video);
            icon = props.focused ? require('./assets/icons/ic_tab_video_active.png') : require('./assets/icons/ic_tab_video.png');
            break;
        case 'livestream':
            isShowBadge = !props.focused && props.screenProps.livestream === true;
            icon = props.focused ? require('./assets/icons/ic_tab_live_active.png') : require('./assets/icons/ic_tab_live.png');
            break;
        case 'field':
            icon = props.focused ? require('./assets/icons/ic_tab_field_active.png') : require('./assets/icons/ic_tab_field.png');
            break;
    }

    return <IconBadge
        MainElement={<Image source={icon} style={{width: 24, height: 24}} resizeMode={'contain'}/>}
        BadgeElement={<Text />}
        Hidden={!isShowBadge}
        IconBadgeStyle={{
            minWidth: 8,
            height: 8,
            top: -1,
            right: 0,
        }}
    />
};

```

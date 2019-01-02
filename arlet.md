```javascript
Alert.alert(
                I18n.t('notifi'),
                I18n.t('confirmUnFollow'),
                [
                    { text: I18n.t('no'), onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    {
                        text: I18n.t('yes'), onPress: () => {
                            const token = this.props.user.token
                            unFollow(token, { userfollow: userName }).then(res=>{
                               // console.log(res)
                                if (res.success){
                                    this._refreshFlatList()
                                }else {
                                    RCTToast.showShortCenter('Error, please try again or check connect')
                                }

                            })

                        }
                    },
                ],
                { cancelable: true }
            )
```

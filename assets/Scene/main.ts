
import { _decorator, Component, Node,Button, director, sys } from 'cc';
import { DemoSetting } from './DemoSetting';
const { ccclass, property } = _decorator;

@ccclass('Main')
export class Main extends Component {

    start () {
        if(DemoSetting.didSetup)
        {
            return;
        }
        console.log("start");
        DemoSetting.setup();
        var listener:TradplusAdsListener = {
            onInitFinish(success) {
                console.log("onInitFinish");
            }
        };
        TradPlusAds.setAdsListener(listener);
        var globalAdImpressionListener:TPGlobalAdImpressionListener = {
            onGlobalAdImpression(adInfo) {
                console.log("onGlobalAdImpression");
                console.log(JSON.stringify(adInfo));
            },
        };
        TradPlusAds.setGlobalAdImpressionListener(globalAdImpressionListener);
        //设置流量分组等自定数据，需要在初始化前设置
        var customMap =  {
            "user_id": "test_user_id",
            "user_age": 19,
            "segment_id": 1571,
            "bucket_id": 299,
            "custom_data": "TestIMP",
            "channel": "tp_channel",
            "sub_channel": "tp_sub_channel"
        };
        TradPlusAds.setCustomMap(customMap);
        TradPlusAds.initSDK(DemoSetting.AppID);
    }


    settingClick (button: Button) 
    {
        director.loadScene("Setting");
    }

    interstitialClick (button: Button) 
    {
        director.loadScene("Interstitial");
    }

    bannerClick (button: Button) 
    {
        director.loadScene("Banner");
    }

    rewardedClick (button: Button) 
    {
         director.loadScene("Rewarded");
    }

    nativeClick(button: Button)
    {
        director.loadScene("Native");
    }

    splashClick (button: Button) 
    {
        director.loadScene("Splash");
    }
    otherClick(button: Button)
    {
        director.loadScene("Other");
    }
}

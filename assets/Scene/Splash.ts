
import { _decorator, Button, Component, director, EditBox, Node, Toggle } from 'cc';
import { DemoSetting } from './DemoSetting';

const { ccclass, property } = _decorator;

@ccclass('Splash')
export class Splash extends Component {
    @property({ type: Toggle})
    private openAutoLoadCallbakToggle!: Toggle;

    start () {
        var listener:TPSplashListener = {
            onSplashLoaded(adUnitId, adInfo) {
                console.log("onSplashLoaded");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onSplashLoadFailed(adUnitId, error) {
                console.log("onSplashLoadFailed");
                console.log(adUnitId);
                console.log(JSON.stringify(error));
            },
            onSplashImpression(adUnitId, adInfo) {
                console.log("onSplashImpression");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onSplashShowFailed(adUnitId, adInfo, error) {
                console.log("onSplashShowFailed");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
                console.log(JSON.stringify(error));
            },
            onSplashClosed(adUnitId, adInfo) {
                console.log("onSplashClosed");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onSplashClicked(adUnitId, adInfo) {
                console.log("onSplashClicked");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onSplashStartLoad(adUnitId, adInfo) {
                console.log("onSplashStartLoad");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onSplashBiddingStart(adUnitId, adInfo) {
                console.log("onSplashBiddingStart");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onSplashBiddingEnd(adUnitId, adInfo, error) {
                console.log("onSplashBiddingEnd");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onSplashIsLoading(adUnitId) {
                console.log("onSplashIsLoading");
                console.log(adUnitId);
            },
            onSplashOneLayerStartLoad(adUnitId, adInfo) {
                console.log("onSplashOneLayerStartLoad");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onSplashOneLayerLoaded(adUnitId, adInfo) {
                console.log("onSplashOneLayerLoaded");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onSplashOneLayerLoadFailed(adUnitId, adInfo, error) {
                console.log("onSplashOneLayerLoadFailed");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
                console.log(JSON.stringify(error));
            },
            onSplashVideoPlayStart(adUnitId, adInfo) {
                console.log("onSplashVideoPlayStart");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onSplashVideoPlayEnd(adUnitId, adInfo) {
                console.log("onSplashVideoPlayEnd");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onSplashAllLoaded(adUnitId, isSuccess) {
                console.log("onSplashAllLoaded");
                console.log(adUnitId);
                console.log(isSuccess);
            },
            onZoomOutStart(adUnitId, adInfo) {
                console.log("onZoomOutStart");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onZoomOutEnd(adUnitId, adInfo) {
                console.log("onZoomOutEnd");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onSkip(adUnitId, adInfo) {
                console.log("onSkip");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onDownloadStart(adUnitId, adInfo, totalBytes, currBytes, fileName, appName) {
                console.log("onDownloadStart");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
                console.log(totalBytes);
                console.log(currBytes);
                console.log(fileName);
                console.log(appName);
            },
            onDownloadUpdate(adUnitId, adInfo, totalBytes, currBytes, fileName, appName, progres) {
                console.log("onDownloadUpdate");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
                console.log(totalBytes);
                console.log(currBytes);
                console.log(fileName);
                console.log(appName);
                console.log(progres);
            },
            onDownloadPause(adUnitId, adInfo, totalBytes, currBytes, fileName, appName) {
                console.log("onDownloadPause");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
                console.log(totalBytes);
                console.log(currBytes);
                console.log(fileName);
                console.log(appName);
            },
            onDownloadFinish(adUnitId, adInfo, totalBytes, currBytes, fileName, appName) {
                console.log("onDownloadFinish");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
                console.log(totalBytes);
                console.log(currBytes);
                console.log(fileName);
                console.log(appName);
            },
            onDownloadFailed(adUnitId, adInfo, totalBytes, currBytes, fileName, appName) {
                console.log("onDownloadFailed");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
                console.log(totalBytes);
                console.log(currBytes);
                console.log(fileName);
                console.log(appName);
            },
            onInstalled(adUnitId, adInfo, totalBytes, currBytes, fileName, appName) {
                console.log("onInstalled");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
                console.log(totalBytes);
                console.log(currBytes);
                console.log(fileName);
                console.log(appName);
            },
        };
        TradPlusSplash.setSplashListener(listener);
    }
    loadClick (button: Button) 
    {
        var customMap = {
            "user_id":"test_splash_userid",
            "custom_data":"splash_TestIMP",
            "segment_tag":"splash_segment_tag"
        }


        var extra :TPSplashExtra = {
            customMap:customMap,
            openAutoLoadCallback : this.openAutoLoadCallbakToggle.isChecked,
        };

        TradPlusSplash.loadSplashAd(DemoSetting.SplashPID,extra);
    }
    readyClick (button: Button) 
    {
       var bo = TradPlusSplash.splashAdReady(DemoSetting.SplashPID);
       console.log(bo);
    }
    showClick (button: Button) 
    {
        TradPlusSplash.showSplashAd(DemoSetting.SplashPID,"Splash");
    }
    entryAdScenarioClick (button: Button) 
    {
        TradPlusSplash.entrySplashAdScenario(DemoSetting.SplashPID,"Splash");
    }
    backClick (button: Button) 
    {
        director.loadScene("main");
    }
}
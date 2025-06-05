
import { _decorator, Button, Component, director, EditBox, Node, Toggle } from 'cc';
import { DemoSetting } from './DemoSetting';

const { ccclass, property } = _decorator;

@ccclass('Interstitial')
export class Interstitial extends Component {
    @property({ type: Toggle})
    private openAutoLoadCallbakToggle!: Toggle;

    start () {
        var listener:TPInterstitialListener = {
            onInterstitialLoaded(adUnitId, adInfo) {
                console.log("onInterstitialLoaded");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onInterstitialLoadFailed(adUnitId, error) {
                console.log("onInterstitialLoadFailed");
                console.log(adUnitId);
                console.log(JSON.stringify(error));
            },
            onInterstitialImpression(adUnitId, adInfo) {
                console.log("onInterstitialImpression");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onInterstitialShowFailed(adUnitId, adInfo, error) {
                console.log("onInterstitialShowFailed");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
                console.log(JSON.stringify(error));
            },
            onInterstitialClosed(adUnitId, adInfo) {
                console.log("onInterstitialClosed");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onInterstitialClicked(adUnitId, adInfo) {
                console.log("onInterstitialClicked");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onInterstitialStartLoad(adUnitId, adInfo) {
                console.log("onInterstitialStartLoad");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onInterstitialBiddingStart(adUnitId, adInfo) {
                console.log("onInterstitialBiddingStart");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onInterstitialBiddingEnd(adUnitId, adInfo, error) {
                console.log("onInterstitialBiddingEnd");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onInterstitialIsLoading(adUnitId) {
                console.log("onInterstitialIsLoading");
                console.log(adUnitId);
            },
            onInterstitialOneLayerStartLoad(adUnitId, adInfo) {
                console.log("onInterstitialOneLayerStartLoad");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onInterstitialOneLayerLoaded(adUnitId, adInfo) {
                console.log("onInterstitialOneLayerLoaded");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onInterstitialOneLayerLoadFailed(adUnitId, adInfo, error) {
                console.log("onInterstitialOneLayerLoadFailed");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
                console.log(JSON.stringify(error));
            },
            onInterstitialVideoPlayStart(adUnitId, adInfo) {
                console.log("onInterstitialVideoPlayStart");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onInterstitialVideoPlayEnd(adUnitId, adInfo) {
                console.log("onInterstitialVideoPlayEnd");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onInterstitialAllLoaded(adUnitId, isSuccess) {
                console.log("onInterstitialAllLoaded");
                console.log(adUnitId);
                console.log(isSuccess);
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
        TradPlusInterstitial.setInterstitialListener(listener);
    }
    loadClick (button: Button) 
    {
        var customMap = {
            "user_id":"test_interstitial_userid",
            "custom_data":"interstitial_TestIMP",
            "segment_tag":"interstitial_segment_tag"
        }

        var extra :TPInterstitialExtra = {
            customMap:customMap,
            openAutoLoadCallback : this.openAutoLoadCallbakToggle.isChecked,
        };

        TradPlusInterstitial.loadInterstitialAd(DemoSetting.InterstitialPID,extra);
    }
    readyClick (button: Button) 
    {
       var bo = TradPlusInterstitial.interstitialAdReady(DemoSetting.InterstitialPID);
       console.log(bo);
    }
    showClick (button: Button) 
    {
        TradPlusInterstitial.showInterstitialAd(DemoSetting.InterstitialPID,"Interstitial");
    }
    entryAdScenarioClick (button: Button) 
    {
        TradPlusInterstitial.entryInterstitialAdScenario(DemoSetting.InterstitialPID,"Interstitial");
    }
    backClick (button: Button) 
    {
        director.loadScene("main");
    }
}

import { _decorator, Button, Component, director, EditBox, Node, Toggle } from 'cc';
import { DemoSetting } from './DemoSetting';

const { ccclass, property } = _decorator;

@ccclass('Rewarded')
export class Rewarded extends Component {
    @property({ type: Toggle})
    private openAutoLoadCallbakToggle!: Toggle;

    @property({ type: EditBox })
    private maxWaitTimeEditBox!: EditBox;

    start () {
        var listener:TPRewardVideoListener = {
            onRewardVideoLoaded(adUnitId, adInfo) {
                console.log("onRewardVideoLoaded");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onRewardVideoLoadFailed(adUnitId, error) {
                console.log("onRewardVideoLoadFailed");
                console.log(adUnitId);
                console.log(JSON.stringify(error));
            },
            onRewardVideoImpression(adUnitId, adInfo) {
                console.log("onRewardVideoImpression");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onRewardVideoShowFailed(adUnitId, adInfo, error) {
                console.log("onRewardVideoShowFailed");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
                console.log(JSON.stringify(error));
            },
            onRewardVideoClosed(adUnitId, adInfo) {
                console.log("onRewardVideoClosed");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onRewardVideoClicked(adUnitId, adInfo) {
                console.log("onRewardVideoClicked");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onRewardVideoStartLoad(adUnitId, adInfo) {
                console.log("onRewardVideoStartLoad");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onRewardVideoBiddingStart(adUnitId, adInfo) {
                console.log("onRewardVideoBiddingStart");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onRewardVideoBiddingEnd(adUnitId, adInfo, error) {
                console.log("onRewardVideoBiddingEnd");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onRewardVideoIsLoading(adUnitId) {
                console.log("onRewardVideoIsLoading");
                console.log(adUnitId);
            },
            onRewardVideoOneLayerStartLoad(adUnitId, adInfo) {
                console.log("onRewardVideoOneLayerStartLoad");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onRewardVideoOneLayerLoaded(adUnitId, adInfo) {
                console.log("onRewardVideoOneLayerLoaded");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onRewardVideoOneLayerLoadFailed(adUnitId, adInfo, error) {
                console.log("onRewardVideoOneLayerLoadFailed");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
                console.log(JSON.stringify(error));
            },
            onRewardVideoPlayStart(adUnitId, adInfo) {
                console.log("onRewardVideoPlayStart");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onRewardVideoPlayEnd(adUnitId, adInfo) {
                console.log("onRewardVideoPlayEnd");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onRewardVideoAllLoaded(adUnitId, isSuccess) {
                console.log("onRewardVideoAllLoaded");
                console.log(adUnitId);
                console.log(isSuccess);
            },
            onRewardVideoRewarded(adUnitId, adInfo) {
                console.log("onRewardVideoRewarded");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onPlayAgainImpression(adUnitId, adInfo) {
                console.log("onPlayAgainImpression");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onPlayAgainShowFailed(adUnitId, adInfo, error) {
                console.log("onPlayAgainShowFailed");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
                console.log(JSON.stringify(error));
            },
            onPlayAgainClicked(adUnitId, adInfo) {
                console.log("onPlayAgainClicked");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onPlayAgainRewarded(adUnitId, adInfo) {
                console.log("onPlayAgainRewarded");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onPlayAgainPlayStart(adUnitId, adInfo) {
                console.log("onPlayAgainPlayStart");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onPlayAgainPlayEnd(adUnitId, adInfo) {
                console.log("onPlayAgainPlayEnd");
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
        TradPlusRewardVideo.setRewardVideoListener(listener);
    }
    loadClick (button: Button) 
    {
        var customMap = {
            "user_id":"test_rewardVideo_userid",
            "custom_data":"rewardVideo_TestIMP",
            "segment_tag":"rewardVideo_segment_tag"
        }

        var localParams = {
            "user_id":"rewardVideo_userId",
            "custom_data":"rewardVideo_customData"
        };


        var extra :TPRewardVideoExtra = {
            userId:"tp_userId",
            customData:"tp_customData",
            customMap:customMap,
            localParams:localParams,
            openAutoLoadCallback : this.openAutoLoadCallbakToggle.isChecked,
        };

        TradPlusRewardVideo.loadRewardVideoAd(DemoSetting.RewardedPID,extra);
    }
    readyClick (button: Button) 
    {
       var bo = TradPlusRewardVideo.rewardVideoAdReady(DemoSetting.RewardedPID);
       console.log(bo);
    }
    showClick (button: Button) 
    {
        TradPlusRewardVideo.showRewardVideoAd(DemoSetting.RewardedPID,"Rewarded");
    }
    entryAdScenarioClick (button: Button) 
    {
        TradPlusRewardVideo.entryRewardVideoAdScenario(DemoSetting.RewardedPID,"Rewarded");
    }
    clearAct()
    {
        TradPlusAds.clearCache(DemoSetting.RewardedPID);
    }
    backClick (button: Button) 
    {
        director.loadScene("main");
    }
}
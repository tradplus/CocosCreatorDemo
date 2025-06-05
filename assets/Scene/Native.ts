
import { _decorator, Component, director, EditBox, Label, log, Node, Toggle } from 'cc';
import { DemoSetting } from './DemoSetting';
const { ccclass, property } = _decorator;

@ccclass('Native')
export class Native extends Component {

    @property({ type: Toggle})
    private openAutoLoadCallbakToggle!: Toggle;

    @property({ type: Toggle})
    private classToggle!: Toggle;

    @property({ type: EditBox })
    private XEditBox!: EditBox;

    @property({ type: EditBox })
    private YEditBox!: EditBox;

    @property({ type: EditBox })
    private WidthEditBox!: EditBox;

    @property({ type: EditBox })
    private HeightEditBox!: EditBox;

    @property({ type: Label })
    private positionModeLabel!:Label;
    
    private positionMode!: number;

    @property({ type: Label })
    private HideLabel!:Label;
    private hide: boolean;

    start () 
    {
        this.positionMode = 0;
        var listener:TPNativeListener ={
            onNativeLoaded(adUnitId, adInfo) {
                console.log("onNativeLoaded");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onNativeLoadFailed(adUnitId, error) {
                console.log("onNativeLoadFailed");
                console.log(adUnitId);
                console.log(JSON.stringify(error));
            },
            onNativeImpression(adUnitId, adInfo) {
                console.log("onNativeImpression");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onNativeShowFailed(adUnitId, adInfo, error) {
                console.log("onNativeShowFailed");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
                console.log(JSON.stringify(error));
            },
            onNativeClicked(adUnitId, adInfo) {
                console.log("onNativeClicked");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onNativeClosed(adUnitId, adInfo) {
                console.log("onNativeClosed");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onNativeStartLoad(adUnitId, adInfo) {
                console.log("onNativeStartLoad");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onNativeBiddingStart(adUnitId, adInfo) {
                console.log("onNativeBiddingStart");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onNativeBiddingEnd(adUnitId, adInfo, error) {
                console.log("onNativeBiddingEnd");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onNativeIsLoading(adUnitId) {
                console.log("onNativeIsLoading");
                console.log(adUnitId);
            },
            onNativeOneLayerStartLoad(adUnitId, adInfo) {
                console.log("onNativeOneLayerStartLoad");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onNativeOneLayerLoaded(adUnitId, adInfo) {
                console.log("onNativeOneLayerLoaded");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onNativeOneLayerLoadFailed(adUnitId, adInfo, error) {
                console.log("onNativeOneLayerLoadFailed");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
                console.log(JSON.stringify(error));
            },
            onNativeAllLoaded(adUnitId, isSuccess) {
                console.log("onNativeAllLoaded");
                console.log(adUnitId);
                console.log(isSuccess);
            },
            onNativeVideoPlayStart(adUnitId, adInfo) {
                console.log("onNativeVideoPlayStart");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onNativeVideoPlayEnd(adUnitId, adInfo) {
                console.log("onNativeVideoPlayEnd");
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
        TradPlusNative.setNativeListener(listener);
    }

    positionChangeAct(event: Event, customEventData: string)
    {
        this.positionMode = parseInt(customEventData);
        var info = "定位方式: TopLeft"
        if(this.positionMode == TPAdPosition.TopCenter)
        {
            info = "定位方式: TopCenter"
        }
        else if(this.positionMode == TPAdPosition.BottomRight)
        {
            info = "定位方式: TopRight"
        }
        else if(this.positionMode == TPAdPosition.Centered)
        {
            info = "定位方式: Centered"
        }
        else if(this.positionMode == TPAdPosition.BottomLeft)
        {
            info = "定位方式: BottomLeft"
        }
        else if(this.positionMode == TPAdPosition.BottomCenter)
        {
            info = "定位方式: BottomCenter"
        }
        else if(this.positionMode == TPAdPosition.BottomRight)
        {
            info = "定位方式: BottomRight"
        }
        this.positionModeLabel.string = info;
    }

    loadAct()
    {
        var customMap = {
            "user_id":"test_native_userid",
            "custom_data":"native_TestIMP",
            "segment_tag":"native_segment_tag"
        }

        var localParams = {
            "user_id":"native_userId",
            "custom_data":"native_customData"
        };
        var waitTime = 0;

        var x = 0;
        var XStr = this.XEditBox.string;
        if(XStr.length > 0)
        {
            x = parseFloat(XStr);
        }

        var y = 0;
        var YStr = this.YEditBox.string;
        if(YStr.length > 0)
        {
            y = parseFloat(YStr);
        }

        var height = 0;
        var heightStr = this.HeightEditBox.string;
        if(heightStr.length > 0)
        {
            height = parseFloat(heightStr);
        }

        var width = 0;
        var widthStr = this.WidthEditBox.string;
        if(widthStr.length > 0)
        {
            width = parseFloat(widthStr);
        }

        var extra :TPNativeExtra ={
            x:x,
            y:y,
            height:height,
            width:width,
            adPosition:this.positionMode,
            customMap:customMap,
            openAutoLoadCallback:this.openAutoLoadCallbakToggle.isChecked,
        };
        TradPlusNative.loadNativeAd(DemoSetting.NativePID,extra);
    }
    hideAct()
    {
        if(this.hide)
        {
            this.hide = false;
            this.HideLabel.string = "Hide";
            TradPlusNative.displayNative(DemoSetting.NativePID);
        }
        else
        {
            this.hide = true;
            this.HideLabel.string = "Display";
            TradPlusNative.hideNative(DemoSetting.NativePID);
        }
    }
    showAct()
    {
        if(this.classToggle.isChecked)
        {
            TradPlusNative.showNativeAd(DemoSetting.NativePID,"Native",DemoSetting.NativeClassName);
        }
        else
        {
            TradPlusNative.showNativeAd(DemoSetting.NativePID,"Native");
        }
    }
    entryAdScenarioAct()
    {
        TradPlusNative.entryNativeAdScenario(DemoSetting.NativePID,"Native");
    }
    readyAct()
    {
        var bo = TradPlusNative.nativeAdReady(DemoSetting.NativePID);
       console.log(bo);
    }
    backAct()
    {
        TradPlusNative.destroyNative(DemoSetting.NativePID);
        director.loadScene("main");
    }
}
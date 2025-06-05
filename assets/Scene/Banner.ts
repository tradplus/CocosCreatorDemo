
import { _decorator, Component, director, EditBox, Label, log, Node, Toggle } from 'cc';
import { DemoSetting } from './DemoSetting';
const { ccclass, property } = _decorator;

@ccclass('Banner')
export class Banner extends Component {

    @property({ type: Toggle})
    private openAutoLoadCallbakToggle!: Toggle;

    @property({ type: Toggle})
    private closeAutoShowToggle!: Toggle;

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
    private centerModeLabel!:Label;
    private centerMode!: number;

    @property({ type: Label })
    private positionModeLabel!:Label;
    private positionMode!: number;

    @property({ type: Label })
    private BGColorLabel!:Label;
    private BGColorStr!: string;

    @property({ type: Label })
    private HideLabel!:Label;
    private hide: boolean;
    

    start () 
    {
        this.centerMode = 0;
        this.positionMode = 0;
        this.BGColorStr = "";
        this.hide = false;
        var listener:TPBannerListener ={
            onBannerLoaded(adUnitId, adInfo) {
                console.log("onBannerLoaded");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onBannerLoadFailed(adUnitId, error) {
                console.log("onBannerLoadFailed");
                console.log(adUnitId);
                console.log(JSON.stringify(error));
            },
            onBannerImpression(adUnitId, adInfo) {
                console.log("onBannerImpression");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onBannerShowFailed(adUnitId, adInfo, error) {
                console.log("onBannerShowFailed");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
                console.log(JSON.stringify(error));
            },
            onBannerClicked(adUnitId, adInfo) {
                console.log("onBannerClicked");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onBannerClosed(adUnitId, adInfo) {
                console.log("onBannerClosed");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onBannerStartLoad(adUnitId, adInfo) {
                console.log("onBannerStartLoad");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onBannerBiddingStart(adUnitId, adInfo) {
                console.log("onBannerBiddingStart");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onBannerBiddingEnd(adUnitId, adInfo, error) {
                console.log("onBannerBiddingEnd");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onBannerIsLoading(adUnitId) {
                console.log("onBannerIsLoading");
                console.log(adUnitId);
            },
            onBannerOneLayerStartLoad(adUnitId, adInfo) {
                console.log("onBannerOneLayerStartLoad");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onBannerOneLayerLoaded(adUnitId, adInfo) {
                console.log("onBannerOneLayerLoaded");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
            },
            onBannerOneLayerLoadFailed(adUnitId, adInfo, error) {
                console.log("onBannerOneLayerLoadFailed");
                console.log(adUnitId);
                console.log(JSON.stringify(adInfo));
                console.log(JSON.stringify(error));
            },
            onBannerAllLoaded(adUnitId, isSuccess) {
                console.log("onBannerAllLoaded");
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
        TradPlusBanner.setBannerListener(listener);
    }

    hideChangeAct(event: Event, customEventData: string)
    {
        if(this.hide)
        {
            this.hide = false;
            this.HideLabel.string = "Hide";
            TradPlusBanner.displayBanner(DemoSetting.BannerPID);
        }
        else
        {
            this.hide = true;
            this.HideLabel.string = "Display";
            TradPlusBanner.hideBanner(DemoSetting.BannerPID);
        }
    }

    centerModeChangeAct(event: Event, customEventData: string)
    {
        this.centerMode = parseInt(customEventData);
        var info = "三方Banner定位方式(仅iOS): TOP"
        if(this.centerMode == 1)
        {
            info = "三方Banner定位方式(仅iOS): Center"
        }
        else if(this.centerMode == 2)
        {
            info = "三方Banner定位方式(仅iOS): Bottom"
        }
        this.centerModeLabel.string = info;
    }

    positionChangeAct(event: Event, customEventData: string)
    {
        this.positionMode = parseInt(customEventData);
        var info = "定位方式: TopLeft"
        if(this.positionMode == 1)
        {
            info = "定位方式: TopCenter"
        }
        else if(this.positionMode == 2)
        {
            info = "定位方式: TopRight"
        }
        else if(this.positionMode == 3)
        {
            info = "定位方式: Centered"
        }
        else if(this.positionMode == 4)
        {
            info = "定位方式: BottomLeft"
        }
        else if(this.positionMode == 5)
        {
            info = "定位方式: BottomCenter"
        }
        else if(this.positionMode == 6)
        {
            info = "定位方式: BottomRight"
        }
        this.positionModeLabel.string = info;
    }

    bgColorChangeAct(event: Event, customEventData: string)
    {
        this.BGColorStr = "";
        if(customEventData != null && undefined != customEventData)
        {
            this.BGColorStr  = customEventData;
            
        }
        this.BGColorLabel.string = "背景色: "+ this.BGColorStr;
    }

    loadAct()
    {
        var customMap = {
            "user_id":"test_banner_userid",
            "custom_data":"banner_TestIMP",
            "segment_tag":"banner_segment_tag"
        }

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

        var className = "";
        if(this.classToggle.isChecked)
        {
            className = DemoSetting.BannerClassName;
        }

        var extra :TPBannerExtra ={
            className:className,
            x:x,
            y:y,
            height:height,
            width:width,
            adPosition:this.positionMode,
            customMap:customMap,
            closeAutoShow:this.closeAutoShowToggle.isChecked,
            backgroundColor:this.BGColorStr,
            openAutoLoadCallback:this.openAutoLoadCallbakToggle.isChecked,
            contentMode:this.centerMode,
            //仅安卓
            // closeAutoDestroy?:boolean;
        };
        TradPlusBanner.loadBannerAd(DemoSetting.BannerPID,"banner",extra);
    }
    showAct()
    {
        TradPlusBanner.showBannerAd(DemoSetting.BannerPID,"banner");
    }
    entryAdScenarioAct()
    {
        TradPlusBanner.entryBannerAdScenario(DemoSetting.BannerPID,"banner");
    }
    readyAct()
    {
        var bo = TradPlusBanner.bannerAdReady(DemoSetting.BannerPID);
       console.log(bo);
    }
    backAct()
    {
        TradPlusBanner.destroyBanner(DemoSetting.BannerPID);
        director.loadScene("main");
    }
}
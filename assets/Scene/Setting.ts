
import { _decorator, Component, director, find, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Setting')
export class Setting extends Component {

    @property({ type: Label })
    private infoLabel!: Label;

    @property({ type: Label })
    private gdprButtonLabel!:Label;

    @property({ type: Label })
    private ccpaButtonLabel!:Label;

    @property({ type: Label })
    private coppaButtonLabel!:Label;

    @property({ type: Label })
    private lgdpButtonLabel!:Label;

    @property({ type: Label })
    private openButtonLabel!:Label;

    private str:string = "";
    private gdprState:number = 0;
    private ccpaState:number = 0;
    private coppaState:number = 0;
    private lgdpState:number = 0;
    private openState:boolean = true;
    getInfo()
    {
        this.str = "PluginVersion:"+TradPlusAds.PluginVersion +"\n";
        this.str += "SDK version:"+TradPlusAds.version()+"\n";
        this.str += "是否在欧洲:"+TradPlusAds.isEUTraffic()+"\n";
        this.str += "是否在加州:"+TradPlusAds.isCalifornia()+"\n";
        this.gdprState = TradPlusAds.getGDPRDataCollection()
        if( this.gdprState == 0){
            this.str += "GDPR 允许上报"+"\n";
            this.gdprButtonLabel.string = "GDPR 设置为 不允许";
        }
        else if(this.gdprState == 1){
            this.str += "GDPR 不允许上报"+"\n";
            this.gdprButtonLabel.string = "GDPR 设置为 允许";
        }
        else{
            this.str += "GDPR 未设置"+"\n";
            this.gdprButtonLabel.string = "GDPR 设置为 允许";
        }
        this.ccpaState = TradPlusAds.getCCPADoNotSell();
        if( this.ccpaState == 0){
            this.str += "CCPA 允许上报"+"\n";
            this.ccpaButtonLabel.string = "CCPA 设置为 不允许";
        }
        else if(this.ccpaState == 1){
            this.str += "CCPA 不允许上报"+"\n";
            this.ccpaButtonLabel.string = "CCPA 设置为 允许";
        }
        else{
            this.str += "CCPA 未设置"+"\n";
            this.ccpaButtonLabel.string = "CCPA 设置为 允许";
        }
        this.coppaState = TradPlusAds.getCOPPAIsAgeRestrictedUser();
        if( this.coppaState == 0){
            this.str += "COPPA 儿童"+"\n";
            this.coppaButtonLabel.string = "COPPA 设置为 非儿童";
        }
        else if(this.coppaState == 1){
            this.str += "COPPA 非儿童"+"\n";
            this.coppaButtonLabel.string = "COPPA 设置为 儿童";
        }
        else{
            this.str += "COPPA 未设置"+"\n";
            this.coppaButtonLabel.string = "COPPA 设置为 儿童";
        }
        this.lgdpState = TradPlusAds.getLGPDConsent();
        if( this.lgdpState == 0){
            this.str += "LGDP 允许上报"+"\n";
            this.lgdpButtonLabel.string = "LGDP 设置为 不允许";
        }
        else if(this.lgdpState == 1){
            this.str += "LGDP 不允许上报"+"\n";
            this.lgdpButtonLabel.string = "LGDP 设置为 允许";
        }
        else{
            this.str += "LGDP 未设置"+"\n";
            this.lgdpButtonLabel.string = "LGDP 设置为 允许";
        }
        this.openState = TradPlusAds.isOpenPersonalizedAd();
        if( this.openState == true){
            this.str += "个性化推荐已开启"+"\n";
            this.openButtonLabel.string = "个性化推荐 设置为 关闭";
        }
        else{
            this.str += "个性化推荐已关闭"+"\n";
            this.openButtonLabel.string = "个性化推荐 设置为 开启";
        }
        return this.str;
    }
    start () 
    {
        this.infoLabel.string = this.getInfo();
        var listener:TradplusAdsListener = {
            onCurrentAreaSuccess(isEu, isCn, isCa) {
                console.log("onCurrentAreaSuccess");
                console.log("isEu :"+isEu);
                console.log("isCn :"+isCn);
                console.log("isCa :"+isCa);
            },
            onCurrentAreaFailed(msg) {
                console.log("onCurrentAreaFailed");
            }
        };
        TradPlusAds.setAdsListener(listener);

    }
    update ()
    {

    }
    //button act
    gdpaAct()
    {
        var bo = !(this.gdprState == 0);
        TradPlusAds.setGDPRDataCollection(bo);
        this.infoLabel.string = this.getInfo();
    }
    ccpaAct()
    {
        var bo = !(this.ccpaState == 0);
        TradPlusAds.setCCPADoNotSell(bo);
        this.infoLabel.string = this.getInfo();
    }
    coppaAct()
    {
        var bo = !(this.coppaState == 0);
        TradPlusAds.setCOPPAIsAgeRestrictedUser(bo);
        this.infoLabel.string = this.getInfo();
    }
    lgpdAct()
    {
        var bo = !(this.lgdpState == 0);
        TradPlusAds.setLGPDConsent(bo);
        this.infoLabel.string = this.getInfo();
    }
    openAct()
    {
        var bo = !this.openState;
        TradPlusAds.setOpenPersonalizedAd(bo);
        this.infoLabel.string = this.getInfo();
    }
    searchAct()
    {
        TradPlusAds.checkCurrentArea();
    }
    toolAct()
    {
        TradPlusAds.openTradPlusTool();
    }
    backHomeAct()
    {
        director.loadScene("main");
    }
}

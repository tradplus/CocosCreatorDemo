import { sys } from "cc";

export class DemoSetting  {
    public static AppID:string;
    public static BannerPID:string;
    public static InterstitialPID:string;
    public static NativePID:string;
    public static RewardedPID:string;
    public static SplashPID:string;
    public static OfferwallPID:string;
    public static NativeClassName:string;
    public static BannerClassName:string;
    static didSetup = false;
    static setup()
    {
        if(DemoSetting.didSetup)
        {
            return;
        }
        DemoSetting.didSetup = true;
        if (sys.os === "iOS")
        {
            DemoSetting.AppID = "0E3CD076A202D14F4AB0D1D535F7190F";
            DemoSetting.BannerPID = "363C3FBDD5BAFD550B45A52EAE3341C6";
            DemoSetting.InterstitialPID = "E488AF1C8372A5269614FC46649890DC";
            DemoSetting.NativePID = "79D2FF861FD9F33791E1612708C13DCB";
            DemoSetting.RewardedPID = "1A9D6D870122E7056762EC05B21F797D";
            DemoSetting.SplashPID = "70222702A02647C521924A5D4358C83B";
            DemoSetting.NativeClassName =  "TPNativePasterView";
            DemoSetting.BannerClassName = "NativeBannerTemplate";
        }
        else
        {
            DemoSetting.AppID = "6640E7E3BDAC951B8F28D4C8C50E50B5";
            DemoSetting.BannerPID = "A24091715B4FCD50C0F2039A5AF7C4BB";
            DemoSetting.InterstitialPID = "E609A0A67AF53299F2176C3A7783C46D";
            DemoSetting.NativePID = "DDBF26FBDA47FBE2765F1A089F1356BF";
            DemoSetting.RewardedPID = "39DAC7EAC046676C5404004A311D1DB1";
            DemoSetting.SplashPID = "D9118E91DD06DF6D322369455CAED618";
            DemoSetting.NativeClassName =  "cocos_native_ad_list_item";
            DemoSetting.BannerClassName = "cocos_native_banner_ad_unit";
        }
    }
}
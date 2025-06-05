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
            DemoSetting.AppID = "75AA158112F1EFA29169E26AC63AFF94";
            DemoSetting.BannerPID = "6008C47DF1201CC875F2044E88FCD287";
            DemoSetting.InterstitialPID = "55F5F4147CC829BD18DB8F7E5136872E";
            DemoSetting.NativePID = "E8D198EBD7FDC4F8A725066C82D707E1";
            DemoSetting.RewardedPID = "28DF1B5D3D9F6AF3EDB2FCBC21C20EA8";
            DemoSetting.SplashPID = "E5BC6369FC7D96FD47612B279BC5AAE0";
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
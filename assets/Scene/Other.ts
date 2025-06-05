
import { _decorator, Button, Component, director, EditBox, Node, Toggle } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('Other')
export class Other extends Component {


    @property({ type: Toggle})
    private pangleCheck!: Toggle;


    setPAConsent(button: Button)
    {
        if(this.pangleCheck.isChecked)
        {
            TradPlusAds.setPAConsent(TPPAGPAConsentType.Consent);
        }
        else
        {
            TradPlusAds.setPAConsent(TPPAGPAConsentType.NoConsent);
        }
    }


    backClick (button: Button) 
    {
        director.loadScene("main");
    }
}
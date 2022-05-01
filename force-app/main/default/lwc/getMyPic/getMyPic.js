import { LightningElement, api } from "lwc";

export default class GetMyPic extends LightningElement {
  @api recordId;

  get picUrl() {
    //Comment Manu 2
    return `https://i.pravatar.cc/300?u=${this.recordId}`;
  }
}
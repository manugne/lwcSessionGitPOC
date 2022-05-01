import { LightningElement, api } from "lwc";

export default class GetMyPic extends LightningElement {
  @api recordId;

  get picUrl() {
    //Comment Manu 1
    return `https://i.pravatar.cc/300?u=${this.recordId}`;
  }
}
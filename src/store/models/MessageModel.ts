export default class MessageModel {
    tag: string;
    channelTag: string;
    date: string;
    text: string;
    creator: string;

    constructor() {
        this.tag = '';
        this.channelTag = '0000';
        this.date = '0000-00-00T00-00';
        this.text = ' --- text --- ';
        this.creator = '0000';
    }
} 
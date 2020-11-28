export default class ChannelModel {
    name: string;
    tag: string;
    date: string;
    description: string;
    ovner: string;

    constructor() {
        this.tag = '';
        this.name = '';
        this.date = '0000-00-00';
        this.description = ' --- 255 --- ';
        this.ovner = '0000';
    }
} 
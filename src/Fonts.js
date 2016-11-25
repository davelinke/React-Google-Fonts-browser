import FontsData from './FontsData';

class Fonts {
    constructor(properties){
        this.props = Object.assign({
            page:0,
            itemsPerPage:16
        },properties);
    }
    get list() {
        let startItem = (this.props.itemsPerPage * this.props.page);

        return FontsData.slice(startItem, startItem + this.props.itemsPerPage);
    }
}
export default Fonts;

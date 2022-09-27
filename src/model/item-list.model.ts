
export class ItemListModel{

    constructor(
        public id: string,
        public value: string,
        public done: boolean
    ){}

    static getDefault = (): ItemListModel => {
        return(
            new ItemListModel("","",false)
        );
    }
}
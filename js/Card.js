export default class Card{
    constructor(datasetIndex, documentElementType, classList){
        this.datasetIndex = datasetIndex;
        this.documentElementType = documentElementType;
        this.classList = classList;
        
    }
    createDocumentElement(){
        const cardElement = document.createElement(this.documentElementType);
        const cardCover = document.createElement("div");
        cardCover.classList.add("covered");
        cardElement.appendChild(cardCover);
        cardElement.classList.add(this.classList);
        cardElement.dataset.index = this.datasetIndex;
        return cardElement;
    }
    deleteDocumentElement(){
        document.removeChild(this.createDocumentElement())
    }
    static setActualColour(colour){
        const actualColour = colour;
        return actualColour;
    }
}
class BoxShadowGenerator {

    constructor(horizontal, horizontalValue, vertical, verticalValue, blur, blurValue, spread, spreadValue, previewBox, rule, webkitRule, mozRule, colorValue) {
        this.horizontal = horizontal;
        this.horizontalValue = horizontalValue;
        this.vertical = vertical;
        this.verticalValue = verticalValue;
        this.blur = blur;
        this.blurValue = blurValue;
        this.spread = spread;
        this.spreadValue = spreadValue;
        this.previewBox = previewBox;
        this.rule = rule;
        this.webkitRule = webkitRule;
        this.mozRule = mozRule;
        this.color = '#000';
        this.colorValue = colorValue;
    }

    initialize(){

        this.verticalValue.value = this.vertical.value
        this.horizontalValue.value = this.horizontal.value
        this.blurValue.value = this.blur.value
        this.spreadValue.value = this.spread.value
        this.colorValue.value = this.color

        this.applyRule()
        this.showRule()
    }

    applyRule(){

        this.previewBox.style.boxShadow = `${this.horizontalValue.value}px ${this.verticalValue.value}px ${this.blurValue.value}px ${this.spreadValue.value}px ${this.colorValue.value}`

        this.currentRule = this.previewBox.style.boxShadow

    }

    showRule(){
        this.rule.innerText = this.currentRule
        this.webkitRule.innerText = this.currentRule
        this.mozRule.innerText = this.currentRule
    }

    updateValue(type, value){
        switch(type){
            case 'horizontal':
                this.horizontalValue.value = value;
                break
            case 'vertical':
                this.verticalValue.value = value;
                break
            case 'blur':
                this.blurValue.value = value;
                break
            case 'spread':
                this.spreadValue.value = value;
                break
            case 'color':
                this.colorValue.value = value;
                break
        };
        this.applyRule()
        this.showRule()
    }
}

// Seleção de elementos

const horizontal = document.querySelector('#horizontal')
const vertical = document.querySelector('#vertical')
const blur = document.querySelector('#blur')
const spread = document.querySelector('#spread')

const horizontalValue = document.querySelector('#horizontal-value')
const verticalValue = document.querySelector('#vertical-value')
const blurValue = document.querySelector('#blur-value')
const spreadValue = document.querySelector('#spread-value')

const previewBox = document.querySelector('#box')

const rule = document.querySelector('#rule span')
const webkitRule = document.querySelector('#webkit-rule span')
const mozRule = document.querySelector('#moz-rule span')

const color = document.querySelector('#color')
const colorValue = document.querySelector('#color-value')

const boxShadow = new BoxShadowGenerator(horizontal, horizontalValue, vertical, verticalValue, blur, blurValue, spread, spreadValue, previewBox, rule, webkitRule, mozRule, colorValue)

boxShadow.initialize()

// Eventos

horizontal.addEventListener('input', (e)=>{
    const value = e.target.value

    boxShadow.updateValue('horizontal', value)
})

vertical.addEventListener('input', (e)=>{
    const value = e.target.value

    boxShadow.updateValue('vertical', value)
})

blur.addEventListener('input', (e)=>{
    const value = e.target.value

    boxShadow.updateValue('blur', value)
})

spread.addEventListener('input', (e)=>{
    const value = e.target.value

    boxShadow.updateValue('spread', value)
})

color.addEventListener('input', (e)=>{
    const cor = e.target.value

    boxShadow.updateValue('color', cor)
})
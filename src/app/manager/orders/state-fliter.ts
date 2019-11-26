import { OrderState } from 'src/app/wizards/order';


export function StateFilter() {
}

StateFilter.prototype.addOption = function (value, name?) {
    /*this.eGui.innerHTML += '<div style="margin: 10px;" >' +
        ' <input type="radio" name="stateFilter" id="' + id + '" value="' + value + '"' +
        ' filter-checkbox="true"/> <label for="' + id + '">' + name +
        '</label></div>'*/
    if (!this.options) this.options = []
    this.options.push({ value: value, name: name })

}

StateFilter.prototype.generateHTML = function (id) {
    let html = `<div style="margin: 10px;" >
    <select name='${id}' id="${id}" size='${this.options.length}' style='    border: none;    overflow: auto;}'>    
    `
    for (let option of this.options) {
        html += `<option class='state' value='${option['value']}'>${option['name']}</option>`;
    }

    html += `</select></div>`;
    this.eGui.innerHTML = html
}

StateFilter.prototype.optionSetup = function (id) {
    this[id] = this.eGui.querySelector('#' + id);
    this[id].addEventListener('change', this.onRbChanged);
    this[id].fliter = this
}

StateFilter.prototype.init = function (params) {
    this.eGui = document.createElement('div');
    /*this.eGui.innerHTML =
        '<div>' +
        '<div style="margin: 10px;text-align:center;">' +
        '筛选' +
        '</div>'*/

    this.addOption(0, '全部')
    this.addOption(2, OrderState[2])
    this.addOption(3, OrderState[3])
    this.addOption(4, OrderState[4])
    this.addOption(5, OrderState[5])
    /*for (let i = 1; i <= 7; i++) {
        this.addOption(i, OrderState[i])
    }*/
    //this.eGui.innerHTML += '</div>';
    this.generateHTML('stateFilter')

    this.stateFilter = this.eGui.querySelector('#stateFilter');
    this.stateFilter.addEventListener('change', this.onRbChanged);
    this.stateFilter.fliter = this
    /*this.optionSetup('stateAll')
    for (let i = 1; i <= 7; i++) {
        this.optionSetup('state-' + i)
    }*/

    this.filterActive = false;
    this.filterChangedCallback = params.filterChangedCallback;
    this.valueGetter = params.valueGetter;
};

StateFilter.prototype.onRbChanged = function () {

    //console.log(this, this.fliter)
    this.fliter.filterActive = this.fliter.stateFilter.value != 0;
    //console.log(this)
    this.fliter.filterChangedCallback();
};

StateFilter.prototype.getGui = function () {
    return this.eGui;
};

StateFilter.prototype.doesFilterPass = function (params) {

    return params.data.state == this.stateFilter.value;
};

StateFilter.prototype.isFilterActive = function () {
    return this.filterActive;
};

StateFilter.prototype.getModel = function () {
    var model = { value: this.stateFilter.value };
    return model;
};

StateFilter.prototype.setModel = function (model) {
    console.log(this.selected)
    this.stateFilter.value = model.value;
};

// this example isn't using getModel() and setModel(),
// so safe to just leave these empty. don't do this in your code!!!
StateFilter.prototype.getModel = function () { };
StateFilter.prototype.setModel = function () { };




export function StateCellRenderer() {
}

StateCellRenderer.prototype.init = function (params) {
    this.eGui = document.createElement('span');
    this.eGui.setAttribute("value", params.value);
    this.eGui.className = "state"
    this.eGui.innerHTML = params.valueFormatted;
    //console.log(params)
};

StateCellRenderer.prototype.getGui = function () {
    return this.eGui;
};
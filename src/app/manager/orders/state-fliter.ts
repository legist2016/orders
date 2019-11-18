import { OrderState } from 'src/app/wizards/order';


export function StateFilter() {
}

StateFilter.prototype.addOption = function (id, value, name?) {
    this.eGui.innerHTML += '<div style="margin: 10px;" >' +
        ' <input type="radio" name="stateFilter" id="' + id + '" value="' + value + '"' +
        ' filter-checkbox="true"/> <label for="' + id + '">' + name +
        '</label></div>'
}
StateFilter.prototype.optionSetup = function (id) {
    this[id] = this.eGui.querySelector('#' + id);
    this[id].addEventListener('change', this.onRbChanged);
    this[id].fliter = this
}

StateFilter.prototype.init = function (params) {
    this.eGui = document.createElement('div');
    this.eGui.innerHTML =
        '<div>' +
        '<div style="margin: 10px;text-align:center;">' +
        '筛选' +
        '</div>'

    this.addOption('stateAll', 0, '全部')
    for (let i = 1; i <= 7; i++) {
        this.addOption('state-' + i, i, OrderState[i])
    }
    this.eGui.innerHTML += '</div>';

    this.optionSetup('stateAll')
    for (let i = 1; i <= 7; i++) {
        this.optionSetup('state-' + i)
    }
    this.filterActive = false;
    this.filterChangedCallback = params.filterChangedCallback;
    this.valueGetter = params.valueGetter;
};

StateFilter.prototype.onRbChanged = function () {

    this.fliter.filterActive = !this.fliter.stateAll.checked;
    if (this.checked) {
        this.fliter.selected = this
        //console.log(this.fliter)
    }
    this.fliter.filterChangedCallback();
};

StateFilter.prototype.getGui = function () {
    return this.eGui;
};

StateFilter.prototype.doesFilterPass = function (params) {
    
    return params.data.state == this.selected.value;
};

StateFilter.prototype.isFilterActive = function () {
    return this.filterActive;
};

StateFilter.prototype.getModel = function () {
    var model = { value: this.selected.value };
    return model;
};

StateFilter.prototype.setModel = function (model) {
    console.log(this.selected)
    //this.selected.checked = model.value;
};

// this example isn't using getModel() and setModel(),
// so safe to just leave these empty. don't do this in your code!!!
StateFilter.prototype.getModel = function () { };
StateFilter.prototype.setModel = function () { };
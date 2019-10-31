import { EventEmitter, Output, Input } from "@angular/core"
import { DataService } from "../data.service";

export class Wizard {
    @Output() do: EventEmitter<any> = new EventEmitter()
    @Input() step: number
    @Input() ds: DataService
    constructor() { }
    get diagnostic() {
        return JSON.stringify(this.ds.model);
    }
    Do(event) {
        this.do.emit(event)
    }

    get doemit(){
        return this.Do.bind(this)
    }
}
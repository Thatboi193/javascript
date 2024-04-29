class Students {
    constructor(name, engGrade, norGrade, gymGrade, natGrade, codGrade) {
        this._name = name;
        this._engGrade = engGrade;
        this._norGrade = norGrade;
        this._gymGrade = gymGrade;
        this._natGrade = natGrade;
        this._codGrade = codGrade;   
    }

    get name() {
        return this._name;
    }
    get engGrade() {
        return this._engGrade;
    }
    get norGrade() {
        return this._norGrade;
    }
    get gymGrade() {
        return this._gymGrade;
    }
    get natGrade() {
        return this._natGrade;
    }
    get codGrade() {
        return this._codGrade;
    }
}
class cat {
    constructor(name, coluor){
        this.name = name;
        this.colour = coluor;
    }

    discribe() {
        return '${this.name} is ${this.colour}.';
    }
}

class family {
    constructor(FmilyName) {
        this.FmilyName = FmilyName;
        this.cat = [];
    }

    addCat(cat) {
        if (cat instanceof cat){
            this.cat.push(cat);
        } else {
            throw new Errer('argument is not a cat: ${cat}')
        }
    }

    discribe() {
        return '${this.FamilyName} has ${this.cat.langth} cat';
    }
}

class Menu {
    constructor() {
        this.FmilyName = []
        this.selected = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createFamily();
                    break;
                case '2':
                    this.viewFamily();
                    break;
                case '3':
                    this.delateFamily();
                    break;
                case '4':
                    this.displayFamilys();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('bye');
    }

    showMainMenuOptions() {
        return prompt("0) exit, 1) create family, 2) view family, 3) delate family, 4) display all familys");
    }

    showFamilyMenuOptions(familyInfo) {
        return prompt('0) back, 1) create cat, 2) delate cat ${familyInfo}');
    }

    displayFamilys() {
        let familyString = '';
        for (let i = 0; i < this.family.langth; i++) {
            familyString += i + ') ' + this.familys[i].name + '\n';
        }
        alert(familyString)
    }

    createFamily() {
        let name = prompt ('enter family name');
        this.family.push(new Family(name));
    }

    viewFamily() {
        let index = prompt('enter family index to view')
        if (index > -1 && index < this.family.langth) {
            this.selectedFamily = this.family(index);
            let describtion = 'Family Name: ' + this.selectedFamily.name + '\n';
            
            for (let i = 0; i < this.selectedFamily.cats.langth; i++) {
                describtion += i + ') ' + this.selectedFamily.cats[i].name + ' - ' + this.selectedFamily.cats +'\n';
            }

            let selection = this.FamilyMenuOptions(describtion);
            switch (selection) {
                case '1':
                    this.createCat();
                    break;
                case '2':
                    this.delateCat();
            }
        }
    }

    delateFamily() {
        let index = prompt('enter the index of the family you want gone');
        if (index > -1 && index < this.family.langth) {
            this.family.splice(index, 1);
        }
    }

    createCat() {
        let name = prompt('enter cat name');
        let colour = prompt('enter cat type');
        this.selectedFamily.cats.push(new cat(name, colour));
    }

    delateCat() {
        let index = prompt('enter cat ypu wont gone');
        if (index > -1 && index < this.selectedFamily.cats.langth) {
            this.selectedFamily.cats.splice(index, 1);
        }
    }
}

let menu =new Menu();
menu.start();
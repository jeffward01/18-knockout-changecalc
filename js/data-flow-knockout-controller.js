alert("Javascipt has loaded correctly!");

function MyViewModel() {
    var self = this;

    //Grabs dueForSale from DOM
    self.dueForSale = ko.observable();
    //Grabs amountRecieved from DOM
    self.amountReceived = ko.observable();

    //Computes Change
    self.change = ko.computed(function () {
        var change = self.amountReceived() - self.dueForSale();

        if (isNaN(change) || change < 0) return '';

        return change;
    });

    self.bills = {
        hundreds: ko.computed(function () {
            var numOfhundred = Math.floor(self.change() / 100);
            return numOfhundred;
        }),
        fifties: ko.computed(function () {
            var numOfFifties = Math.floor((self.change() % 100) / 50);
            return numOfFifties;
        }),
        twenties: ko.computed(function () {
            var numOfTwenties = Math.floor(((self.change() % 100) % 50) / 20);
            return numOfTwenties;
        }),
        tens: ko.computed(function () {
            var numOfTens = Math.floor((((self.change() % 100) % 50) % 20) / 10);
            return numOfTens;
        }),
        fives: ko.computed(function () {
            var numOfFives = Math.floor(((((self.change() % 100) % 50) % 20) % 10) / 5);
            return numOfFives;
        }),
        ones: ko.computed(function () {
            var numOfOnes = Math.floor((((((self.change() % 100) % 50) % 20) % 10) % 5) / 1);
            return numOfOnes;
        })
    };

    self.coins = {
        quarters: ko.computed(function () {
            var numOfQuarters = Math.floor(((((((self.change() % 100) % 50) % 20) % 10) % 5) % 1) / .25);
            return numOfQuarters;
        }),
        dimes: ko.computed(function () {
            var numOfDimes = Math.floor((((((((self.change() % 100) % 50) % 20) % 10) % 5) % 1) % .25) / .10);
            return numOfDimes;
        }),
        nickels: ko.computed(function () {
            var numOfNickels = Math.floor(((((((((self.change() % 100) % 50) % 20) % 10) % 5) % 1) % .25) % .10) / .05);
            return numOfNickels;
        }),
        pennies: ko.computed(function () {
            var numOfPennies = Math.floor((((((((((self.change() % 100) % 50) % 20) % 10) % 5) % 1) % .25) % .10) % .05) / .01);
            return numOfPennies;
        })
    };
    self.twoElementsDisplay = {
        run: ko.computed(function () {
            var availbleElements = [self.bills.ones(), self.bills.tens(), self.bills.twenties(), self.bills.fifties(), self.bills.hundreds(), self.bills.fives(), self.coins.quarters(), self.coins.nickels(), self.coins.dimes(), self.coins.pennies()]
            var elementCounter = 0;
            for (var i = 0; i < availbleElements.length; i++) {
                if (availbleElements[i] > 0) {
                    elementCounter++
                }
            }
            if (elementCounter > 2) {
                return false;
            } else {
                return true;
            }
        })
    }
};

ko.applyBindings(new MyViewModel());
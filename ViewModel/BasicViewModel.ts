//import * as ko from "knockout";

{
    let data = [ {name: "Francis"}, {name: "Jojo"}, {name: "Spunkmeier"}];

    let viewModel = {
        list: ko.observableArray(data),

        addItem: function() {
            this.list.push({name: "Hicks"});
        },

        removeItem: function() {
            this.list.pop();
        }
    };
        
    
    // let viewModel_old = {
    //    name: ko.observable("Bob"),
    //    changeName: function () {
    //        this.name("steve");
    //    },
    //    nameVisible: ko.observable(true)
    // };

    // this.displayName = ko.computed(
    //     () => (viewModel_old.name() + " is" + (!viewModel_old.nameVisible() ? " not" : "") + " visible.")
    // );
    
    ko.applyBindings(viewModel);

}
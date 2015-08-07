$(document).ready(function () {

    var data = [
        { name: "John", surname: "Doe" },
        { name: "Jones", surname: "Smith" }
    ]

    var viewModel = kendo.observable({
        displayList: [ ],
        clickShowRow: function(){
            console.log("!!!clickShowRow")
        }
    });

    kendo.bind($("#main"), viewModel);
    viewModel.set("displayList",data)
});

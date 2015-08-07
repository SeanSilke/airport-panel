$(document).ready(function () {

    var data = [
        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines" },

        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines"
        },
        {
            type: "Arrival",
            flight: "AlA 352",
            airlines: "Alaska Airlines"
        },
        {
            type: "Departure",
            flight: "UsA 345",
            airlines: "US Airways"
        },
        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines" },

        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines"
        },
        {
            type: "Arrival",
            flight: "AlA 352",
            airlines: "Alaska Airlines"
        },
        {
            type: "Departure",
            flight: "UsA 345",
            airlines: "US Airways"
        },
        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines" },

        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines"
        },
        {
            type: "Arrival",
            flight: "AlA 352",
            airlines: "Alaska Airlines"
        },
        {
            type: "Departure",
            flight: "UsA 345",
            airlines: "US Airways"
        },
        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines" },

        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines"
        },
        {
            type: "Arrival",
            flight: "AlA 352",
            airlines: "Alaska Airlines"
        },
        {
            type: "Departure",
            flight: "UsA 345",
            airlines: "US Airways"
        },        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines" },

        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines"
        },
        {
            type: "Arrival",
            flight: "AlA 352",
            airlines: "Alaska Airlines"
        },
        {
            type: "Departure",
            flight: "UsA 345",
            airlines: "US Airways"
        },
        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines" },

        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines"
        },
        {
            type: "Arrival",
            flight: "AlA 352",
            airlines: "Alaska Airlines"
        },
        {
            type: "Departure",
            flight: "UsA 345",
            airlines: "US Airways"
        },        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines" },

        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines"
        },
        {
            type: "Arrival",
            flight: "AlA 352",
            airlines: "Alaska Airlines"
        },
        {
            type: "Departure",
            flight: "UsA 345",
            airlines: "US Airways"
        },
        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines" },

        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines"
        },
        {
            type: "Arrival",
            flight: "AlA 352",
            airlines: "Alaska Airlines"
        },
        {
            type: "Departure",
            flight: "UsA 345",
            airlines: "US Airways"
        }

    ]

    var viewModel = kendo.observable({
        displayList: [ ],
        clickShowRow: function () {
            console.log("!!!clickShowRow")
        }
    });

    kendo.bind($("#main"), viewModel);
    viewModel.set("displayList", data)
});

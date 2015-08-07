$(document).ready(function () {

    var tableOffset = $("#table-main").offset().top;
    var $header = $("#table-main > thead");
    var $fixedHeader = $("#header-fixed").append($header.clone());

    $(window).bind("scroll", function () {
        var offset = $(this).scrollTop();

        if (offset >= tableOffset && $fixedHeader.is(":hidden")) {
            $fixedHeader.show();

            $.each($header.find('tr > th'), function (ind, val) {
                var original_width = $(val).width();
                var original_padding = $(val).css("padding");
                $($fixedHeader.find('tr > th')[ind])
                    .width(original_width)
                    .css("padding", original_padding);
            });
        }
        else if (offset < tableOffset) {
            $fixedHeader.hide();
        }
    });

    var flightsArray = [
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
            flight: "UrA 243",
            airlines: "Ural Airlines"
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
        }

    ]

    var viewModel = kendo.observable({
        displayList: [ ],
        clickShowRow: function () {
            console.log("!!!clickShowRow")
        }
    });

    kendo.bind($("#main"), viewModel);
    viewModel.set("displayList", flightsArray)
});

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
                var original_border = $(val).css("border");
                $($fixedHeader.find('tr > th')[ind])
                    .width(original_width)
                    .css("padding", original_padding)
                    .css("border", original_border);
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
            airlines: "American Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "SVO",
            depTime: "23:02",
            arrTime: "01:15",
            status:"Landed",
            comment:"no comment"
        },
        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "DME",
            depTime: "21:31",
            arrTime: "16:22",
            status:"In-flight",
            comment:"no comment"
        },
        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "SVO",
            depTime: "23:02",
            arrTime: "01:15",
            status:"Landed",
            comment:"no comment"
        },
        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "DME",
            depTime: "21:31",
            arrTime: "16:22",
            status:"In-flight",
            comment:"no comment"
        },        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "SVO",
            depTime: "23:02",
            arrTime: "01:15",
            status:"Landed",
            comment:"no comment"
        },
        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "DME",
            depTime: "21:31",
            arrTime: "16:22",
            status:"In-flight",
            comment:"no comment"
        },        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "SVO",
            depTime: "23:02",
            arrTime: "01:15",
            status:"Landed",
            comment:"no comment"
        },
        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "DME",
            depTime: "21:31",
            arrTime: "16:22",
            status:"In-flight",
            comment:"no comment"
        },        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "SVO",
            depTime: "23:02",
            arrTime: "01:15",
            status:"Landed",
            comment:"no comment"
        },
        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "DME",
            depTime: "21:31",
            arrTime: "16:22",
            status:"In-flight",
            comment:"no comment"
        },        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "SVO",
            depTime: "23:02",
            arrTime: "01:15",
            status:"Landed",
            comment:"no comment"
        },
        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "DME",
            depTime: "21:31",
            arrTime: "16:22",
            status:"In-flight",
            comment:"no comment"
        },        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "SVO",
            depTime: "23:02",
            arrTime: "01:15",
            status:"Landed",
            comment:"no comment"
        },
        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "DME",
            depTime: "21:31",
            arrTime: "16:22",
            status:"In-flight",
            comment:"no comment"
        },        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "SVO",
            depTime: "23:02",
            arrTime: "01:15",
            status:"Landed",
            comment:"no comment"
        },
        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "DME",
            depTime: "21:31",
            arrTime: "16:22",
            status:"In-flight",
            comment:"no comment"
        },        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "SVO",
            depTime: "23:02",
            arrTime: "01:15",
            status:"Landed",
            comment:"no comment"
        },
        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "DME",
            depTime: "21:31",
            arrTime: "16:22",
            status:"In-flight",
            comment:"no comment"
        },        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "SVO",
            depTime: "23:02",
            arrTime: "01:15",
            status:"Landed",
            comment:"no comment"
        },
        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "DME",
            depTime: "21:31",
            arrTime: "16:22",
            status:"In-flight",
            comment:"no comment"
        },        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "SVO",
            depTime: "23:02",
            arrTime: "01:15",
            status:"Landed",
            comment:"no comment"
        },
        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "DME",
            depTime: "21:31",
            arrTime: "16:22",
            status:"In-flight",
            comment:"no comment"
        },        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "SVO",
            depTime: "23:02",
            arrTime: "01:15",
            status:"Landed",
            comment:"no comment"
        },
        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "DME",
            depTime: "21:31",
            arrTime: "16:22",
            status:"In-flight",
            comment:"no comment"
        },        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "SVO",
            depTime: "23:02",
            arrTime: "01:15",
            status:"Landed",
            comment:"no comment"
        },
        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "DME",
            depTime: "21:31",
            arrTime: "16:22",
            status:"In-flight",
            comment:"no comment"
        },        {
            type: "Departure",
            flight: "AA 403",
            airlines: "American Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "SVO",
            depTime: "23:02",
            arrTime: "01:15",
            status:"Landed",
            comment:"no comment"
        },
        {
            type: "Arrival",
            flight: "UA 243",
            airlines: "United Airlines",
            log: "no log",
            aircraft: "Boing 733",
            airport: "DME",
            depTime: "21:31",
            arrTime: "16:22",
            status:"In-flight",
            comment:"no comment"
        },

    ]

    var modal = $("#main").find('.modal');

    var viewModel = kendo.observable({
        displayList: [ ],
        selectedList: [],
        showArrival: true,
        showDeparture: true,
        clickShowRow: function (e) {
            this.set("selectedList", e.data)
            modal.modal();
        },
        filter: function (e) {
            var showArrival = this.get("showArrival")
            var showDeparture = this.get("showDeparture")
            var newflightsArray = []

            if (showArrival && showDeparture) {
                newflightsArray = flightsArray
            }
            else if (showArrival) {
                newflightsArray = flightsArray.filter(function (e) {
                    return e.type == "Arrival"
                })
            } else if (showDeparture) {
                newflightsArray = flightsArray.filter(function (e) {
                    return e.type == "Departure"
                })
            }

            this.set("displayList", newflightsArray)
        }

    });

    kendo.bind($("#main"), viewModel);
    viewModel.set("displayList", flightsArray)
});

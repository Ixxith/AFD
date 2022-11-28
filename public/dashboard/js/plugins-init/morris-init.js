// Dashboard 1 Morris-chart
$(function () {
    "use strict";
   

    // LINE CHART
    let line = new Morris.Line({
        element: 'morris-line-chart',
        resize: true,
        data: [
            {
                y: '2011 Q1',
                item1: 2666
            },
            {
                y: '2011 Q2',
                item1: 2778
            },
            {
                y: '2011 Q3',
                item1: 4912
            },
            {
                y: '2011 Q4',
                item1: 3767
            },
            {
                y: '2012 Q1',
                item1: 6810
            },
            {
                y: '2012 Q2',
                item1: 5670
            },
            {
                y: '2012 Q3',
                item1: 4820
            },
            {
                y: '2012 Q4',
                item1: 15073
            },
            {
                y: '2013 Q1',
                item1: 10687
            },
            {
                y: '2013 Q2',
                item1: 8432
            }
        ],
        xkey: 'y',
        ykeys: ['item1'],
        labels: ['Item 1'],
        gridLineColor: 'transparent',
        lineColors: ['#4d7cff'],
        lineWidth: 1,
        hideHover: 'auto',
    });
    // Morris donut chart

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Help Requests",
            value: 12,

        }, {
            label: "API Calls",
            value: 30
        }, {
            label: "Orientation",
            value: 20
        }],
        resize: true,
        colors: ['#4d7cff', '#7571F9', '#9097c4']
    });


    // Extra chart
    Morris.Area({
        element: 'extra-area-chart',
        data: [{
            period: '8AM',
            smartphone: 0,
            windows: 0,
            mac: 0
        }, {
            period: '9AM',
            smartphone: 90,
            windows: 60,
            mac: 25
        }, {
            period: '10AM',
            smartphone: 40,
            windows: 80,
            mac: 35
        }, {
            period: '11AM',
            smartphone: 30,
            windows: 47,
            mac: 17
        }, {
            period: '12PM',
            smartphone: 150,
            windows: 40,
            mac: 120
        }, {
            period: '1PM',
            smartphone: 25,
            windows: 80,
            mac: 40
        }, {
            period: '2PM',
            smartphone: 10,
            windows: 10,
            mac: 10
        },
        {
            period: '3PM',
            smartphone: 10,
            windows: 10,
            mac: 10
        },
        {
            period: '4PM',
            smartphone: 10,
            windows: 10,
            mac: 10
        },
        {
            period: '5PM',
            smartphone: 10,
            windows: 10,
            mac: 10
        },

        ],
        lineColors: ['#7571F9', '#9097c4', '#4d7cff'],
        xkey: 'period',
        ykeys: ['smartphone', 'windows', 'mac'],
        labels: ['Phone', 'Windows', 'Mac'],
        pointSize: 0,
        lineWidth: 0,
        resize: true,
        fillOpacity: 0.8,
        behaveLikeLine: true,
        gridLineColor: 'transparent',
        hideHover: 'auto'

    });
    // NOTE API USAGE COSTS
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2001',
            API: 0,
            Orientation: 0,
            Help_Requests: 0
        }, {
            period: '2002',
            API: 90,
            Orientation: 60,
            Help_Requests: 25
        }, {
            period: '2003',
            API: 40,
            Orientation: 80,
            Help_Requests: 35
        }, {
            period: '2004',
            API: 30,
            Orientation: 47,
            Help_Requests: 17
        }, {
            period: '2005',
            API: 150,
            Orientation: 40,
            Help_Requests: 120
        }, {
            period: '2006',
            API: 25,
            Orientation: 80,
            Help_Requests: 40
        }, {
            period: '2007',
            API: 10,
            Orientation: 10,
            Help_Requests: 10
        }


        ],
        xkey: 'period',
        ykeys: ['API', 'Orientation', 'Help_Requests'],
        labels: ['API', 'Orientation', 'Help_Requests'],
        pointSize: 3,
        fillOpacity: 0,
        pointStrokeColors: ['#7571F9', '#4d7cff', '#9097c4'],
        behaveLikeLine: true,
        gridLineColor: 'transparent',
        lineWidth: 3,
        hideHover: 'auto',
        lineColors: ['#7571F9', '#4d7cff', '#9097c4'],
        resize: true

    });

    Morris.Area({
        element: 'morris-area-chart0',
        data: [{
            period: '2010',
            SiteA: 0,
            SiteB: 0,

        }, {
            period: '2011',
            SiteA: 130,
            SiteB: 100,

        }, {
            period: '2012',
            SiteA: 80,
            SiteB: 60,

        }, {
            period: '2013',
            SiteA: 70,
            SiteB: 200,

        }, {
            period: '2014',
            SiteA: 180,
            SiteB: 150,

        }, {
            period: '2015',
            SiteA: 105,
            SiteB: 90,

        },
        {
            period: '2016',
            SiteA: 250,
            SiteB: 150,

        }],
        xkey: 'period',
        ykeys: ['SiteA', 'SiteB'],
        labels: ['Site A', 'Site B'],
        pointSize: 0,
        fillOpacity: 0.4,
        pointStrokeColors: ['#b4becb', '#4d7cff'],
        behaveLikeLine: true,
        gridLineColor: 'transparent',
        lineWidth: 0,
        smooth: false,
        hideHover: 'auto',
        lineColors: ['#b4becb', '#4d7cff'],
        resize: true

    });
    
 // Morris bar chart
//  Morris.Bar({
//     element: 'morris-bar-chart',
//     data: [{
//         y: '2006',
//         a: 100,
//         b: 90,
//         c: 60
//     }, {
//         y: '2007',
//         a: 75,
//         b: 65,
//         c: 40
//     }, {
//         y: '2008',
//         a: 50,
//         b: 40,
//         c: 30
//     }, {
//         y: '2009',
//         a: 75,
//         b: 65,
//         c: 40
//     }, {
//         y: '2010',
//         a: 50,
//         b: 40,
//         c: 30
//     }, {
//         y: '2011',
//         a: 75,
//         b: 65,
//         c: 40
//     }, {
//         y: '2012',
//         a: 100,
//         b: 90,
//         c: 40
//     }],
//     xkey: 'y',
//     ykeys: ['a', 'b', 'c'],
//     labels: ['A', 'B', 'C'],
//     barColors: ['#7571F9', '#9097c4', '#4d7cff'],
//     hideHover: 'auto',
//     gridLineColor: 'transparent',
//     resize: true
// });

});

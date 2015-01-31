/*jslint browser: true */
/*global $, jQuery, alert, console, Foundation5Boilerplate:true */

var console = console || { log: function() { 'use strict'; } };



window.hipHop = window.hipHop || {};

(function (s) {

    'use strict';

    s.App = function () {

        return {
            initialized: false,
            elements: {},
            settings: {
                debug: false
            },

            init: function () {


                if (this.settings.debug) { console.log('init()'); }

                if (this.initalized) { return false; }
                this.initialized = true;

                //dom elements
                this.elements.body =  $('body', 'html');
                this.elements.debug = $('#txtDebug', this.elements.body);
                // this.elements.currentYear = $('.current-year', this.elements.footer);

                //configure debug based on config file
                if (this.elements.debug.val()) {
                    this.settings.debug = true;
                    this.initDebug();
                }

                //initialize foundation
                $(document).foundation();

                // //populate current year for copyrite in footer
                // var d = new Date();
                // this.elements.currentYear.html(d.getFullYear());


            },




            initDebug: function () {

                if (this.settings.debug) { console.log('initDebug()'); }

                $(this.elements.body).append('<div id="debug-message"></div>');
                $('#debug-message').append('<p class="small">small</p><p class="medium">medium</p><p class="large">large</p><p class="exlarge">extra large</p>');
                $(window).resize(function () {
                    $('#debug-message').empty();
                    $('#debug-message').append('<p class="small">small</p><p class="medium">medium</p><p class="large">large</p><p class="exlarge">extra large</p>');
                    $('#debug-message').append('<p>width: ' + window.innerWidth + '</p>');
                });

            }

        };

    };

}(hipHop));



$(document).ready(function() {
    'use strict';
    hipHop.App().init();
});


var underground = [

 { ugQuote:'Sign of the swine in the swarm, When a king is a whore who comply and conform, Miles outside of the eye of the storm, With a siphon to lure out a prize and award, While avoiding the vile and bizarre that is violence and war, True blue triumph is more! -Aesop Rock'},
    { ugQuote: "I'm an example of a candle lit life with electric relaxation, brain trampled by devotion to remote control channel changin, something provoked the whole globe to lower expectations, damn, what's wrong with my generation? We was the cream of the crop but it seems we've been robbed...that's what happens when you trade in all your dreams for a job. -Eyedea"
        }
    //     { quote: ""
    //         },
    //         { quote: ""
    //             },
    //             { quote: ""
    //                 },
    //                 { quote: ""
    //                     },
    //                     { quote: ""
    //                         },
    //                         { quote: ""
    //                             },
    //                             { quote: ""
    //                                 }
];





var undergroundApp = {
 getQuote: function() {
        var rand = Math.floor((Math.random() * (underground.length)));
        return underground[rand].ugQuote;
        

    }
};



var mainstream= [

// { quote: ""
//     },
//     { quote: ""
//         },
//         { quote: ""
//             },
//             { quote: ""
//                 },
//                 { quote: ""
//                     },
//                     { quote: ""
//                         },
//                         { quote: ""
//                             },
//                             { quote: ""
//                                 },
//                                 { quote: ""
//                                     }
];


var mainStreamApp = {
 getQuote: function() {
        var rand = Math.floor((Math.random() * (mainstream.length)));
        return mainstream[rand].quote;
        

    }
};


  $("#btn").click(function() {
        $("#underground").text(undergroundApp.getQuote);
        $("#mainstream").text(mainstreamApp.getQuote);
  });




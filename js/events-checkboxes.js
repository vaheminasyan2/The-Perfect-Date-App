$(document).ready(function () {

    $("#submit-event").on("click", function () {

        event.preventDefault();

        //Results currently set to max of 50

        var token = '5E76NLXTIQ7IVJFI3SNJ'

        var place = "seattle";
        // This variable to be put in the queryURL...For example, "seattle"  in this part of queryURL..."&location.address=seattle" ...Zip codes and addresses work too. We can also specify how far we want to go around the location (e.g. 10mi).

        var date = "tomorrow";
        // Right now start_date.keyword ("tomorrow") is used. Keyword options are “this_week”, “next_week”, “this_weekend”, “next_month”, “this_month”, “tomorrow”, “today”. This can be changed to actual date or date range with "start_date.range_start" and "start_date.range_end".

        let categories = [];
        

        $("input:checkbox[name=category]:checked").each(function () {
            categories.push($(this).val());
            console.log(categories);
        });

        var otherCategory = $("#otherCategory").val();
        console.log(otherCategory);

        var price = $('input[name=inlineRadioOptions]:checked').val();
        //  results for price are either "free" or "paid". looks like we can't do price range. 
        console.log(price);

        var queryURL = "https://www.eventbriteapi.com/v3/events/search/?token=" + token + "&q=" + otherCategory + "&location.address=" + place + "&start_date.keyword=" + date + "&categories=" + categories + "&price=" + price + "&subcategories=";
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response);
            console.log(queryURL);
        })
    });

});
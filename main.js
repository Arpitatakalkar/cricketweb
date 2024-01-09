    $(document).ready(function () {
       // Function to fetch data from the API with offset
    function fetchFromAPI(apiURL, sectionID, contentID, cb) {
        $.get(apiURL, function (data) {
            if (data.status != "success") {
                alert("Failed to fetch data from the API");
                return;
            }

            let dataArray = data.data;
            if (!dataArray) {
                cb([]);
            } else {
                cb(dataArray);
            }
        });
    }

    // Function to update content
    function updateContent(sectionID, contentID, data) {
        // Update the content of the specified contentID with data
        $("#" + contentID).html(JSON.stringify(data));
    }

    // // API URLs
    // var AustraliaWomenVsIndiaWomenAPI = "https://api.cricapi.com/v1/match_scorecard?apikey=eca856da-a00b-407b-909e-71660a7ab4b9&id=28004108-5cdd-43f7-82f3-f530bf8b2ce9";
    // var EnglandWomenVsPakistanWomenAPI = "https://api.cricapi.com/v1/match_scorecard?apikey=3fd30251-ae08-4327-9191-5597ad0d6971&id=33383009-3c99-40f5-82ab-1671a42533b3";
    // var QuettaGladiatorsVsPeshawarZalmiAPI = "https://api.cricapi.com/v1/match_scorecard?apikey=eca856da-a00b-407b-909e-71660a7ab4b9&id=ab0b5e5e-cbc4-4c60-933f-e9c7c7a0b290";
    // var SouthAfricaWomenVsBangladeshWomenAPI = "https://api.cricapi.com/v1/match_scorecard?apikey=eca856da-a00b-407b-909e-71660a7ab4b9&id=ba2aecba-b908-4e6a-b15e-4ab155b35354";

    // // Fetch data for AustraliaWomenVsIndiaWomen section
    // fetchFromAPI(AustraliaWomenVsIndiaWomenAPI, "AustraliaWomenVsIndiaWomen", "AustraliaWomenVsIndiaWomenContent", function (data) {
    //     console.log("Complete data for Australia Women Vs India Women section:", data);
    //     // Update the content of the AustraliaWomenVsIndiaWomen section
    //     updateContent("AustraliaWomenVsIndiaWomen", "AustraliaWomenVsIndiaWomen", data);
    // });

    // // Fetch data for EnglandWomenVsPakistanWomen section
    // fetchFromAPI(EnglandWomenVsPakistanWomenAPI, "EnglandWomenVsPakistanWomen", "EnglandWomenVsPakistanWomenContent", function (data) {
    //     console.log("Complete data for England Women Vs Pakistan Women section:", data);
    //     // Update the content of the section
    //     updateContent("EnglandWomenVsPakistanWomen", "EnglandWomenVsPakistanWomenContent", data);
    // });

    // // Fetch data for QuettaGladiatorsVsPeshawarZalmi section
    // fetchFromAPI(QuettaGladiatorsVsPeshawarZalmiAPI, "QuettaGladiatorsVsPeshawarZalmi", "QuettaGladiatorsVsPeshawarZalmiContent", function (data) {
    //     console.log("Complete data for Quetta Gladiators Vs Peshawar Zalmi section:", data);
    //     // Update the content of the QuettaGladiatorsVsPeshawarZalmi section
    //     updateContent("QuettaGladiatorsVsPeshawarZalmi", "QuettaGladiatorsVsPeshawarZalmiContent", data);
    // });

    // // Fetch data for SouthAfricaWomenVsBangladeshWomen section
    // fetchFromAPI(SouthAfricaWomenVsBangladeshWomenAPI, "SouthAfricaWomenVsBangladeshWomen", "SouthAfricaWomenVsBangladeshWomenContent", function (data) {
    //     console.log("Complete data for South Africa Women Vs Bangladesh Women section:", data);
    //     // Update the content of the SouthAfricaWomenVsBangladeshWomen section
    //     updateContent("SouthAfricaWomenVsBangladeshWomen", "SouthAfricaWomenVsBangladeshWomenContent", data);
    // });
});

console.log("hello world");

function getRandomCharity() {
    data = null;
    // const name = document.querySelector("#charity-name").value;
    // const lowerName = name.toLowerCase();
    fetch('https://api.data.charitynavigator.org/v2/Organizations?app_id=65cc7d45&app_key=9f33a9e7e95c2de54a0deac1dd59d92e&pageSize=1000')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            // document.querySelector("#charity-name") = url(`${data.message}`);
            var min = 0;
            var max = 1000;
            rand = Math.floor(Math.random() * (+max - +min)) + +min;
            console.log("Name: " + data[rand]["charityName"]);
            console.log("Link: " + data[rand]["websiteURL"]);

            if (data[rand]["charityName"] != null) {
                document.getElementById("foundcharity").innerHTML = "Name: " + data[rand]["charityName"];
            }
            if (data[rand]["websiteURL"] != null) {
                document.getElementById("websitelink").innerHTML = "Link: " + data[rand]["websiteURL"];
            }
        });

}

function getSpecificCharity() {

    data = null;
    const name = document.querySelector("#charity-name").value;
    const lowerName = name.toLowerCase();
    fetch('https://api.data.charitynavigator.org/v2/Organizations?app_id=65cc7d45&app_key=9f33a9e7e95c2de54a0deac1dd59d92e&pageSize=1000&searcgh=' + lowerName + '')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            for (i = 0; i < 1000; i++) {
                // console.log(data)
                if (data.status === "error") {
                    alert("cant find charity");
                }
                else {
                    // data = document.getElementById("#foundcharity");
                    // console.log(`FORTNITE ${i}`);
                    charity = data[i]["charityName"];
                    lowerCharity = charity.toLowerCase();
                    // console.log(lowerCharity);
                    // console.log(charity);
                    if (lowerCharity == lowerName) {
                        console.log("Name: " + data[i]["charityName"]);
                        console.log("Link: " + data[i]["websiteURL"]);
                        if (data[i]["charityName"] != null) {
                            document.getElementById("foundcharity").innerHTML = "Name: " + data[i]["charityName"];
                        }
                        if (data[i]["websiteURL"] != null) {
                            document.getElementById("websitelink").innerHTML = "Link: " + data[i]["websiteURL"];
                        }
                        break;
                    }

                }
            }
        })


}
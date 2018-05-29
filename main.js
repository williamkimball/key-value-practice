let elizabeth_sanger = {
    congressional_district: 4,
    platform: {
        taxes: "high",
        jobs: "a lot",
        infrastructure: "we need them bridges",
        healthcare: "minimum",
        crime_and_enforcement: "crime is real bad"
    },
    donation_form: "https:/www.maoneyforme.com",
    calender: {
        january: {
            1: "travel",
            23: "speech",
            25: "kiss babies"
        },
        february: {
            3: "save a kitten",
            24: "grease some palms",
            29: "wonder at the leap day"
        },
    },
    volunteer_info: {
        volunteer_1: {
            name: "johan",
            address: "123 road ln.",
            email: "johan@me.com",
            phone: "1234567890",
            availability: {
                monday: true,
                tuesday: true,
                wednesday: false,
                thursday: true,
                friday: false,
                saturday: false,
                sunday: false
            },
            activities: ["writing", "soliciting", "campaining"]
        },
        volunteer_2: {
            name: "doug",
            address: "123 hedgeapple ln.",
            email: "doug@me.com",
            phone: "12568567890",
            availability: {
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: true,
                friday: true,
                saturday: true,
                sunday: true
            },
            activities: ["anything, call me stamper"]
        }
    },
    biography: "Elizabeth whatever has long been at the forefront of politics, campaigning for a new jungle gym when she was in kindergarten",
    imageGallery: {
        headshot: "src='head.jpg'",
        family: "src='family.jpg'",
        constituents: "src='con.jpg'"
    },
    missionStatement: "To boldly go....",
    urlregistration: "www.register.com"
}

console.log(elizabeth_sanger)

function changeDistrictState(object, district) {
    elizabeth_sanger.congressional_district = district
};
changeDistrictState(elizabeth_sanger, 5)
console.log(elizabeth_sanger.congressional_district)

function changePlatformState(object, plat) {
    elizabeth_sanger.platform = plat;
};

changePlatformState(elizabeth_sanger, {
    taxes: "low",
    jobs: "none",
    infrastructure: "nope",
    healthcare: "max",
    crime_and_enforcement: "anarchy"
})

console.log(elizabeth_sanger.platform)


function changeDonationState(object, donation_form) {
    elizabeth_sanger.donation_form = "www.donate.com"
};
console.log(elizabeth_sanger.donation_form);

function changeCalenderState(object, month, calEl ) {
    elizabeth_sanger.calender[month] = calEl;
};


changeCalenderState(elizabeth_sanger.calender, "july", {2:"sleep"})
console.log(elizabeth_sanger.calender)

function changeVolState(object, vol, volInfo) {
    elizabeth_sanger.volunteer_info[vol] = volInfo;
};
changeVolState(elizabeth_sanger,"volunteer_3", {name: "jim",
address: "123 road ln.",
email: "johan@me.com",
phone: "1234567890",
availability: {
    monday: true,
    tuesday: true,
    wednesday: false,
    thursday: true,
    friday: false,
    saturday: false,
    sunday: false}} )

 console.log(elizabeth_sanger.volunteer_info)

function changeBioState(biography) {
    elizabeth_sanger.biography = biography
};
changeBioState("this is the new text of the bio")
console.log(elizabeth_sanger.biography)

function changeImageState(newImageGallery) {
    elizabeth_sanger.imageGallery = newImageGallery
};
changeImageState({
    headshot: "src='got.jpg'",
    family: "src='rad.jpg'",
    constituents: "src='yo.jpg'"
})
console.log(elizabeth_sanger.imageGallery)

function changeMissionState(missionStatement) {
    elizabeth_sanger.missionStatement = missionStatement;
};
changeMissionState("I like politics");
console.log(elizabeth_sanger.missionStatement)

function changeRegistrationState(registration) {
    elizabeth_sanger.urlregistration = registration;
};
changeRegistrationState("www.yo.com");
console.log(elizabeth_sanger.urlregistration)


let newDiv = document.createElement("article");
newDiv.setAttribute("id", `district_${elizabeth_sanger.congressional_district}`)
let divContent = "";
let list = document.createElement("ul")

let makeLi = () => {
    document.createElement(li)
}
let key = "";
let property = "";


for (property in elizabeth_sanger.platform) {
    divContent += `${property} = ${elizabeth_sanger.platform[property]} <br>`
}

newDiv.innerHTML= divContent;

document.querySelector("#place").appendChild(newDiv);
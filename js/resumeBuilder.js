
var bio = {
	"name": "Andrii Koniushenko",
	"role": "Android developer",
	"contactInfo": "andre.koniushenko@gmail.com",
	"picture": "images/fry.jpg",
	"welcome": "I'm glad to see you here",
	"skills": ["Java SE", "Android SDK", "Git"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContactInfo = HTMLemail.replace("%data%", bio.contactInfo);
var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);

var work = {};
work.position = "Software Engineer";
work.jobs = ["DCT", "Appus", "Accenture"];

var education = {
	"schools":[
	{
		"name":"144",
		"city":"Kharkiv"
	},
	{
		"name":"KhNAHU",
		"city":"Kharkiv"
	}
	]
};
education["name"] = "KhNAHU";

$("#main").append(work["position"]).append(education.name);

$("#header").append(formattedName).append(formattedRole).append(formattedContactInfo)
.append(formattedPicture).append(formattedWelcome);

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
}

function displayWork(){
	for(var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var jobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job]);
		$(".work-entry:last").append(jobEmployer + " " + work.position);
	}
}

displayWork();

function inName(){
	var name = bio.name;
    name = name.trim().split(' ');
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    name = name.join(' ');

    return name;
}

var internationalizedButton = $('<input type="button" value="Internationalized Button" />');
$("#main").append(internationalizedButton);

var 

$("#projects").append();
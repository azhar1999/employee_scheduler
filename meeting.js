
var empResponsibility = {
    sde1: ["scrum"],
    sde2: ["scrum", "grooming"],
    sde3: ["scrum", "grooming", "architecturedesign"],
    po: ["grooming", "uxdesign"],
    hr: ["payrollmeeting", "funactivities"],
    tops: ["scrum", "grooming", "securityanalysis"]

}




class Emp {
    constructor(name, role) {  // Constructor
        this.empName = name;
        this.empRole = role;
        this.empResponsibility = empResponsibility[role];
    }
}


var emp1 = new Emp("athila", "sde3");
var emp2 = new Emp("akshay", "sde3");
var emp3 = new Emp("aysha", "sde3");
var emp4 = new Emp("sharron", "tops");
var emp5 = new Emp("sreeram", "tops");
var emp6 = new Emp("babitha", "sde1");
var emp7 = new Emp("darshan", "sde2");
var emp8 = new Emp("afsal", "po");
var emp9 = new Emp("fawas", "hr");
var emp10 = new Emp("hanan", "hr");

var empList = [];

empList.push(emp1);
empList.push(emp2);
empList.push(emp3);
empList.push(emp4);
empList.push(emp5);
empList.push(emp6);
empList.push(emp7);
empList.push(emp8);
empList.push(emp9);
empList.push(emp10);


function loading() {

    var selectBox = document.getElementById('firstemp');

    for (var i = 0, l = empList.length; i < l; i++) {
        var options = empList[i];
        selectBox.options.add(new Option(options.empName));

    }

    var selectBox3 = document.getElementById('meet');




}

function secondloading() {
    document.getElementById("secondemp").innerHTML = "";
    let option1 = document.getElementById('firstemp').value
    let selectBox2 = document.getElementById('secondemp');

    for (var i = 0, l = empList.length; i < l; i++) {
        var options = empList[i];

        if (option1 == options.empName) {
            continue;
        }
        else {
            selectBox2.options.add(new Option(options.empName));
        }

    }


}

function meetingvalidation() {
    let emp1 = document.getElementById('firstemp').value
    let emp2 = document.getElementById('secondemp').value
    let meeting = document.getElementById('meet').value

    var result = ""
    var flag = 0;
    var flag1=0;
    for (var i = 0, l = empList.length; i < l; i++) {
        var options = empList[i];
        if (emp1 == options.empName) {



            if (options.empResponsibility.includes(meeting)) {
                flag=1;
                result += ` ${options.empName} can enter meeting `;
            }
        }
    }

    if (flag == 0){
        result += ` ${emp1} cannot enter meeting `;

    }
    for (var j = 0, l1 = empList.length; j < l1; j++) {
        var options1 = empList[j];
        if (emp2 == options1.empName) {
    

            if (options1.empResponsibility.includes(meeting)) {
                flag1 = 1;
                result += `and ${options1.empName} can enter meeting`;

            }

        }
    }
    if (flag1 == 0){
        result += `  ${emp2} cannot enter meeting`;

    }

    if (flag==1 && flag1 ==1){
        document.getElementById('result').innerHTML="meeting can be scheduled";

    }

    else{
        document.getElementById('result').innerHTML=result;
    }

    
}











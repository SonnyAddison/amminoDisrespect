
var fetchButton = document.getElementById('button');

var inputVal = document.getElementById('foodId')

var spanone = document.getElementById('spanOne')
var spantwo = document.getElementById('spanTwo')
var spanthree = document.getElementById('spanThree')
var spanfour = document.getElementById('spanFour')
var spanfive = document.getElementById('spanFive')
var spansix = document.getElementById('spanSix')
var spanseven = document.getElementById('spanSeven')
var spaneight = document.getElementById('spanEight')
var spannine = document.getElementById('spanNine')
var spanten = document.getElementById('spanTen')
var spaneleven = document.getElementById('spanEleven')
var spantwelve = document.getElementById('spanTwelve')
var spanthirteen = document.getElementById('spanThirteen')
var spanfourteen = document.getElementById('spanFourteen')
var spanfifthteen = document.getElementById('spanFifthteen')
var spansixthteen = document.getElementById('spanSixthteen')
var spanseventeen = document.getElementById('spanSeventeen')
var spaneighteen = document.getElementById('spanEighteen')
var spannineteen = document.getElementById('spanNineteen')
var spantwenty = document.getElementById('spanTwenty')
var spantwentyone = document.getElementById('spanTwentyone')
var spantwentytwo = document.getElementById('spanTwentytwo')
var spantwentythree = document.getElementById('spanTwentythree')
var spantwentyfour = document.getElementById('spanTwentyfour')


function getInputValue(){
     
    var inputVal = document.getElementById("foodId").value;
    
    alert(inputVal);
}

function getApi() {

    var requestUrl = 'https://api.edamam.com/api/nutrition-data?app_id=5f855e92&app_key=4e91ec1f44d71eafe040cf675c730d7e&nutrition-type=logging&ingr=' + foodId.value;


    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        spanone.textContent = 'Calories ' + (data.calories);
        spantwo.textContent = 'Calcium ' + (data.totalDaily.CA.quantity);
        spanthree.textContent = 'Carbs ' + (data.totalDaily.CHOCDF.quantity);
        spanfour.textContent = 'Cholesterol ' + (data.totalDaily.CHOLE.quantity);
        spanfive.textContent = 'Energy ' + (data.totalDaily.ENERC_KCAL.quantity);
        spansix.textContent = 'Saturated ' + (data.totalDaily.FASAT.quantity);
        spanseven.textContent = 'Fat ' + (data.totalDaily.FAT.quantity);
        spaneight.textContent = 'Iron ' + (data.totalDaily.FE.quantity);
        spannine.textContent = 'Fiber ' + (data.totalDaily.FIBTG.quantity);
        spanten.textContent = 'Folate ' + (data.totalDaily.FOLDFE.quantity);
        spaneleven.textContent = 'Potassium ' + (data.totalDaily.K.quantity);
        spantwelve.textContent = 'Magnesium ' + (data.totalDaily.MG.quantity);
        spanthirteen.textContent = 'Sodium ' + (data.totalDaily.NA.quantity);
        spanfourteen.textContent = 'Niacin ' + (data.totalDaily.NIA.quantity);
        spanfifthteen.textContent = 'Phosphorus ' + (data.totalDaily.P.quantity);
        spansixthteen.textContent = 'Protein ' + (data.totalDaily.PROCNT.quantity);
        spanseventeen.textContent = 'Riboflavin ' + (data.totalDaily.RIBF.quantity);
        spaneighteen.textContent = 'Thiamin ' + (data.totalDaily.THIA.quantity);
        spannineteen.textContent = 'Vitamin A ' + (data.totalDaily.VITA_RAE.quantity);
        spantwenty.textContent = 'Vitamin B6 ' + (data.totalDaily.VITB6A.quantity);
        spantwentyone.textContent = 'Vitamin B12 ' + (data.totalDaily.VITB12.quantity);
        spantwentytwo.textContent = 'Vitamin C ' + (data.totalDaily.VITC.quantity);
        spantwentythree.textContent = 'Vitamin D ' + (data.totalDaily.VITD.quantity);
        spantwentyfour.textContent = 'Zinc ' + (data.totalDaily.ZN.quantity);
        localStorage.setObj(container.value);
    });
}

// function apiLog() {
//     span.textContent = data;
// }

fetchButton.addEventListener('click', getApi);
// searchButton.addEventListener('click', getInputValue);
// apiLog()
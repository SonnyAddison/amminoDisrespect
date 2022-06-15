// GET https://api.edamam.com/doc/open-api/nutrition-analysis-v1.json
var fetchButton = document.getElementById('button');
// var searchButton = document.getElementById('buttonTwo')
var inputVal = document.getElementById('foodId')


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
        spanfifteen.textContent = 'Phosphorus ' + (data.totalDaily.P.quantity);
        spansixteen.textContent = 'Protein ' + (data.totalDaily.PROCNT.quantity);
        spanseventeen.textContent = 'Riboflavin ' + (data.totalDaily.RIBF.quantity);
        spaneighteen.textContent = 'Thiamin ' + (data.totalDaily.THIA.quantity);
        spannineteen.textContent = 'Vitamin A ' + (data.totalDaily.VITA_RAE);
        spantwenty.textContent = 'Vitamin B6 ' + (data.totalDaily.VITB6A.quantity);
        spantwentyone.textContent = 'Vitamin B12 ' + (data.totalDaily.VITB12.quantity);
        spantwentytwo.textContent = 'Vitamin C ' + (data.totalDaily.VITC.quantity);
        spantwentythree.textContent = 'Vitamin D ' + (data.totalDaily.VITD.quantity);
        spantwentyfour.textContent = 'Zinc ' + (data.totalDaily.ZN.quantity);
    });
}

// function apiLog() {
//     span.textContent = data;
// }

fetchButton.addEventListener('click', getApi);
// searchButton.addEventListener('click', getInputValue);
// apiLog()
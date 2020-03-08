
//Data Contoller nammed (budjetController)
var budjetController = (function (){

var Expense = function (id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
}

var Income = function (id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
}

var data = {
    allItems: {
        exp : [],
        inc : []

    },
    totals : {
        exp: 0,
        inc: 0
    }

};

return {
    addItem : function (type, description, value){
        var newItem, ID;
        //Create new ID
        if (data.allItems[type].length > 0){
            ID = data.allItems[type] [data.allItems[type].length - 1].id + 1;
        }else {
            ID = 0;
        }
        
        //Create a newItem based on 'inc' or 'exp' type 
        if (type === 'exp'){
            newItem = new Expense (ID, description, value);
        }else if (type === 'inc') {
            newItem = new Income (ID, description, value);
        }
        //Add new Item to data structure
        data.allItems[type].push(newItem);
        return newItem;

    },

    testFunction : function (){
        return data;
    }
}

     
})();


//UIcontroller
var UIcontroller = (function (){

    var DOMStrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue :'.add__value',
        inputBtn : '.add__btn'
    };

return{

    getInput : function (){
        
    return {

    type : document .querySelector(DOMStrings.inputType).value,
    description : document.querySelector(DOMStrings.inputDescription).value,
    value : document.querySelector(DOMStrings.inputValue).value

    };

    },

    returnDomStrings : function (){
        return DOMStrings;
    },

    displayItem : function(tabitem) {

    for (var i = 0; i< tabitem.length; i++){

        if (item[i].type === '+'){

            // display it in income
            document.querySelector('.')    
        
            }else {
        
            //display it in expenses 
        
            }

        }    

    }

    
}

})();


// Contoller (link with Data and UI Controller)
var controller = (function (budjtctrl, UIctrl){
   
   var setupEventListner = function (){

    var dom  = UIctrl.returnDomStrings(); 

    document.querySelector(dom.inputBtn).addEventListener('click',eventFunction);

    document.addEventListener('keypress', function (event){
        
        if (event.keyCode === 13 || event.which === 13){

         eventFunction();

        }

    });

   };

   var eventFunction = function (){
        var input, newItem
        //1. Get the Field Input Data UI
        input = UIctrl.getInput();
        //2. Add the Item To the budjetController (data Structure)
        newItem = budjtctrl.addItem(input.type, input.description, input.value);
        console.log(budjtctrl.testFunction());
        //3.add new item to the UI

        //4. Calculate the budjet

        //5. Display the budjet in the UI   

   };

   return {

    init : function (){
        setupEventListner();
    }

   };

    
     

})(budjetController, UIcontroller);

controller.init();


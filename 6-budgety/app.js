
//Data Contoller nammed (budjetController)
var budjetController = (function (){
var arrItem = [];
return {

    addItem : function (item){

         arrItem.push(item);
         return arrItem;

    }

}
     
})();


//UIcontroller
var UIcontroller = (function (){

    var DOMStrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue :'.add__value'
    };

return{

    getInput : function (){
        
    return {

    type : document .querySelector(DOMStrings.inputType).value,
    description : document.querySelector(DOMStrings.inputDescription).value,
    value : document.querySelector(DOMStrings.inputValue).value

    };

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

   var eventFunction = function (){

        //1. Get the Field Input Data UI
        var x = UIctrl.getInput();
        //2. Add the Item To the budjetController (data Structure)
        var y = budjtctrl.addItem(x);
        console.log(y);
        //3.add new item to the UI

        //4. Calculate the budjet

        //4. Display the budjet in the UI 
        

   }

    
    document.querySelector('.add__btn').addEventListener('click', function(){

        eventFunction();

    });
    

    document.addEventListener('keypress', function (event){
        
        if (event.keyCode === 13 || event.which === 13){

         eventFunction();

        }


    }); 

})(budjetController, UIcontroller);
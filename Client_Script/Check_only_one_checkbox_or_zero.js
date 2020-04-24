function onSubmit(){
    var fieldNameArray=['checkbox_name_1','checkbox_name_2','checkbox_name_3']; //Change 'checkbox_name_X' by the name of your Checkbox
    var count = 0;
    for(var i=0;i<fieldNameArray.length;i++){
		var fieldValue = g_form.getValue(fieldNameArray[i]);
		if(fieldValue.toString() == 'true'){
		count++;
		}
	}   
    if(count>1){ //For this example, no more 1 checkbox can be filled
		g_form.addErrorMessage('Please check only 1 checkbox.'); //Alert message before Update or Order.
    return false; //Stop Update or Order
    }
}
function onCondition() {
	var checktask = g_form.getValue('u_task_id'); //Get the name of the task
	if(checktask == 'T1'){ //If task name is T1
		//Mandatory
        g_form.setMandatory('fieldname',true); //Change 'fieldname' by your field name
		//Read Only
		g_form.setReadOnly('fieldname',true); //Choose true or false
	}
    else if(checktask == 'T2'){ //If task name is T2
        //Mandatory
        g_form.setMandatory('fieldname',false);
		//Read Only
        g_form.setReadOnly('fieldname',false);
	}
	else {
		//Mandatory
        g_form.setMandatory('fieldname',true);
		//Read Only
		g_form.setReadOnly('fieldname',true);
	}
}
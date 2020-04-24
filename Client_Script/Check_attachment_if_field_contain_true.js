function onSubmit() {
    var fieldvalue = g_form.getValue('fieldname'); //Change 'fieldname' by your field name
    if (fieldvalue=='Yes'){ //If value is "Yes"
        var sys_id = gel('sys_uniqueValue').value;      
        var attachment = new GlideRecord('sys_attachment');      
        attachment.addQuery('table_name','sc_task');  
        attachment.addQuery('table_sys_id',sys_id);      
        attachment.query();  
        if (!attachment.next()) {  
            g_form.addErrorMessage('Your Error message'); //Show alert message if no attachment
            return false; //Stop Update or Order
        }
    }
}
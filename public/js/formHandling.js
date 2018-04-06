function editRow(myId, myLbs){  
    //Hide Edit Button
    var editButt = document.getElementById(myId + '_editButton');
    editButt.style.display = 'none';


    //Show Submit Button
    var submitButt = document.getElementById(myId + '_submitButton');
    submitButt.style.display = 'block';
    //Show Name form field  
    var thisName = document.getElementById(myId + '_name');
    thisName.style.display = 'block';    
    //Show Reps form field
    var thisReps = document.getElementById(myId+ '_reps');
    thisReps.style.display = 'block';

    var thisWeight = document.getElementById(myId + '_weight');
    thisWeight.style.display = 'block';

    var thisDate = document.getElementById(myId+'_date');
    thisDate.style.display = 'block';

    var thisLbs = document.getElementById(myId + '_lbs');
    thisLbs.style.display = 'block';

    var thisKg = document.getElementById(myId + '_kg');
    thisKg.style.display = 'block';

    //Determine which radio button should be checked.
      
    submitForm();

}


 function submitForm(myId){
        var thisId = documenet.getElementById(myId);
        var editButt = document.getElementById(myId + '_editButton');
        //Show Edit Button
        var editButt = document.getElementById(myId + '_editButton');
        editButt.style.display = 'block';
        //Show Submit Button
        var submitButt = document.getElementById(myId + '_submitButton');
        submitButt.style.display = 'none';
        //Show Name form field  
        var thisName = document.getElementById(myId + '_name');
        thisName.style.display = 'none';    
        //Show Reps form field
        var thisReps = document.getElementById(myId+ '_reps');
        thisReps.style.display = 'none';

        var thisWeight = document.getElementById(myId + '_weight');
        thisWeight.style.display = 'none';

        var thisDate = document.getElementById(myId+'_date');
        thisDate.style.display = 'none';

        var thisLbs = document.getElementById(myId + '_lbs');
        thisLbs.style.display = 'none';

        var thisKg = document.getElementById(myId + '_kg');
        thisKg.style.display = 'none';


  
    
 }
function validateForm(event){
    event.preventDefault(); 
    const studentName=document.getElementById("studentName").value;
    const studentId=document.getElementById("studentId").value;
    const startDate=document.getElementById("startDate").value;
    const endDate=document.getElementById("endDate").value;
    const reason=document.getElementById("reason").value;
    const errorMessage=document.getElementById("errorMessage");
    errorMessage.textContent=""; 
    if(!studentName||!studentId||!startDate||!endDate||!reason){
        errorMessage.textContent="Please fill out all fields.";
        return false;
    }
    const start=new Date(startDate);
    const end=new Date(endDate);
    if(end<start){
        errorMessage.textContent="End date cannot be before start date.";
        return false;
    }
    successMessage.style.display="block";
    alert("Leave application submitted successfully!");
    document.getElementById("leaveForm").reset();
    return true;
}

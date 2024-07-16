
    function agecalculater()
    {
    var userinput = document.getElementById("dob").value;
    var dob = new Date(userinput);
    if(userinput==null || userinput=='')
    {
        document.getElementById("message").innerHTML ="choose a date...!!";
        return false;
    }
    else
    {
        var month_diff=Date.now()-dob.getTime();
        var age_dt= new Date(month_diff);
        var year= age_dt.getFullYear();
        var age= Math.abs(year-1970);
        return document.getElementById("result").innerHTML = " 👉Your Age is "+age+" year.";
    }
}
 function createRequestObject() {
    var ro;
    var browser = navigator.appName;
    if(browser == "Microsoft Internet Explorer"){
        ro = new ActiveXObject("Microsoft.XMLHTTP");
    }else{
        ro = new XMLHttpRequest();
    }
    return ro;
 }

 var http = createRequestObject();

 function sndReq(TheForm) {
    document.getElementById("TheText").innerHTML = TheForm.name.value;
    http.open(TheForm.method,TheForm.action, true);
    http.setRequestHeader('Content-Type','application/x-www-form-urlencoded'); 
    http.onreadystatechange = handleResponse;
    var query="name="+encodeURI(TheForm.name.value);
    query+="&pass="+encodeURI(TheForm.ThePass.value);
    query+="&OptionChoice="+encodeURI(TheForm.selectbox.value);
    query+="&Importance="+encodeURI(TheForm.importance.value);
    query+="&TextareaContent="+encodeURI(TheForm.TheText.value);
    
    http.send(query);
    return true;
 }

 function handleResponse() {
    if(http.readyState == 4){
        var response = http.responseText;
        var TheDiv = document.getElementById('parameters');
        TheDiv.innerHTML=response;
    }
 }

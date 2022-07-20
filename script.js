var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);

    var res=result.filter((ele)=>ele.population<200000).map((ele)=>ele.name);
    console.log(res);  

    var res=result.filter((ele)=>ele.region=="Asia").map((ele)=>ele.name);
    console.log(res);

    var res=result.reduce((acc,ele)=>acc+ele.population);
    console.log(res);  

     for (i=0;i<=250;i++)
    {   var res=result.forEach(function(i) {
        console.log(res[i].name);
        console.log(res[i].captial);
        console.log(res[i].flag);
    });
    }

    var res=result.reduce((acc,ele)=>acc+ele.population);
    console.log(res);  

    var res=result.filter((ele)=>ele.currencies ("symbol"=="$").map((ele)=>ele.name));
    console.log(res);
}

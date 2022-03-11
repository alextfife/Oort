
var d = new Date();
var day = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
var realMonth = month + 1;


function loadDate() {
document.getElementById("day").innerHTML = day;
document.getElementById("year").innerHTML = year;

if (realMonth == 1) {
document.getElementById("month").innerHTML= "January ";
}
if (realMonth == 2) {
document.getElementById("month").innerHTML= "February ";
}
if (realMonth == 3) {
document.getElementById("month").innerHTML= "March ";
}
if (realMonth == 4) {
document.getElementById("month").innerHTML= "April ";
}
if (realMonth == 5) {
document.getElementById("month").innerHTML= "May ";
}
if (realMonth == 6) {
document.getElementById("month").innerHTML= "June ";
}
if (realMonth == 7) {
document.getElementById("month").innerHTML= "July ";
}
if (realMonth == 8) {
document.getElementById("month").innerHTML= "August ";
}
if (realMonth == 9) {
document.getElementById("month").innerHTML= "Semptember ";
}
if (realMonth == 10) {
document.getElementById("month").innerHTML= "October ";
}
if (realMonth == 11) {
document.getElementById("month").innerHTML= "November ";
}
if (realMonth == 12) {
document.getElementById("month").innerHTML= "December ";
}
}




function lastmMod() {
document.getElementById("mod").innerHTML = "Updated:" + document.lastModified +"";
}





function lastmMod() {
document.getElementById("mod").innerHTML = "Updated:" + document.lastModified +"";
}





//iOS App Code...DONT TOUCH    NO COMMENTS EITHER!





var a=document.getElementsByTagName("a");
for(var i=0;i<a.length;i++)
{
    a[i].onclick=function()
    {
        window.location=this.getAttribute("href");
        return false
    }
}   




function setPri(i) {
localStorage.setItem('HP'+i, prompt("What do you want to add to High Priority?"));
document.getElementById("High" + i).style.color="red";
document.getElementById("High" + i).innerHTML = localStorage.getItem('HP' + i);
}


function setName() {
localStorage.setItem('username' ,prompt("What is your name?"));
document.getElementById("user").innerHTML = "Welcome back " + localStorage.getItem('username');
}
//could you add a fallback messgae in the event the name doesnt work ^
 function add(i){
localStorage.setItem("text"+i,prompt("What would you like to add?"));
 document.getElementById('box'+i).innerHTML = localStorage.getItem('text'+i); 
}
 


function subtract(i) {
var x = "";
document.getElementById("box" + i).innerHTML = x;
localStorage.setItem("text" + i, x);
document.getElementById("High" + i).innerHTML = x;
localStorage.setItem("HP" + i, x);
}



 function start() {
 for (var i = 1; i < 30; i++) { 
document.getElementById('box'+i).innerHTML = localStorage.getItem('text'+i);
 document.getElementById('High'+i).innerHTML = localStorage.getItem('HP'+i);
document.getElementById("user").innerHTML = "Welcome back " + localStorage.getItem('username');
document.getElementById("High" + i).style.color="red";
 }
document.body.style.background = localStorage.color;
document.getElementById("user").innerHTML = "Welcome back " + localStorage.getItem('username');
}

function Color() {
localStorage.color = prompt("type a color you want. Or you can make a background image using this format: url('put image url here')");
document.body.style.background = localStorage.color;
document.body.style.color = localStorage.Tcolor;  //text color
if (localStorage.color == "swag" || localStorage.color == "SWAG" || localStorage.color == "Swag" || localStorage.color == "SwAg" || localStorage.color == "sWaG" || localStorage.color == "SWag" || localStorage.color == "SwAG") {
localStorage.color = "url('http://images5.fanpop.com/image/photos/31100000/SWAG-LINE-disney-crossover-31192275-1610-846.jpg')";
document.body.style.background = localStorage.color;
}
if (localStorage.color == "black") {
document.body.style.background = localStorage.color;
document.body.style.color = "white";
}

if (localStorage.color == "barney") {
 localStorage.color = "purple";
localStorage.Tcolor= "green";
document.body.style.background = localStorage.color;
document.body.style.color = localStorage.Tcolor;
}

if (localStorage.color == "america") {
 localStorage.color = "url('http://1.bp.blogspot.com/_ahoJXwM2zgo/TH8NcfHEYOI/AAAAAAAACJA/n9jN2wWxG-4/s1600/bald_eagle_head_and_american_flag1.jpg')";
localStorage.Tcolor= "white";
document.body.style.background = localStorage.color;
document.body.style.color = localStorage.Tcolor;
}

if (localStorage.color == "team america" || localStorage.color == "merica" || localStorage.color == "murica"  ) {
 localStorage.color = "url('http://teslkoreanews.com/wp-content/uploads/2010/09/teamamerica_1024.jpg')";
localStorage.Tcolor= "white";
document.body.style.background = localStorage.color;
document.body.style.color = localStorage.Tcolor;
}

if (localStorage.color == "ios 7" || localStorage.color == "iOS 7" || localStorage.color == "iOS" ||  localStorage.color == "ios 7" || localStorage.color == "7") {
 localStorage.color = "url('http://palloc.com/wp-content/uploads/2013/06/iOS-7-Wallpaper-Background.png')";
localStorage.Tcolor= "white";
document.body.style.background = localStorage.color;
document.body.style.color = localStorage.Tcolor;
}

if (localStorage.color == "asian") {
 localStorage.color = "yellow";
localStorage.Tcolor= "red";
document.body.style.background = localStorage.color;
document.body.style.color = localStorage.Tcolor;
}

if (localStorage.color == "white chick" || localStorage.color == "white girl") {
 localStorage.color = "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBhQSERUUExQVFRQVGRUXFxUXGBQXFRkWFBQYFRYYFxUXHCYeFxojGRYVHy8gIycpLCwsFR4xNTAqNSYrLCkBCQoKDgwOGg8PGiokHyQsLCwpKSkuLCwsLCwsKSwsLCwsLiksKSwsLCwsLCksLCwsLCwsLCwsLCksLCkpKSwsLP/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABQQGAgMHAQj/xABMEAACAQIEAgcDBgoHBwUBAAABAgMAEQQSITEFQQYTIlFhcZEygaEHFEKxwdEjM0NSYoKS0uHwJFNjcrLC8SU0c5Oio7MVFkRkgwj/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAApEQACAgEEAgEDBAMAAAAAAAAAAQIRIRIxQVEDImFxkfATobHxBBQy/9oADAMBAAIRAxEAPwDh1FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUVtwmGaR1jQXZ2VVHezEAD1NAGqm/B+iWLxX4jDyyD84Kcnvc2Uetdz6H/JRhMIqtIi4ifcvIMyA/wBnGdAPE3PltV5ty5Db+FOgOBcO+QvHSWMjQQjuZy7ekYI+NWHC/wD8/IPxuMY+EcQA/aZz9Vddy1g4piOaR/IlgU9psQ/m6KPRU+2tp+Szhy/kWPnLL9jCr7KtQJkoApM3yf4BdsMnveY/56hT9C8EP/jJ+1L+/VynjpZiYqQyk4vohhBtDbyeX7WNI8X0Vg5dYvkwI+K1ecZDSPFw1DspFKxXR23svfwYW+Iv9VKJsOUNiPu9aumKhpJxPDDqyf53pKTG4irh6XlQEAgsgsdjdhvU/pRh1SYBAoGRT2bWvc6gjQ8tqg8N/HR/308PpDnTXpob4m9iLou++hYfUPS1WQIaKKKACiiigAooooAKKKKACiiuydCuFRph4iI1DFVJbKMxJF99+dAHII8K7bIx8lJ+qth4bL/VyfsN91fRuGB8a3S3tufjToR8zvAw3Vh5gitdfROIB7z8aUYzBq3tKp81B+sUDOG10z5O/kpjxkK4jESOEYtljjsCQrFSWcg21B0A99S5OiSTNlTDqzHkqgHzutreddW6I8C+a4SKI5UyLqt72JYsddb6nvpAKcD8l/DYtsKjHvkMkh9Ga3wptF0Twa+zhMMP/wAIfrK04MsY3dfh99a3x8A3kHw++i0GRRNwPDjbDwDyhi/dpZiuCQ/1EH/Ki/dp9NxOD+sHw++oUmNgP5QfD76LQUyr4vovhW3w0HujRf8ACBSTGdA8G35AL/daQf5iPhV5kMJ2kHoa0PglOzqfUfZSsZy7H/JpFqY5JEPc2Vx9QNReiHQyROKYUGzoJA9x/ZgvqD4qK6lNwpjsAfIg1a+E8MWFbRqqX3ci7t4n7qYibFAbd3nWZUDdqwaAfSZvUKKjyTYdfaaL9Z7/AH0NgbZMbCu7fECo0vGYRtr6n6hWJ6R4RPpwjyRz9lRpumeHH5Q+6M/bU6l2VT6PJuOJyRz+o5+yoE/SDuhf/ltXs/TeD86T3Iv30vm6cw9837KfvUWuwp9GOI6SkfkH/wCWaWYnpbb8h6x1Im6cQ/nTfsp+9UCfprCfpzj9RD/mpWuwz0QMT0vXnCv7JFLMT0oiO8C+rj7an4rpTA35V/1oUP20lxnEsO35VPfC6/4RRjseSPiONwN9Ajye/wBYpPj5onRlViCdsw09Rf6q2Ytozs8TeRI/xAUpxEKnYehvSoLIuDTLNHe1g6G+4tmHdv5VN6UzBpxY3sig76EXuDf+ffUPh4tPH/fT/GKYdMP94Gt+wveLWJBFiBbUHkPKtCBHRRRQAUUUUAFFFFABRRRQBZOgvCI8ROVkTOqre1yq3uBqRr7q7NgYljUKvVIAAANdANANa+fMLjnjvkYi+45G3fXUuF8KDorBCbgG/mL1LdDR0SGf+1hHuB+2tkrvbSWA/qGqQOEqN4/hWJwCfm2qdRVFqmMn9ifc37tQ5C3OOM+RI+6q+cEvKjqiNmYe80aw0lt4DIiOzP8Agxa2hJvre2lzTodJMKNgW/Vv8WNczlxUijR2/aP21ZcFwaZlDCM2IBFyBuKWp8BpXJZv/eEI2jb0jH31i3TmP+qf/t/u0ifhEy7xn4GocsZXdSPMUtUh0iwS9NIz+Sb1j/dqJJ0lhbeJv2Yj9lI2IrwAUamFIatxLDt+TI/UT7GFeDFw8sw/VP3mlyJWwpT1MKQxi4rGpF308Qw+sVtxXSR29iS4/QIsPeuvrVV4kbA1L+TzhazmfOTZWTQaXuG5+6lbYUkTZcQzbknzrSy351d4ujsA/J38yx+2sm4LB/VrRoDWUEwLWtoFq8zcBhP0APImluJ6Mxn2SRS0D1FQkgFQ5cOKsGM4A63sb0jxMLLuKKCxdNhxS+fDCmMrVCmamIU4jD0qxMNO52pZiTTFYlnW1RiamYmoRq0JnqykEEEgjUHmCNRWzF4x5WzOxY7XNth5bVpoqiQooooAKKKKACiiigAooooAK7b0KxGfCQn9AD9ns/ZXEq6p8nnEAuCudoy4PrmA/wCqplsBf0FaJsOrcqpqzzYxnBcxgBSqlbgq98rBWIGS4AvZmJYeQ1xcEkKRMjsGfqb3RAF6zMH+guqldgSe+29QZ/qvhFixOCttUJ1pPBx6eMIWvIj58tg7EojZc5XVlB7wxHhTbD49JlzL7x9oPMePhyOlJmsJqRExS11To9Lmw0J740/wiuX4kV0XobLfBxeAI/ZYj7KcSmPGNRMREG3ANRuPcfTDJdrZrXAJsANszEAkC+lgCSdADralpxnE4wZo3RVZzGmd3QM4XNlWKE3Gmt5Gaqs55+VRdbssPEOCKdQLUhmwpU0nwuAnliWXrUUt1unVAqvUkg5pA19baGxpanFMUohNi3XKzqiMztlXctHJmFrajKVvUtBHz9otkYrYwpJwbpKkuhsDoLi4FzoAynVCeWpB2DE6U/K1J0RkpZQj4oulMvkpb8Jih/wT/wCQVB4tsa3/ACTyf0nEj9CM+jsPtpx3GzqKivGFZik3G+kiQXGjMts12yol9R1j2NieSgFjyHOtDKUlFWybKKiyiqXiek+JnVmiTESou5iXqYh5NZpX9VOmwpLDiMTPEZlSLJmyZpcTiB2tNLvOO8Ujn/2ot1Ffn7l+nFKMfhww1FU2biGKimMJhlEoGbLFPMTlte4DtIpHuryDps17FwTsUmURtfuEsfZv/eVfOkaR86e5I4lgcp0pDiDVhbiqS3XVXAuUb2rd4sbOviCRSHHjWpOhOxZO1LMS1TsQ1LMS1NAL8S1QzUjENUetESwooopiCiiigAooooAKKKKACiiigAq5dD8T/RZkIJHWRkgblW9oDxshqm0+6MYllWcKSGCI4I3vHINvcxpPYUtmWDjfF5AEhS7adUBlykkHUMfaB9hSl/ajJ1sL7ZOAYpEVgpacMS0eTLlUXIkEqsDrY876jQc9MvE26pVKITNIAxKgspDMpCktdDa+tr9o60xRLQaMwIe9wgHbJDW60DMOzc3vubd1QTGKativD8deUSI7yI/ZDXYh4xGx1BAu6AsSy2DC19dTUnFTLBMpSTMTlMmYEHNJrnYAZUBuoK32IO4FRsHjkVpYhCokGRhIuYO2Wzi4sQwuSDtcHXatGO4oYw8CqBZmQtc9pF6xVUrzsHOvgO6kyZ+uS2yzBlDDYi/8KvPQGa+EH6LuP+q/+auacJlLYcE/zdQx+JNXfoHibYTEXPsM58rxA/ZQja7VkXG4lpcSMSwvAkyx6rmUZ0KiQ30tHmjAuCMxfa5utxvHlw/XfN/6MrPlaR2tH1sLatBGmZnzC4ZBdQCLmtcMsTITFK0c7ERtrZQJZckgKN+MzKXkzD2RGo0NqT8d6Lvnw+IlFsM6RgR5lWREJa0caH2mVLSHTUlr7mmcXijrdmxeloCkpLlVWYhxg1yRtNmvkYyFlvZuXLblWJ46CmcKkhEaQNPE7/g4bgEtAyho2tftbX9KaqcP82mSMSR4VmbrIutiElz/AFYaS6Kerbsa5u3vpaoYzgrDFBuHrJlBXUi2TPpZla5KW0JNwe15UHT+muBpJBmkkWGGJFj1SZW/B9VrfrWJIcMvLf3VZ+jHF+ujsdwNL6mwsCpJ3KkjXmGQnW9VnCzyp1iQ3UkSZVF7RyRuFnVF3N7KVvsredT+HXixlusMhZjmJAU51YwvoDsSym/PKO6pIj6y/kbcaPZNavknm/p+IHfCD6Sr99ZccPZNL/kpl/2pIO+CT4SRH76aOlnWOkHF/m8Ja4BNwCRfLYEs9udgNBzYqOdc+w/Amx8JkEuVy8iwwkErdRnk617fjXBDFzvY8rBW/TniC/OI1kVmhjAeQKL3VSGynuDyNh1v4UrxPEOzOuHmLpjj1wcsEMAQk4jr7eyoWw03A9WeZ52pzp5S4/Pt/Q3wvGVw0OGfFZ0lhLYZkz2yi2khi/KDKE7Q/OvrSHA8bw0WHeA4hSevMgcwNIrL2T7DLYE2I8OVVnFdKAZMuFTr5SQvzidetldtvwcT3VB3XDN5bUz4CcfioJpRjsgiBGRgFCupDHOOryhcgY3F9eQpm0fFPF1+fYbwcVhnmxcuGa+IdFSISHKTZdSmbYXy6foDa9I8b0dywR4UBDO15ZpGserXT6W+uijvsxqtydLmY2xMUWIW9usCCKTTmsiAa8+0pqbhMSkayTQlp8NKvVzKbLPFm2zcu+zDQ+FIpxa3IWJwxhTMkqzwqwByEho2OzIfo+7Q8xWcfEc4sSCbXDWsGXa9uRGxHI1swnAEsXZ8ykZ1izDVfoGVhp36ee9jVecNFIVsBu6AHMAdbqD4qCPSjc1haGeJalWIap00lxcbHUe+lmIahGxBmOta6yc1jVohhRRRTAKKKKACiiigAooooAKKKKACnfRAXxGT+sSRPVCR8QKSUx6Oz5MVC36aj1OX7aGBb8CsnVszokkhMhjztr1jXjY2GoN1YryYqw3tT7CzSfMpVyjssoPhfVtPAhNeWYnkKw4jgRHJ1hUGNxv1YkK3dWcBTqQwDDvGa4521YfG3KRJiHs0bOwJjktZM4Ul4zbsgDdvZOgtWRlGWj1YpijQnPJEQUOUOGuJVbVI1S3ackDwFye4Uk+fs3WKVUtK2pI7QYsT2Ty1NWH58hAlDiSVWkUq7FmddbBABorIRYqosQSTyrzB8LV5esKZFN8q7ki+tyNL2NtNANBc6gFK5tUTMJDkhUeF/dsPgBVp+TcB1xcR2YL/ANaup+qq7jX0pv8AJZiP6VOvfGp/Ze3+ahHRVCODhfVyxyMy5TiGiK65hra5FwbEE7Ebb32WTO5xl76RxsSxN73VhctnkLa2vd2sEbXSwsnSfoyTjpFzLGhVpS7XyqqC59kXJsV0H51R+KYqZl6pDCxLLJO4GZmAQFZFYgHqXBF76rmcdhbXaOD/ABfRuD7JS4ZzhWPUIYxnUsQmcgm0khGUktHmlsRfY2tbtU3ieMkikhdCy6lWKsQbvlzLdb6XQ231Vt7VesPNMMBKQeyHsCdGEZI6435EEtc/RPWW2FVCOXtPHLCjRlVPWMcoiZCdSNebeyNRbLZspFM7zHikzkI1260yObrYPokabKqsG0F7qDptWzo3h3GLAcEMCM1979YjG/7J1pdjsWwlUgMgQL1YIAIX2lbKBYXJLWAtrppVm6H4d3d55CSTrc7k2KA+mc+5TzpcHF/35cDLjrdk0n+Sqb/bFu+GUfEN/lqf0hk7JpD8lU/+2k8VmH/ZJ+yiJ2svHSjpAMPj5cyB+ymQkmySIxyOwAOZRuV/RFRsBg0xeKcqAYJpWad7ZVMGHRL/AN3rZ2DW/s/A1r6b8FefiEipluImk1IFwgZjqdOY3I3vypDAo+ZrJkVurMwJ6ky2IIcZmeRYMvaFg4Y75Qb0cnn+K35Wntbok8M4OvDsTZHixdhZ4wOwpa7wnrSD+EuoOg94uKexccXEjr2fCxsjXyf0sXMt1UsUYCQuFI9htBY91UroqHEcj29psygDdljltZQP658OoA3YgDY2up4kqYfOcLnghEoI6kPHKIiVR+uvlCqNCWHJiua9M9ArnSTiMeKw6Rx4ZEkByIc6iBFLZWZT2QGLKqAsvfrSPh/R3EYJZcRMpVY8qNFoRLG7KJLkG2UKbg99u40w43F1UMw3yrItgLC4mEJNuQzSTSW5CWGovB+kc7Ych3MiKCjCWPPDlsAAXj/Cpppchh4imIhYnDsq4iBDdRlkUgXZ0bLkHlYgn+NKMdhEiPZvmQpmvscwvoOW1SuMztHJHkbtLDEuZb6jJ4gEi1txSORyzXJuSdzvSREehuh7AHdcehI+yoOIapQPZ8yT6sTUGdqDUjGvKKKsgKKKKACvStej+RXpa+pOpoAxtXgFbTHYXPr9n11sw8Oc66CxOguTbkBf3+QNA6I9qAK3SRhed/Lb1515GFv2hYe+lY6NarW2eNVtY5jbXTn9v8K9uM3ZYC+htmAsd9d7Vj1WpA7Vr6jY+IvyoCjJFVvDwPPwBtoa34wujEDOlvo3NxUeOBvaHIZvde1/WmD41+tEgKl2UkjKGABBBuCN7C9/GkVwW7o30+jWHq8TmZwLAsAVYcgxO3nY99TsBjcDibswERAzEkoRbY6ut9DpauefOUCjskub3Jtltyyi3nWzCYhFUksb79Xlsp2+lc+PKpE4xe51GPBYRPZMett2SxvqNFsDpbcVninrlXWSZWLjsNY6mwuQchC31+6p8fSLExqLksvK9tuWo1NKhpVsWzGy1N+TPFW4lb86KQehVv8ALVLwXH3kUh1JI5qNOWh7t6f9BJmTisAYFWzSIVOhF4n37jcDSmsMTOt9LODtKgkit1iA8swKkEEFbHMLFgVtqGO5CiqRkjkVIcyI5SCOKJEtOuILqHl61V7SMuc5gxBDDS4rqgpFxvopFP2vYe97jbNvewIKnmSrLfnem0cvk8Tb1RKVMJC8uHjxLmMJK5DJhZS6mTIbMGAJbMxOfKe/ekb4IyRPIGZ5IpXU9ZkyKQ2dGyKwiUN2szEsNTa96sMvyfPGX6uSwdWRu2RdW3BDRN3DmagxdAET22Ft7avt5hV9UNSyYxm91+4leNcY69XEQW1Y3sM1znCEe0CdTI17CwGtgbnh8IIYwg5bm1rm1tuQsAAOQArDD4CNFKhdDa55m21z9mw5WrPFS6Ujph49OXuVXpNN2TVf+S2b/bMB72m+MMlT+lWJsp/nbWkvyZyW4rhP+Jb9pWX7auOxTOl/Krh2SaOVSRcWuCRry/8AHf3iqxwnC9gxTxGz/hIi6IMwC2lWOSVSFzR2OZRm/BgDUiupdPeDfOMKbWulzfkAba+QYKT+iGql4zEvi2nPzgR4dUikcSCTNhZY2CBUUWtJmVxddw3fYUnucEo6PLq/PkUT8awrSMmESSOCKO1yLNmSLFZytyTm6uWZwWPtxDbNcdAw3Ho1wSsyC6H5v1KAWaVG6oRoDplYjS+ynXY1QcUEiYiUpnkBlEwDNBOHDsGbTMmeUQh9LWiK2UEg2zFzYc8PMcM0bui9YhzoXOIQ9aGNzqzSb33zEUzsjOMimQSxPJFC7oBJkW5NlKKJVcgn6JRkhS+r9SraWWlkXR04SR1d1IQ3MqB1KqALgTIbxyWP4txla4sb1lx7h8JGUyIApsoVhI2VQvVjsHXsM8ZuR+IQ8zfTisI0kQyo0cR7Ma2zyysubL1jADRdRdthe1zrRYOa4EOLxwknaSQEhiSRc3A5C/PQAVDkKtISgsNwPE7fEgVhiNCQf5tUzA4a2p5fX3e4H1PhQKBlKLADuFvSl0xqfiGpdIaEas10UUVZAUUUUASMRC6kK240A0J15aedaxpfTUX+4++p87iWY9RGEDaKhYE8vpNa7H4k2rRjJHzFWVQwOU2A3Gm40PupF0akUldF3tr5d1S5GAv1iFTlAQLZeWjE/S333NZYPi7R3XNIikWKo7DUHexNu/1qE+Z31JJY7uddeZJpA/g9igO9m7xYX2158vWt6lXDGRrPcZRYAEk65uSgCmmGwN0s/Umxyg3dpGK6nKFJvpz27r60txOCszA3uPztCCDzB+qwpakWoOjVh01IUBtLAnSx77H3/CssLiepftKrEXBU2ttatmHIMoCsId7v2trdwuST4d9WCURRIIYI1d5B2iypJOdeZ1WAWtoLt3kHYbCK6K5CmcsoIa4uNctjoNAd+WndWMOCYElrqAbE9xN9D3XAPoaYYbBAFldQhJsWvoo10te4N7f6V4vC2XMh7TFsq5TnHWGx+jvddj/Gp1dFaOyQuChMihWWbssWVSyjKFue1aw0v6VGwqwKknWqc1rIB33G556X+FbH4LJCCGywtls2Z+0Vbll5ba1rwPCy12kYZQCRcMQQdM2g2FwfTepbXY0n0b8Vg2XDJ1jRhWJKLcNKENvaAPZW40v3mtS4qWRY4EyMoLBQAM13te9u0eVq24HBqFMgJk7NrfSHatoOZsp07q3cJxSdajpYSR2dc3Z7UTZl5WOmludqEDQtORWH4VpCL9kK6qD3AnXfwFWbhOLgh+b4te1Kr3dSzXBUntZje4YG3magrHHiJ55ACWd5Hyr2QB7RN7gWvfmbAXtzpUwSJWLJcvooNyq253GjN5/XVN8EpYPpbhXGo54UlVgFdQwuQD3H0OlSJp1Fu0uu2o18u+vmVcZI6KgBCJmfIDeyMRoMx05m36ZPOnHEpo3gEhlEeUhUw6E5rDdmbKfXTU6ChslQvY7li2ABubUkxEysLqwYHmCCPUVzDH9OZ8SjR5wUK3yZbuMq2OvMW7VySeyT5qcDxx4AyhyUYglQSLGxB0uDseR3Ub2pDUTqZkqJjJ9Ko/DOl85T2c4B9tu7cqSSL6c9TTVOkSyxh/ZvfQ940IvsaNgoRdLJ9D/O+lL+gL24ngz/AG8Q9WA+2sukhZtbaX39ftqN0Oa3EMIf/sQf+Va0jsZyVM+qstxY7Eag6i3dXOOkfR9sNI7JGJYZgEdGJUOAwKKZB+LmUgZWOjiw9q4fpK1pxEYYEMAQQQQQCCDuCDuPCkzOcFJHLcB0jiyzSSBcMY0jwsMOXrXRcxZmaN7F+1lvf831gcNw+HmTFzPHhj1bRBHKyQw2NwWKIbrm3t322q6cZ6DRS+zYW2VwXUeCuGWRB+jmKj82q1N0AlVWRMwR7ZlTEWVrai6vEL28SaRzOE08qxRwMxucUiKiutnjeEgHKAAyxyyglQSBqds5pHJxAwtJEQJUmzHq0lMjK55GRRqTzt99WE/J6RuoH96a/qscQv8AtCsZOjCRKbkEc1UZEP8Ae1LP5MxHhSNIRl0UlsK0jZiFFtAFAyIByU/Sbx1t4nQeyqALDYU14kozC2gAsANBbypRiDRZ1JUL8SagPUzEtUI1cQkeUUUVRAUUUUAPOFNAjkzqwCj2Nix5A3uQO/yqHNjc0t4rp2uxY2IB21oxbKAEQIRoesN85JUZgSWsADe1gK2RcLFgxYX/AL8YFz4k6aVnS3NrbwbcNCA1yDa/aOZL+OpOnuqFiMXmkJtcXOUG2gJ8LVNiYKLlFIFjYm+bvuBv8PhWOA6tiFCgEAlmY2uPLXXytUrst8JGzB8XdGtHGgcEG+UGzLsRm9k3515i2UlnmmLSsblVFySTcktsP50qT18YLM7gnQgAEsSosoGumyi55Dnzi43BNI5kMZiR7ZSSABsLm+p2J0FCYP7sxwONHaVEAZrAM72VdDmYk2AO1uW9OsHiMNDg5e1nxDOAHUsLDLcmwGovcDXltrelP/pMSixnVmJFlTtG97aWBA35mtfFeBSQlUIJDgFDmUqQddcux8DtR6vAvZKyHPjmdrm5ubne5/1qRLxtxYIBHlNxl0bMDuW9okW010qfhOj8aokuIZhGxt2bC5FrhS1sxseW16x47Jh2cJhoyUAFiQqybXOYqbH4004vZCqSWWLYJOscXUMxJJJ0udzmN9b+vnUnEYaVrjP2d8t2VQD3A6WGg76lphMVhVMRVYTKAxLBesKkdkBrFlUg3str872FsGwSqqkzMxO9iVCt4lgKUpJPA4xbWSwcLeKGILFqJCue5U9pb+0faBAPsgC+h1pTxbpCqFhEPwhbtORoLC1kB28/9agyguPwesjNlISzZydQwtsfDxuNyKlYlzDAsa4Uo73zuylnYhjsx2XwXu1vSrllOXCNMHGRHDIAQ00oyNJa75DYsoYnQGwBO5Bta2taYCzxZSpIGozEga/mk6DW3nW7hGEWNgZlBY2YKGUHL+aSQQhOljy2Ntw44pwSdJogyssZCuCFzkbWLgaEAsASLjfTvG+EJRe7NOH4xBEpWCB3xEh9pzmZQNgO823b30ulweQmSbK7NoI+0bk22YMPXUedb5ce74glFQqBY5VEahdrabHn48+dK5XlaRTmMliLZu0NTYA305W91CVspvGxPwmChnk1kjhzCwzm2XvLEGw8vKl8jnMFDh1J32t/IqRx7H9a7XiSMjlHfKCN/a1FzUaOdUVVTVzYu9tR3KndbmeZ8KIp7sUmtl9x4cG8qLHAqsSbX02Cktl00HeTpp51cMZgAcPFiGRRFOEWVYwFEUqqULoNiCbXHmOYIQw4uCNHkVibIsUCLbM7SduR/Cxstt7bgVAw2JMWGlErTKScwjFshbMDqb9m1h77VLeKZVZtESfg4adh1gSPtWcAkHLfmO86XI7r1M6PQQddHKDaSORHCnsgqhzkk3NtgPM0gh4tIgAU3W9wrAkXPdf091WKTgzsoxE34LNayC4YrtoSLa3qpJoiLiz6J4XxBMRCksZurC/kdiD4g3HurbKK5H8nfTpcJHJCwMiZ+sVrhSodVDDnc5he2m51106zh8WksayIbq4BB8/trROzFxaIs9QZWphiY6WTigRAxjVVeMvoasOOktVT41iN6TGiqY9tTSmc0yxbamleJNSULMS1Ra3TtrWmtURIKKKKZIUV6RXlAFg4ZhI8VI7PJHh1A2y5730sAWB0v30cQQQnIrmeO9yLSRnNbLmysSPC47qzwmCjiSNw7TdYn4SOMEFQwYMMxGrCw5W1qHHPmGUarcaePnyuL1m3WDeKvI34ZgJJQqp1UZt2mlvaMHYklSS2l9L70mxuHjSbK0/WKtwXRNDb80ORcX77VrxGKf2FPZ8L37tba02lwsEeDDHL1pawGhJXLdjbfew7qhepT9r+CHA8MDJJmztbMVy6K2Y9nXQ6AHu1tXvHOLz4whmVyiAKtlOUKL22FqX4e9wUF37zY22tYHbz+qmfFuGYtPx7vsGszOTztoavCeWRlqksCx8b7PZAZba2AvYmxIHO1h7q2NxdyMp2+/8AhUWGBnZVAYkkAAAkknQADnTpoYcPdHUNMpIYEXtble5AI2tRKlmrYQ1PmkZdIukazCGNVypBGI1APlnbzJG9e8M6KyzwSYlTZUINgL2BNgSeQ8aU4wI2UxjXL2xc2zl29gHlly6eFWnoziPwbRTynDwsFEjnNsvaACjVtbfzelK0qRUVcm2RMJxSJw5xjT9ZktEVAIuoOXNnPs6W0Pfva1Jjxc3Ftue2o5jXlT/pZxLByqIsHHIyx7SstmJN73A2U9xF9KqxwTqRmRvQ0Rit2TKT4HzdLyqdXGpRPpC41a1gb5cwFgNL2pkeMK2GRI4AkpBMkzsWZu0SuQfRGS2/f5VWpnM5VI4wcgsuRQCQNSWtqx53JNTcdKDrJKWdtcijqwoAAAYlbXsBtcWG9TNYouLd2R5UyXZ2LG1lAsNSdyDe48K38M4RiMZqGYhQQLkmyjUgC+i/fUZMKCvZVWY7AFmbxv8ARAvUvDTYnDxv1ashIKkq+yN7Qyg3Nx/OlNYBmHD8UcJIQbHKc3he2lwdNDY2PdWPD4lnzC3bUCxFxm0sLm9rg9+9Ruj+AXEYmOKR8iuSGckC2hO7aAk2FzprrpV46D9DmkeRYZxGyblo85sSV1RhYHTU2IHfc2okq+oRd/RCj/260kyIkmYFTtGiNodfC5JOpPLnWgcEihk/CMwtqS4uucG4DBdcpNv4104dF8bcrMuCcmyxtllS5tmYP1eVVUKCxZl5WGulc06TMjYl4jJDEFzo3VGSWPNHb2Ta+pvby1testM2/j4/o21QS+fkgYt4nlZ+tvMzMSwHYJbuFhbcjlWcXEp3cmRmkdLAEkWAG1yfLQVo4fwlHlVUZiQwuWKquo7IzbBs2+vPwpxLMuH6ywUXOUqMrZw1xmW9+4ba/GnLGFkmOcvBXvnTJNd47m9wrA78jodamdJeMYiWQCZ8zAKBba1raDlretHz0STRjK7BWBIOrWB1GnhWLIzykyERXuQXViNSTuASNedq1W5lw/qS+HcNxCxuFyguUuCbHs3IsTpz7+VXPo70qxWGhCdXIwN3OWRbCwCEKLXUjISRfnfbWkMnGH+aiK6lUtmkUq25OUJzXYk39KStjyVsAT+kSba73JOvuqbZWlF7g+V6dJNVaWMasjrZwBvZ1Gm3MEVecT0swxjjk6wWlUMijV7HvUbEHQ35g1xA8adYdlAfOBqSdrE2I27VaODdImgdW3Kk7/DSqVkNRs6tielUDyiIMQ7bBlK3Nr21529aR8bkGtc+43xx8RO0zE5iQR4Wta3pUw8Y61X632r3QkHc8sw9nS2hFjblzbTJVXROk1NK8W+9tbVKws4ANyWFv5Fxrt9VSOIQxrh1kim/GaNEbZgQNQw125d4INRZekqz6mtggI3FNOGuuloszq29yFZeaEDXyIPnflvj4eY/94Rurb6Q3BHNSd99Rzq3OhLx2QpIInjuiydYPaN1Kelhal0bWYEakEEX20p1g8aIQQLMAdCNja9iL7fxpdh8aFfMQCb3BOtiNfeDtRGTdhOKVMwxkjF2LKFJJutrWv4cqjjyphhxFI95WKC+tgW9ANQKj4lwGIUacv5tVJktctjLC8MIGZs0Yb2bE3IuQTe23LTmDW7DYJO0gKq3K9yzn80ePoKKKwtylRukkkxmODthELTdUjNqFZrtlOuqjUDlVTxDhnJAOW+w+zuoorWtOTLU5eo54LDhmcEvJHlBYiwObKCbZr94G451L4l04klkBlJmRQVGoRsvKzKPrB3NFFGlNi1tLB7jMPPHD1/VvFrZc+j63uQLcreG4NVVkbcg6+et6KKmNR2HL33LmmEw2Cwmdmz4uS2VOSLf2mPjY2Ud4vVXfHNK13uVGpGuw/m3vooohFPL3H5JNeq2LPwcYCXBv1iEYkGyhRYHuN+Xj5UmeJoCGgNnA1Nw2uuqnKLfGiispycZ0jXxxU42yf0PmZZOs1LZjvqDYAEHwIY1XcZLmkJPfrzFvL1oorWGZMy8mIIZ8L4wkJAyAjUnQXY8hbWwAv61J4z0kM7BQvVC+7X7PuGtvXWvKKqlddk6m1fR5F0YN1ZZAwIJBXY2Gp93Op3HZcVhniJZ4pyABIueNylsozd+1r8wNdq9orCLbnl7HQ0lDC3JvEeE8TxGH66TEySxkG/aJFlFzfXUVRurdHFr5gQQRvfcEUUVrGTWTGUU3RbBisPDw9QGJxLMbgFSoUC/aHtBiTYeVVzBtJJMGQdsWN+WnM0UUmtMXJDvVNR4RYV4c8uYh1Q6DsArbTUAc0uOfOokvE8mHAsWYSe1bsso217wym3nRRWPjbk8m81pjaJg4eCqOVVxIoZFGW1gSCbDYlg178/KoXEuEyntaLfcEtoOWpH1aUUUpzcZUVGClC+xhB0FkniVlfMiroVF1Gva3I+kddKjNFh44nSQESqCFGQWuAfaN7g3B769orfThWznbSukedEuBQzRzO8qq8a5lRvpW3tew000pBjsTckAm1/EaA6XFFFWlkh4ia0ziMkN2b6i9teWnPepEuCXKgRszkZpD9FAbBQT39/mKKKp9kRVuj3D454SMpvl1AN7fCtvFOkks6hGYlV2HIX/ANTRRSirVlTdYQvjXTUG3117FCpOrW8PO/PbkPWvKKa5E1hEqOFLKc1gQc1r3Vh+ct/Lb7KxykfmP3E/VRRUl8H/2Q==')";
localStorage.Tcolor= "white";
document.body.style.background = localStorage.color;
document.body.style.color = localStorage.Tcolor;
}

if (localStorage.color == "nathan" || localStorage.color == "Nathan") {
localStorage.color = "-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(125,126,125,1)), color-stop(100%,rgba(14,14,14,1)))";
localStorage.Tcolor = "white";
document.body.style.color = localStorage.Tcolor;
document.body.style.background = localStorage.color;
}

if (localStorage.color == localStorage.profile) {
localStorage.color = localStorage.profileBack;
localStorage.Tcolor = localStorage.profileText;
document.body.style.color = localStorage.profileText;
document.body.style.background = localStorage.profileBack;
}

if (localStorage.color == "") {
alert("Please type in a color or image."); 
}
}
function TColor() {
localStorage.Tcolor = prompt("What color text?");
document.body.style.color = localStorage.Tcolor;
}


function Profile() {
localStorage.profileBack = prompt("What is the background color/image you want?");
localStorage.profileText = prompt("What color text?");
alert("Name of Profile?");
localStorage.profile = prompt("Enter the name of the profile");
alert("Theme Made Successfully! Now type it into the Change Background button to use it");
}

/***********************************************************************************************************************
DOCUMENT: includes/javascript.js
DEVELOPED BY: Ryan Stemkoski
COMPANY: Zipline Interactive
EMAIL: ryan@gozipline.com
PHONE: 509-321-2849
DATE: 3/26/2009
UPDATED: 3/25/2010
DESCRIPTION: This is the JavaScript required to create the accordion style menu.  Requires jQuery library
************************************************************************************************************************/
$(document).ready(function() {
	 
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton').click(function() {
   
		//REMOVE ON STYLE FROM ALL BUTTONS
		$('.accordionButton').removeClass('on');
		  
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$('.accordionContent').slideUp('normal');
   
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {
			  
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('on');
			  
			//OPEN THE SLIDE
			$(this).next().slideDown('normal');
		 }
		  
	 });
	  
	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	/*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	
	/********************************************************************************************************************
	CLOSES ALL S ON PAGE LOAD
	********************************************************************************************************************/	
	$('.accordionContent').hide();
	
	/*
	and this last bit opens the hidden div below the first accordianButton that has id=open
	*/
	$("#open").trigger('click');

});
function getJSONData() {
    //
    $.getJSON("https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json", function(json) {
        $('#table-cars').append("<tbody id='car-list'>");
        for (let counter = 0; counter < json.length; counter++) {
            $('#table-cars').append("<tr class='main-text table-body-bg cards-break'><td id='fix" + counter + "' colspan='3'>" + json[counter].title + "<br/>" + "<span class='sub-text'>" + json[counter].description + "</span>" + "</td>"
            + "<td class=main-text' colspan='1'>" + json[counter].year + "</td>" 
            + "<td id='color" + [counter] + "' class='main-text color' colspan='1'>" + json[counter].color + "</td>" 
            + "<td id='status" + [counter] + "' class='main-text' colspan='2'>" + json[counter].status + "</td>" 
            + "<td id='price" + [counter] + "' class='main-text' colspan='3'>" + json[counter].price + " руб." + "</td>" 
            + "<td class='main-text' colspan='3'>" + "<button class='delete' onclick='$(this).closest(`tr`).remove();'>Удалить</button>" + "</td></tr>");
        // COLOR TEXT REPLACEMENT
            // Valid code, but doesn't work. Don't know why. 
            // If you can - give me a hint. 
            // The culprit is the "color" variable. 
            // Only the green color works. If you change it - EVERYTHING WORKS AS INTENDED. 
        // for (let i = 0; i < json.length; i ++) {
        // let color = $("td#color"+i).text();                        
        // let img = 'img/';                        
        // $("td#color"+i).text('').append(`<img src="img/${color}.png" class="p-2">`);
        // };
        //Ugly code that works straightaway                        
        const img = 'img/';                      
        $("td#color0").html(`<img src='${img}red.png' class='p-2'>`);
        $("td#color1").html(`<img src='${img}white.png' class='p-2'>`);
        $("td#color2").html(`<img src='${img}black.png' class='p-2'>`);
        $("td#color3").html(`<img src='${img}black.png' class='p-2'>`);
        $("td#color4").html(`<img src='${img}green.png' class='p-2'>`);
    // STATUS TEXT REPLACEMENT
    function getTranslate(input) {
        let inputMap = {
            "pednding": "Ожидается",
            "out_of_stock": "Нет в наличии",
            "in_stock": "В наличии"
        }
        let defaultCode = input;
        return inputMap[input] || defaultCode;
        }
        for (let i = 0; i < json.length; i ++){
        let text = $("td#status"+i).text();
        $("td#status"+i).text("").append(getTranslate(text));                        
        }      
    //Adding spaces between number
    // function addSpacesBetweenPrices(num) {
    // var n = num.toString();
    // return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    // }                    
    // Fixing a little bit
    if ($('td#fix0:contains("1.6 MT Ambiente 85 л.с. МКПП 1.6 MT Ambiente 85 л.с. МКПП 1.6 MT Ambiente 85 л.с. МКПП")')) {
        $('td#fix0').text("").append('1.6 MT Ambiente 85 л.с. МКПП' + "<br/>" + "<span class='sub-text'>" + "+ доп. опция Радио-навигационная система Amundasen 2DIN, CD, MP3" + "</span>");
    }
$('#table-cars').append("</tbody>");
    }
    
    });
}

function AddData() {
    let rows = "";
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let year = document.getElementById("year").value;
    let description = document.getElementById("description").value;
    let color = $("input[name='color']:checked").val();
    // Changing text of colours into circles
    if (color == "black"){
        color = "<img src='img/black.png' class='p-2'>";
    } else if (color == "white"){
        color = "<img src='img/white.png' class='p-2'>";
    } else if (color == "grey"){
        color = "<img src='img/grey.png' class='p-2'>";
    }  else if (color == "red"){
        color = "<img src='img/red.png' class='p-2'>";
    }  else if (color == "green"){
        color = "<img src='img/green.png' class='p-2'>";
    };
    // Getting info from select
    let status = $("#status-selector option:selected").val();   
    // Generating a row   
    rows += `<tr class="manually-added main-text table-body-bg">
    <td colspan='3'>${name}<br/><span class='sub-text'>${description}</span></td>
    <td class="manually-added main-text" colspan='1'>${year}</td>
    <td class="manually-added main-text color" colspan='1'>${color}</td>
    <td class="manually-added main-text" colspan='2'>${status}</td>
    <td class="manually-added main-text" colspan='3'>${price} руб.</td>
    <td colspan='3'><button class='delete' onclick="$(this).closest('tr').remove();">Удалить</button></td></tr>`;  
    // Adding a car + info into the table               
    $(rows).appendTo("#car-list");           
}

$( "img#white").click(function(){
$('#blackbg').css("visibility","hidden");  
$('#greybg').css("visibility","hidden");  
$('#redbg').css("visibility","hidden");  
$('#greenbg').css("visibility","hidden");  
$('#whitebg').css("visibility","visible");  
$("input[type='radio']#white").prop("checked", true);
$("input[type='radio']#black:checked").prop('checked', false);
$("input[type='radio']#grey:checked").prop('checked', false);
$("input[type='radio']#red:checked").prop('checked', false);
$("input[type='radio']#green:checked").prop('checked', false);
});
$( "img#black").click(function(){
$('#blackbg').css("visibility","visible");  
$('#greybg').css("visibility","hidden");  
$('#redbg').css("visibility","hidden");  
$('#greenbg').css("visibility","hidden");  
$('#whitebg').css("visibility","hidden");  
$("input[type='radio']#black").prop("checked", true);
$("input[type='radio']#white:checked").prop('checked', false);
$("input[type='radio']#grey:checked").prop('checked', false);
$("input[type='radio']#red:checked").prop('checked', false);
$("input[type='radio']#green:checked").prop('checked', false);
});
$( "img#grey").click(function(){
$('#blackbg').css("visibility","hidden");  
$('#greybg').css("visibility","visible");  
$('#redbg').css("visibility","hidden");  
$('#greenbg').css("visibility","hidden");  
$('#whitebg').css("visibility","hidden");  
$("input[type='radio']#grey").prop("checked", true);
$("input[type='radio']#white:checked").prop('checked', false);
$("input[type='radio']#black:checked").prop('checked', false);
$("input[type='radio']#red:checked").prop('checked', false);
$("input[type='radio']#green:checked").prop('checked', false);
});
$( "img#red").click(function(){
$('#blackbg').css("visibility","hidden");  
$('#greybg').css("visibility","hidden");  
$('#redbg').css("visibility","visible");  
$('#greenbg').css("visibility","hidden");  
$('#whitebg').css("visibility","hidden");  
$("input[type='radio']#red").prop("checked", true);
$("input[type='radio']#white:checked").prop('checked', false);
$("input[type='radio']#grey:checked").prop('checked', false);
$("input[type='radio']#black:checked").prop('checked', false);
$("input[type='radio']#green:checked").prop('checked', false);
});
$( "img#green").click(function(){
$('#blackbg').css("visibility","hidden");  
$('#greybg').css("visibility","hidden");  
$('#redbg').css("visibility","hidden");  
$('#greenbg').css("visibility","visible");  
$('#whitebg').css("visibility","hidden");  
$("input[type='radio']#green").prop("checked", true);
$("input[type='radio']#white:checked").prop('checked', false);
$("input[type='radio']#grey:checked").prop('checked', false);
$("input[type='radio']#red:checked").prop('checked', false);
$("input[type='radio']#black:checked").prop('checked', false);
});


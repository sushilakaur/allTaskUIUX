console.log("Hello! ");
//click and strike
$("#lists").on("click", "li", function(){
    $(this).toggleClass("completed");
});

var goals=JSON.parse(localStorage.getItem("todoss"))||[];
goals.forEach(element => {
    print(element);
    
});
//delete a todo
$("#lists").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
        goals.splice(this,1);
        localStorage.setItem("todoss",JSON.stringify(goals));
    });
    event.stopPropagation();
});

//add a new todo

 var input=document.querySelector("#ToDos input").addEventListener("keydown",function(e){
    if(e.keyCode===13){
        var todovalue= this.value;
        goals.push(todovalue);
        localStorage.setItem("todoss",JSON.stringify(goals));
        $(this).val("");
        print(todovalue);
        // $("#lists").append("<li><span><i class='fa fa-trash'></i></span> "+todovalue+"</li>");
    }
});
console.log(goals);


$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle()
});

function print(todovalue){
    $("#lists").append("<li><span><i class='fa fa-trash'></i></span> "+todovalue+"</li>");
}
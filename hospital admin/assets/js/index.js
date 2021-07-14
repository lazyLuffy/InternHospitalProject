$('#add_user').submit(function (event){
    alert('Patient Successfully Admit')
})

$('#update_user').submit(function (event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    console.log(unindexed_array);
    var data={};
    $.map(unindexed_array,function (n,i){
        data[n['name']] = n['value']
    })
    console.log(data.id)
    var request={
        "url": `/api/users/${data.id}`,
        "method":"put",
        "data":data
    }

    $.ajax(request).done(function (response){
        alert("Data updated")
    }) 
})

if(window.location.pathname=="/")
{
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function (){
        var id = $(this).attr("data-id");
        console.log(id)
        var request={
            "url": `/api/users/${id}`,
            "method":"delete",
        }
        if(confirm("congratulations now you negative")){
            $.ajax(request).done(function(response){
                alert("Patient is Discharge now")
                location.reload();
            })
        }
    })

}
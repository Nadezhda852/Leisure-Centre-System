$("#add_athlet").submit(function(event){
    alert("Information added successfully!")
})

$("#update_athlet").submit(function(event){
    event.preventDefault();

    var unindexed_array=$(this).serializeArray();
    var data={}

    $.map(unindexed_array,function(n,i){
        data[n['name']]= n['value']
    })
    console.log(data);

    var request={
        "url": `http://localhost:3000/api/athlets/${data.id}`,
        "method": "PUT",
        "data": data
    }
    $.ajax(request).done(function(response){
        alert("Information updated Successfully!")     
    })
})

if(window.location.pathname=="/"){
    $ondelete=$("table tbody td a.delete");
    $ondelete.click(function(){
        var id=$(this).attr("data-id")

        var request={
            "url": `http://localhost:3000/api/athlets/${id}`,
            "method": "DELETE"
        }

        if(confirm("Would you like to delete this account?")){
            $.ajax(request).done(function(response){
                alert("Information deleted Successfully!");
                location.reload()     
            }) 
        }

    })
}
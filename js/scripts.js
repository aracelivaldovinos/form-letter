$("document").ready(function(){
  $("#formOne").submit(function(event){
    const recipientInput = $("input#recipient").val(); 
    const senderInput = $("input#sender").val();
    const fullNameInput = $("input#fullName").val();
    const addressInput = $("input#address").val();
    const cityZipInput = $("input#cityZip").val();
    const stateInput = $("input#state").val();

    $(".recipient").text(recipientInput);
    $(".sender").text(senderInput);
    $(".fullName").text(fullNameInput);
    $(".address").text(addressInput);
    $(".cityZip").text(cityZipInput);
    $(".state").text(stateInput);

    $("#letter").show();
    event.preventDefault();

  });
});
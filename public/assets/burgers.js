$(function() {
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#burgerType").val().trim(),
      };

      console.log("wheres my burger??" + newBurger.name);
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });


    $(".eatdaburger").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = true;
      console.log($(this).data);

      var devouredState = {
        devoured: newDevoured
      };
      console.log(devouredState);

  
      $.ajax("/api/update/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          console.log("changed sleep to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".delete").on("click", function(event) {

      $.ajax("/api/delete", {
        type: "DELETE",
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  
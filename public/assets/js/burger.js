// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eat").on("click", function(event) {
      var id = $("this.id");
      console.log("Burger Chosen - js worked");

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        devoured: true
      }).then(
        function() {
          location.assign("/");
        }
      );
    });
})
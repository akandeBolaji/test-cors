function main() {
  console.log("main function");
  console.log("ajax request to the resource which will require cors enabled");
  $.ajax({
    dataType: "json",
    method: "post",
    url:
      "https://kfl2dx54q7.execute-api.eu-west-1.amazonaws.com/dev/shippingservice/webhook",
    success: function (data) {
      console.log("log response on success");
      console.log(data);
    },
  });
}

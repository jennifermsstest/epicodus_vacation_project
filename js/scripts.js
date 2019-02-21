$(document).ready(function() {
  $("form#vaca").submit(function(event) {
    var personInput = $("input#person").val();
    var budget= parseInt($("input:radio[name=budget]:checked").val());
    var temp = parseInt($("input:radio[name=temp]:checked").val());
    var food = parseInt($("input:radio[name=food]:checked").val());
    var shoes = parseInt($("input:radio[name=food]:checked").val());
    var fly = parseInt($("input:radio[name=food]:checked").val());

    var result = budget + temp + food + shoes + fly

    if (result <= 5) {
      answer = "Austin, Texas"
      //var img = new Image();
      //img.src = "https://parade.com/wp-content/uploads/2018/11/austin-texas-skyline-state-flag-ftr.jpg";
    } else if (result > 12) {
      answer = "Bahamas"
      //var img = new Image();
      //img.src = "https://www.placesyoullsee.com/wp-content/uploads/2015/04/23-Pictures-Proving-You-Need-to-Take-a-Vacation-in-the-Bahamas-title.jpg";
    } else  {
     answer = "Hawaii"
     //var img = new Image();
     //img.src = "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiQy5y0ns3gAhWUJDQIHeePAkEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.travelandleisure.com%2Fflight-deals%2Fcheap-flights-hawaii-delta-hawaiian-united-alaska&psig=AOvVaw1dpYaDXKg82NwQdUZQMVVs&ust=1550852631011045";
    }

    $(".person").text(personInput);
    $(".answer").text(answer);
    //$("#output").text(answer);
    //$("#output").append(img);
    $("#output").show();

    event.preventDefault();
  });
});

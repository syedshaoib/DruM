

function funn()
{

       var audio=new Audio('sounds/tom-1.mp3');
       audio.play();
       audio.loop=false;
}
for(var  i=0;i<7;i++)
{

document.querySelectorAll("button")[i].addEventListener("click",function()


{
  var butt=this.innerHTML;
  switch (butt) {
    case 'w':

      var audio=new Audio('sounds/tom-1.mp3');

    this.loop=true;



      break;

        case 'a':
          var audio=new Audio('sounds/tom-2.mp3');
          audio.play();


          break;

          case 's':
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

            case 'd':
              var audio=new Audio('sounds/tom-4.mp3');
              audio.play();
              break;

              case 'j':
                var audio=new Audio('sounds/snare.mp3');
                audio.play();
                break;

                case 'k':
                  var audio=new Audio('sounds/crash.mp3');
                  audio.play();
                  break;





    default:

      var audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;


}
});
}

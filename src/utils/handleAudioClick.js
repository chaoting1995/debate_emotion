import btnAudio from 'Audio//click.mp3';
import { Howl } from 'howler';

function handleAudioClick() {
  const sound = new Howl({
    src: [btnAudio],
  });
  sound.play();

  //--一般方法，ios會出事-----------------------------------
  // const audio = new Audio(btnAudio);
  // audio.play();
}
export default handleAudioClick;

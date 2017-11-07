$(document).ready(function(){
	$("#translate").click(function(){
		alphaMorse($("#translateText").val());
	});
});

function alphaMorse(text){
	text = text.replace(/[^a-zA-Z ]/g, "");
	text = text.split('').join('/').toUpperCase();
	var morse = '';
	for(var i = 0; i < text.length; i++)
	{
		if(text[i] == ' ' ||text[i] == '\n') morse += text[i];
		else if(text[i] == '/') morse += '/';
		else morse += MORSE[text[i]];
	}
	var translated = morse.split('/').join(' ');
	$("#translation").html(translated.split('\n').join('<br>'));
	playMorse(morse);
}

function playMorse(morse){
	var context = new (window.AudioContext || window.webkitAudioContext());
	var oscillator = context.createOscillator();
	var gain = context.createGain();
	oscillator.frequency.value = 750;
	oscillator.connect(gain);
	gain.gain.value = 0;
	gain.connect(context.destination);

	var time = 0,dot = 0.05,dash = 0.15,pause = 0.075,wordbreak = 0.10,space = 0.25;

	oscillator.start(0);
	for(var i = 0; i < morse.length; i++)
	{
		if(morse[i] == '.')
		{
			ring(1, dot);
			ring(0, pause);
		}
		else if(morse[i] == '-')
		{
			ring(1, dash);
			ring(0, pause);
		}
		else if(morse[i] == '/')
		{
			ring(0, wordbreak);
		}
		else
		{
			ring(0, space);
		}
	}

	function ring(volume, type)
	{
		gain.gain.setValueAtTime(volume, time);
		time += type;
	}
}

const MORSE= {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",

    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----"
};
//all types rings for 0.10 sec, break for dot is 0.10, break for dash is 0.30

## Synopsis

PianoPlayer is a simpel JavaScript library that lets you play the piano with your keyboard. 

## Code Example

```javascript

    //function to play a sound when the right key is pressed
    document.onkeydown = function(e) 
    { 
        //Give de keyCode a name
        var keyId = e.keyCode;

        for(i = 0; i<=219; i++) {
                //Check if de i is the same as de keycode
                if(i==keyId) {
                    //audio elements create en play
                    var X = document.createElement("AUDIO"); 
                    X.setAttribute("src", "./piano/" + keyId + ".wav");
                    X.play(); 

                    //ajaxcall 
                    loadXMLDoc(keyId); 
                }
            }       
    }
```


## Motivation

It is one of my school assignments I had to work on. I also wanted to pratice my javascript skills.

## Installation

Add the PianoPlayer.js and the style.css files to your HTML page
```
    <head>
        <link rel="stylesheet" type="text/css" href="style.css">
        <script type="text/javascript" src="PianoPlayer.js"></script>
    </head>
```

Make a new div with the id "piano". 
```html
<body>
    <div id="piano">

    </div>
</body>
```

After you close your body tag, put the new PianoPlayer.
```javascript
    <script> 
        var Pianoplayer = new PianoPlayer();
        Pianoplayer.init();
    </script>
```

## Tests

[Demo](http://michellewesterhuis.com/PianoPlayer/index.html/)

## Contributors

Michellewesterhuis

## License

N/A

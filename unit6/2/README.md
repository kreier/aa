# 6.2 Processing Data Continued + The Color Wheel

[Link to replit](https://replit.com/@evanweinberg/ColorSensor)

Further files:

pressure_full.csv
pressure_partial.csv
temperature_full.csv
temperature_partial.csv
humidity_full.csv

## main.py

``` py
from random import randrange
import utilities
import color_samples

testData = color_samples.colorSamples
testDataColorOnly = color_samples.testColorOnlyData

def countColors(color,testData):
  count = 0
  for value in testData:
    if(value[1] == color):
      count += 1
  return count

#DO NOT CHANGE CODE ABOVE THIS LINE!

#To use noisier data, uncomment this line:
#testData = color_samples.noisyColorSamples

#Your task is to write a function using Python that correctly returns a color based on the red, green, and blue values.

#The identifyColor function should return "red","yellow","cyan", or "green" based on the red, green, and blue values. These values are numbers between 0 - 255.

#Your task is to write this function to correctly identify which of the four colors is represented by the three inputs. 

def identifyColor(colorValues):
  red = colorValues[0]
  green = colorValues[1]
  blue = colorValues[2]
 
  return "red"

#This next function is designed to figure out how many transitions from one color to the next have occured as the color wheel rotates. One complete rotation should involve eight transitions. 

def countTransitionsColorOnly(testDataColorOnly):
  numberOfTransitions = 42
  for color in testDataColorOnly:
    currentColor = color
    #Your code should go here. Watch the indentation of the code you put below as it should match this one.


  #Your final answer should be stored in the variable called numberOfTransitions.
  return numberOfTransitions



def countTransitions(testData):
  numberOfTransitions = 42
  for value in testData:
    currentColor = identifyColor(value[0])
    #Your code should go here. Watch the indentation of the code you put below as it should match this one.


  #Your final answer should be stored in the variable called numberOfTransitions.
  return numberOfTransitions


def testFunction():
  
  redCorrect = 0
  greenCorrect = 0
  yellowCorrect = 0
  cyanCorrect = 0
  for value in testData:
    if(identifyColor(value[0])==value[1]):
      if(value[1] == 'red'):
        redCorrect += 1
      elif(value[1] == 'green'):
        greenCorrect +=1
      elif(value[1] == 'yellow'):
        yellowCorrect += 1
      else:
        cyanCorrect += 1

  correctAnswers = redCorrect + greenCorrect + yellowCorrect + cyanCorrect
  print("Accuracy: {}% of the test data was classified correctly".format(round(correctAnswers*100.0/len(testData))))
  print("{} % of the red data was classified correctly".format(round(redCorrect*100.0/countColors('red',testData),2)))
  print("{} % of the green data was classified correctly".format(round(greenCorrect*100.0/countColors('green',testData),2)))
  print("{} % of the yellow data was classified correctly".format(round(yellowCorrect*100.0/countColors('yellow',testData),2)))
  print("{} % of the cyan data was classified correctly".format(round(cyanCorrect*100.0/countColors('cyan',testData),2)))
  print("{} transitions counted".format(countTransitionsColorOnly(testDataColorOnly)))

testFunction()
```

## color_samples.py

``` py
1119 lines of colors ...
```


## utilities.py

``` py
from random import randrange


def getColorSensorData(color):
  redSamples = [(255, 8, 48),(225, 25, 62),(199,33,28),(227,55,57),(227,68,70),(254,13,39),(254,36,56),(254,55,76)]
  greenSamples = [(0,245,69),(0,253,77),(101,253,130),(25,250,113),(59,246,103),(18,247,61),(80,251,90),(18,249,64)]
  yellowSamples = [(247,244,106),(252,248,19),(252,247,51),(248,246,100),(239,248,71),(251,223,83),(249,245,70),(250,238,75)]
  cyanSamples = [(53,241,245),(0,248,256),(0,247,249),(97,247,256),(0,241,240),(122,241,240),(1,226,240),(40,223,240)]

  if (color == "red"):
    randomIndex = randrange(0,len(redSamples))
    baseColor = redSamples[randomIndex]
  elif(color == "yellow"):
    randomIndex = randrange(0,len(yellowSamples))
    baseColor = yellowSamples[randomIndex]
  elif(color == "cyan"):
    randomIndex = randrange(0,len(cyanSamples))
    baseColor = cyanSamples[randomIndex]
  elif(color == "green"):
    randomIndex = randrange(0,len(greenSamples))
    baseColor = greenSamples[randomIndex]
  else:
    return None
  newColor = []
  for color in baseColor:
    newColorSample = color + randrange(-2,3)
    if newColorSample < 0:
      newColorSample = 0
    if newColorSample > 255:
      newColorSample = 255
    newColor.append(newColorSample)


  return (newColor[0],newColor[1],newColor[2])
```
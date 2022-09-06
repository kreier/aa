basic.forever(function () {
    if(input.temperature() > 30){
        led.plot(2, 2)
    }
    else{
        led.unplot(2, 2)
    }
	if(input.acceleration(Dimension.X)>10){
        led.plot(4,0)
        led.unplot(0,0)
        led.unplot(2,0)
    }
    else if (input.acceleration(Dimension.X)<-10){
        led.plot(0,0)
        led.unplot(4,0)
        led.unplot(2,0)    
    }
    else{
        led.plot(2,0)
        led.unplot(0,0)
        led.unplot(4,0)
    }

    if(input.buttonIsPressed(Button.A)){
       led.plot(4,4)
       basic.pause(1000)
       led.unplot(4,4)
    }
    
})

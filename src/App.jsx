import React from "react";
import {useState,useEffect} from "react";

function App() {
  var Game_Interval=undefined;
  var [bgColor, setBgColor] = useState('#000000');
  useEffect(() => {

    const canvas = document.querySelector('#bg');
    const ctx = canvas.getContext('2d');
    const random=(a,b)=>Math.random()*(b-a)+a;
    var freq=50

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Ball{
        #c;#x;#y;#radius;#speed;
        constructor(x,y) {
            this.#x=x||random(0,canvas.width);
            this.#y=y||random(0,canvas.height);
            this.#radius=1;
            this.#speed=0.01;
            switch (parseInt(random(0,7))){
                case 0:
                    this.#c="#66CCFF"
                    return
                case 1:
                    this.#c="#006666"
                    return
                case 2:
                    this.#c="#FFFF00"
                    return
                case 3:
                    this.#c="#EE0000"
                    return
                case 4:
                    this.#c="#9999FF"
                    return
                case 5:
                    this.#c="#EE82EE"
                    return
                case 6:
                    this.#c="#00FFCC"
                    return
            }
            // this.#c="#ffffff"
        }

        draw() {
            ctx.fillStyle = this.#c;
            if(this.radius>100) this.#radius=100;
            ctx.save()
            ctx.beginPath();
            ctx.arc(this.#x, this.#y, this.#radius, 0, Math.PI * 2);
            ctx.globalAlpha=1-this.#radius/100;
            ctx.fill();
            ctx.closePath();
            ctx.restore();

            ctx.save();
            ctx.globalAlpha=0.5-this.#radius/200;
            ctx.beginPath();
            if(this.#x-this.#radius<0) ctx.arc(-this.#x, this.#y, this.#radius, 0, Math.PI * 2);
            if(this.#y-this.#radius<0) ctx.arc(this.#x, -this.#y, this.#radius, 0, Math.PI * 2);
            if(this.#x+this.#radius>canvas.width) ctx.arc(2*canvas.width-this.#x, this.#y, this.#radius, 0, Math.PI * 2);
            if(this.#y+this.#radius>canvas.height) ctx.arc(this.#x, 2*canvas.height-this.#y, this.#radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
            ctx.restore();
        }

        update(mouseX,mouseY) {
            this.#radius+=0.5;
            let delta_x=(!mouseX?0:(mouseX-this.#x));
            let delta_y=(!mouseY?0:(mouseY-this.#y));
            this.#x+=delta_x*this.#speed;
            this.#y+=delta_y*this.#speed;
        }

        outOfBounds(){
            return this.#radius>=100;
        }
    }

    let balls = [];
    let controller=0;
    var hasMouse;
    var mouseX,mouseY;
    document.onmouseover=()=>{hasMouse=true;}
    document.onmouseleave=()=>{hasMouse=false;}
    document.onmousemove=(e)=>{mouseX = e.clientX;mouseY = e.clientY;hasMouse=true;};
    const start=()=> {
        if(Game_Interval!=undefined) clearInterval(Game_Interval);
        Game_Interval = setInterval(() => {
            ctx.fillStyle = 'rgba(0,0,0,1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            if (controller % freq === 0) {
                if(hasMouse)
                    balls.push(new Ball(mouseX,mouseY));
                else{
                    balls.push(new Ball());
                }
                controller = 0;
            }
            for (let i = 0; i < balls.length; i++) {
                balls[i].draw();
                if(hasMouse) balls[i].update(mouseX,mouseY);
                else balls[i].update();
                if (balls[i].outOfBounds()) {
                    balls.splice(i, 1);
                    i--;
                }
            }
            controller++;
        }, 15);
    }
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    start()
    return () => {
        clearInterval(Game_Interval);
    };
  },[]);
  return (
      <div className="App">
          <div className="hero min-h-screen">
              <div className="hero-overlay w-full">
                  <canvas id="bg"></canvas>
              </div>
              <div className="hero-content text-neutral-content text-center">
                  <div className="max-w-md">
                      <h1 className="mb-5 text-5xl font-bold font-[comfortaa]">Inteyvat</h1>
                      <p className="mb-5">
                          看不出来有什么用，但是你知道整活这块没输过的含金量吗？
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;

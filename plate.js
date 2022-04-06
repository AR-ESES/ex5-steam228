class Plate {
  
  constructor(x,w) {   
    this.x = x;
    this.w = w;
    this.h = 10;
    this.y = height - this.h;
  }
  
  catches(pie)
  
  show() {
    
    rectMode(CENTER);
    rect(this.x,this.y,this.w, this.h);
    
  }
}

  
  
  
  
}
export default class TwoBucket {
  constructor(cap1, cap2, goal, goalBucket) {
    const self = this;
    self.goalBucket = goalBucket;
    self.goal = goal;
    self.count = 1;
    self.one = {contains: cap1, capacity: cap1};
    self.two = {contains: 0, capacity: cap2};
    if (goalBucket === 'two') {
      self.one = {contains: cap2, capacity: cap2};
      self.two = {contains: 0, capacity: cap1};
    }
  }

  transfer(){
    const transferAmount=Math.min(this.one.contains, this.two.capacity-this.two.contains);
    this.one.contains-=transferAmount;
    this.two.contains+=transferAmount;
    return this.one.contains===this.goal;
  }

  moves(){
    while(!this.transfer()){
      if(this.two.contains===this.two.capacity){
        this.two.contains=0;
      } else {
        this.one.contains=this.one.capacity;
      }
      this.count+=2;
    }
    this.otherBucket=this.two.contains;
    return ++this.count;
  }
}
      
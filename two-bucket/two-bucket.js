export default class {
  constructor(cap1, cap2, goal, goalBucket) {
    this.goalBucket = goalBucket;
    this.goal = goal;
    this.count = 1;
    this.one = {contains: cap1, capacity: cap1};
    this.two = {contains: 0, capacity: cap2};
    if (goalBucket === 'two') {
      this.one = {contains: cap2, capacity: cap2};
      this.two = {contains: 0, capacity: cap1};
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
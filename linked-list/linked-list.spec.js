import LinkedList from './linked-list';

describe('LinkedList', () => {
  it('add/extract elements to the end of the list with push/pop', () => {
    const list = new LinkedList();
    list.push(10);
    list.push(20);
    expect(list.pop()).toBe(20);
    expect(list.pop()).toBe(10);
  });
  it('extract elements from the beginning of the list with shift', () => {
    const list = new LinkedList();
    list.push(10);
    list.push(20);
    expect(list.shift()).toBe(10);
    expect(list.shift()).toBe(20);
  });
  it('add/extract elements from the beginning of the list with unshift/shift', () => {
    const list = new LinkedList();
    list.unshift(10);
    list.unshift(20);
    expect(list.shift()).toBe(20);
    expect(list.shift()).toBe(10);
  });
  it('unshift/pop', () => {
    const list = new LinkedList();
    list.unshift(10);
    list.unshift(20);
    expect(list.pop()).toBe(10);
    expect(list.pop()).toBe(20);
  });
  it('example', () => {
    const list = new LinkedList();
    list.push(10);
    list.push(20);
    expect(list.pop()).toBe(20);
    list.push(30);
    expect(list.shift()).toBe(10);
    list.unshift(40);
    list.push(50);
    expect(list.shift()).toBe(40);
    expect(list.pop()).toBe(50);
    expect(list.shift()).toBe(30);
  });
  it('pops undefined when there are no elements', () => {
    const list = new LinkedList();
    expect(list.pop()).toBe(undefined);
  });
  it('can count its elements', () => {
    const list = new LinkedList();
    expect(list.count()).toBe(0);
    list.push(10);
    expect(list.count()).toBe(1);
    list.push(20);
    expect(list.count()).toBe(2);
  });
  it('deletes the element with the specified value from the list', () => {
    const list = new LinkedList();
    list.push(10);
    list.push(20);
    list.push(30);
    list.delete(20);
    expect(list.count()).toBe(2);
    expect(list.pop()).toBe(30);
    expect(list.shift()).toBe(10);
  });
  it('deletes the only element', () => {
    const list = new LinkedList();
    list.push(10);
    list.delete(10);
    expect(list.count()).toBe(0);
  });
  it('delete does not modify the list if the element is not found', () => {
    const list = new LinkedList();
    list.push(10);
    list.delete(20);
    expect(list.count()).toBe(1);
  });

  it('deleteKthFromEnd removes the kth element from the end', ()=>{
    const list = new LinkedList();
    list.push(10);
    list.push(30);
    list.push(40);
    list.push(50);
    list.push(60);
    list.deleteKthFromEnd(1);
    expect(list.count()).toBe(5);
    expect(list.pop()).toBe(60);
  })

  it('removeDupes removes duplicates from the list', ()=>{
    const list = new LinkedList();
    list.push(10);
    list.push(10);
    list.push(10);
    list.push(30);
    list.push(40);
    list.push(40);
    list.push(30);
    list.push(50);
    expect(list.count()).toBe(8);

    list.removeDupes();
    expect(list.count()).toBe(4);
  })
});

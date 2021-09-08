
class ObserverList {
  private observerList: Observer[] = [];

  public add(obj: Observer) {
    return this.observerList.push(obj);
  }

  public count() {
    return this.observerList.length;
  }

  public get(index: number) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index];
    }

    throw new Error(`observerList ${index} 不存在`);
  }

  public indexOf(obj: Observer, startIndex: number) {
    let i = startIndex;

    while (i < this.observerList.length) {
      if (this.observerList[i] === obj) {
        return i;
      }
      i++;
    }

    return -1;
  }

  public removeAt(index: number) {
    this.observerList.splice(index, 1);
  }
}

export class Observer {
  public update: Function = () => { };
}

export class Subject {
  private _observers = new ObserverList();

  public addObserver(observer: Observer) {
    this._observers.add(observer);
  }

  public removeObserver(observer: Observer) {
    this._observers.removeAt(this._observers.indexOf(observer, 0));
  }

  // 通知函数
  public notify(value?: any) {
    let observerCount = this._observers.count();
    for (let i = 0; i < observerCount; i++) {
      ; (<Observer>this._observers.get(i)).update(value);
    }
  }
}

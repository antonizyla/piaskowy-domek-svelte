class Queue {
    public items: number[] = [];
    public last_removed: number | undefined;
    public max_items = 0;
    public mapRep = new Map();

    constructor(max_length: number) {
        this.max_items = max_length || 0;
    }

    enqueue(item: number): boolean {
        if (item === undefined) {
            return false;
        } else if (this.maxLength === 0) {
            this.items.push(item);
            this.mapRep.set(item, true);
        } else {
            if (this.length < this.maxLength) {
                this.items.push(item);
                this.mapRep.set(item ,true)
                return false
            } else {
                this.last_removed = this.items[0];
                this.mapRep.delete(this.items[0]);
                this.items.splice(0, 1);
                this.items.push(item);
                this.mapRep.set(item, true);
                return true;
            }
        }
        return true;
    };

    remove(item: number): boolean {
        if (!this.isEmpty) {
            for (let i = 0; i < this.length; i++) {
                if (this.items[i] === item) {
                    this.mapRep.delete(this.items[i])
                    this.items.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }

    contains(item: number): boolean {
        return this.items.indexOf(item) !== -1;
    }

    dequeue(): boolean {
        if (!this.isEmpty) {
            this.remove(this.peek());
        }
        return true
    }

    peek(): number {
        return this.items[0];
    }

    get length(): number {
        return this.items.length;
    }

    get maxLength(): number {
        return this.max_items;
    }

    get isEmpty(): boolean {
        return this.items.length === 0;
    }
}

export {Queue}
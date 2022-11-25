import {expandBraceExpansion} from "fast-glob/out/utils/pattern";

class Queue {
    public items: number[] = [];
    public max_items = 0;

    constructor(max_length: number) {
        this.max_items = max_length || 0;
    }

    enqueue(item: number): boolean {
        if (item === undefined) {
            return false;
        } else if (this.maxLength === 0) {
            this.items.push(item);
        } else {
            if (this.length < this.maxLength) {
                this.items.push(item);
            } else {
                this.items.splice(0, 1);
                this.items.push(item);
            }
        }
        return true;
    };

    remove(item: number): boolean {
        if (!this.isEmpty) {
            for (let i = 0; i < this.length; i++) {
                if (this.items[i] === item) {
                    this.items.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }

    dequeue(): boolean {
        if (!this.isEmpty) {
            this.items.splice(0, 1);
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
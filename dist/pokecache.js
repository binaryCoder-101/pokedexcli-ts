export class Cache {
    #cache = new Map();
    #reapIntervalId = undefined;
    #interval = 0;
    #reap() {
        const cutoff = Date.now() - this.#interval;
        for (let [key, entry] of this.#cache) {
            if (entry.createdAt < cutoff) {
                this.#cache.delete(key);
            }
        }
    }
    #startReapLoop() {
        this.#reapIntervalId = setInterval(this.#reap, this.#interval);
    }
    constructor(interval) {
        this.#interval = interval * 60 * 1000;
        this.#startReapLoop;
    }
    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
    add(key, val) {
        this.#cache.set(key, {
            createdAt: Date.now(),
            val,
        });
    }
    get(key) {
        return this.#cache.get(key);
    }
}

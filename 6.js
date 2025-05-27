const memoize = (fn) => {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    }
}

const sum = (x, y) => {
    return x + y;
}

const memoized_sum = memoize(sum);

console.log(memoized_sum(1, 2)); 
console.log(memoized_sum(1, 2)); 
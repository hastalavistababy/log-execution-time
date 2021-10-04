# Log method execution time decorator
Log method execution time decorator using Nodejs performance hook

### Install
```
npm install log-execution-time --save-dev
```

### Example
```js
import {LogExecutionTime} from 'log-execution-time';

class Person {
    public age = 10

    @LogExecutionTime
    isAdult() {
        return this.age > 18
    }
}

let person = new Person();
person.isAdult();

// functino isAdult(): 0.0001s
```
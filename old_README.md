Why Ez is worth looking at?

- Really Ez for beginners.
- Really Ez to debug compared to some other languages, using strict ruling.

#### Supported types of elements

- `String`: 'Hello world!'
- `Digit`: 0, 1, 2, 3, -5
- `Float`: 1.25, -3.03, 7.18
- `Boolean`: true/false
- `Undefined`: undefined value
- `Null`: null value
- `Array`: [], ['23213', true, 'hehe'], [undefined]
- `Object`: {'hi': 'sup', '2': '5'}
- `Set`: {'abc', 1, ['string here'], 1.25}

Behind the hood they are all instances of classes, so you can run methods on them, such as

```
[].isEmpty()

=>

true
```

or

```
25.toString()

=>

'25'
```

You can append your own functions if you wish to, and they would be accessible to all other same type of elements.

#### How's that called in English?

- `==`: Equals
- `!=`: Not Equals
- `>`: Greater than
- `>=`: Greater than or equals to
- `<`: Smaller than
- `<=`: Smaller than or equals to

For `>`, `>=`, `<`, `<=`

you can compare interchangeably between digits and floats

You can also compare stings with strings lexicographically

For `==` you can compare literally anything, it uses strict ruling.
Same rule follows for `!=`.

```
'hello' == 'hello'

=>

true
```

but

```
'5' == 5

=>

false
```

Objects and arrays are compared deeply, meaning

```
[ 'a', ['b', ['c']]] == [ 'a', ['b', ['c']]]

=>

true
```

and

```
[ 'a', ['b', ['c']]] == ['a', ['b', ['D']]]

=>

false
```

# express-xss

This application is a demonstration prototype just to show how to perform XSS attacks. This tutorial will walk you through using templating engine to prevent XSS attacks. The intermediate steps show you the different possible mistakes with JavaScript and Pug.

# step 0 

* Install nodejs

* Install express and pug

```console
$ npm install
```

# Step 1

* run express-xss

```console
$ node app.js
```

* Start Chrome without XSS Auditor

```console
$ google-chrome-stable --disable-xss-auditor
```

You just need to make sure that all instances of Chrome have been killed before you run that command.
XSS Auditor is removed in Chrome 78 and highter version.

* Open http://localhost:3000

* Complete name field with a simple XSS payload

```javascript
<script>alert("XSS");</script>
```

* Complete name field with a XSS payload (without script tag)

```javascript
<img src=1 href=1 onerror="javascript:alert('XSS')"></img>
```

* Complete name field with a XSS payload (with context breaking)

```javascript
" autofocus onfocus="alert('XSS')
```

* Complete name field with a polygloat XSS

```javascript
javascript:"/*'/*`/*--></noscript></title></textarea></style></template></noembed></script><html \" onmouseover=/*<svg/*/onload=alert('XSS')//>
```

# Step 2

* Select the branch

```console
$ git checkout step2
```

This branch use Pug as templating engine

* run express-xss

```console
$ node app.js
```

* Try XSS attacks again

**What's wrong ?**

This example use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings): `${...}`
This JavaScript function doesn't provide data escaping.

In this example, [interpolation](https://pugjs.org/language/interpolation.html#string-interpolation-unescaped) function provides by Pug is not used.
This is even more dangerous because it is exposed to SSTI (Server side templating injection) attacks.

Try SSTI attack with tplmap:

```console
$ ./tplmap.py --engine pug --os-shell -u http://localhost:3000/?name=bob
```

Go [there](https://github.com/0xdbe/express-ssti) for a dedicated tutorial on SSTI attacks.


# Step 3

* Select the branch

```console
$ git checkout step3
```

This branch uses interpolation function from Pug.

* run express-xss

```console
$ node app.js
```

* Try XSS attacks again

**What's wrong ?**

This example uses [unescaped interpolation](https://pugjs.org/language/interpolation.html#string-interpolation-unescaped): `!{...}`


# Step 4

* Select the branch

```console
$ git checkout step4
```

This branch uses [escaped interpolation](https://pugjs.org/language/interpolation.html#string-interpolation-escaped): `#{...}`

* run express-xss

```console
$ node app.js
```

* Try XSS attacks again

Good job ! You are now protected against common XSS attacks.

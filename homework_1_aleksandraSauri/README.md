# Homework Descriptionn

This is my first home work that I should implement on my computer.

## Task Description

Create a folder on my disk called `homework_1_<myfullname>`.

Start a new NodeJS project using `npm init` in that folder.

Create an `index.js` and add the following code:

```javascript
console.log("Hello NodeJS!");
```

## Config Dertails

I added an external library called `ascii-art` and `nodemon`. 

<details>
<summary>package.json Config Details</summary>
<p>

Wrote a script called `start` in `package.json` to run my node app with `nodemon` so i don't need to start every time I make a change in the code.

I start my app with `npm start`.
</p>
</details>
<br />


<details>
<summary>Packages Command Details</summary>
<p>
I used the following commands

```bash
npm i ascii-art
```

```bash
npm i -D nodemon
```

</p>
</details>
<br />


## Other Details About Task

Integrated the new library and renderd the `Hello NodeJS!` text using `ascii-art` library.
* Used CommonJS syntax -  `require`
* Used ECMAScript Modules (ESM) -  `import`

Loaded a JSON file in my application. A copy of the JSON file can be found [here](sayings.json)
 * Read the JSON file directly using the `fs` module.
 * Read the JSON file using the stream module. More [information](https://nodejs.org/docs/latest-v20.x/api/stream.html).
 * Read the JSON file using a file descriptor and a buffer. More [information](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsreadfd-buffer-offset-length-position-callback).

## Additional Task For GIT

> Optional: created a local `git` repository.
>
> Optional: Created a github repo and pushed my local repo to github.
# commular-plugin-template

> Search and replace "commular-plugin-template" by your plugin name


## How to develop my own plugins?

### Develop your own plugins for **Commander** is as easy as follow the next steps:

1. Clone the plugin template repository.

```bash
git clone https://github.com/commular/commular-plugin-template.git [YOUR_PLUGIN_NAME]
```

2. Open ```scripts/index.js``` and see that there is only the following code:

```js
exports.command = function (program) {
    /**
     * "program" returns an instance of "commander" or "vorpal".
     * Develop your command/s in this function as usual.
     * More information about how to do that in the website of the CLI framework
     * you decided to use.
    **/
};
```

3. Read and remove that comment and implement your command or commands in there.
4. Install all the dependencies you need.
5. Test your plugin.
    * The template also gives you all the ecosystem to test your plugins easily but we don't have
to recall you that it's just a template so it's up to you if you want to change the modules used in there.

    > If you want us to review your **commular** plugin we will ask you for testing.
    > We will not accept any plugin without the required testing.


### Good, but what if you don't want or can not publish it in NPM, Github...

That's not a problem at all because we are using NPM to manage dependencies.

#### Example of developing using local plugins:

Assumptions:
- The tool's name, you are developing, is 'cli'.
- You are creating a 'plugins' folder in the root of your tool.
- The name of your plugin is 'commular-parse-xml'

1. Open your 'cli' root folder
2. Create 'plugins' folder in the root of your 'cli' folder
3. Copy or move 'commular-parse-xml' folder inside of 'plugins'
4. Use npm to install it locally.

```bash
npm install --save ./plugins/commular-parse-xml
```

5. Use ```npm link``` to work with your 'cli' tool as if it was installed globally.
6. Test your plugin and enjoy it, once you have it finished you can publish or share it with others.

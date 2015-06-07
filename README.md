# ES6 Isomorphic Flux/ReactJS Boilerplate [WIP]

> A fork of Isomorphic boilerplate (https://github.com/iam4x/isomorphic-flux-boilerplate), comes
with less bells and whistles and Express on the server side.

## Libraries Included

* [react](https://facebook.github.io/react/)
* [react-router](https://github.com/rackt/react-router)
* [alt](https://github.com/goatslacker/alt)
* [iso](https://github.com/goatslacker/iso)
* [express](http://expressjs.com/)
* [webpack](http://webpack.github.io/)
* [babeljs](https://babeljs.io/)

## TL;DR

Use with `iojs^1.8.0` or `nodejs^0.12.0`, clone the repo, `npm install` and `npm run dev`.

Learn React ([react-prime-draft](https://github.com/mikechau/react-primer-draft)), learn Flux and Alt ([alt guide](http://alt.js.org/guide/)).

Wrap you async actions into promises, send them to `altResolver` with `altResolver.resolve(xxx)` for async server side rendering (see [app/actions/pojects.js:22](https://github.com/nim23/simple-iso-react/blob/master/app/actions/projects.js#L22)).

## Concepts

**Express** will be our server for the server side rendering, we use **alt** for our Flux architecture and **react-router** for routing in our app.

With **iso** as helper we can populate **alt** flux stores before the first rendering and have a complete async isomorphic React application.

Run this boilerplate, you will see the server is fetching some fake projects and will populate the `ProjectStore` with this data. **Express** will render the first markup, serve the JavaScript and then it will entirely run on the client.

## Flux

We use [alt](alt.js.org) instance as [Flux](http://facebook.github.io/react/blog/2014/05/06/flux.html) implementation.

We need to use instances for isomorphic applications, to have a unique store/actions per requests on the server.

On the client, Flux is initialized in `app/main.js` and sent to our first React Component via props (`this.props.flux`). Everytime you want to uses stores or actions in a component you need to give it access through props.

On the server, it's similar but Flux is initialized in `server/router.js`. The instance is sent to `alt-resolver` for rendering components with the correct props.

Learn more about [alt instances](alt.js.org/docs/altInstances) in the alt documentation.

## Async data-fetching

Alt-resolver is the magic thing about the boilerplate, it will be our tool for resolving promises (data-fetching) before server side rendering.

Wrap data-fetching requests from actions into promises and send them to `altResolver` like:

```
fetch() {
  const promise = (resolve) => {
    request
      .get('http://example.com/api/project')
      .end((response) => {
        // fire new action to send data to store
        this.actions.fetchSuccess(response.body);
        return resolve();
      });
  };
  // Send the `promise` to altResolver
  this.alt.resolve(promise);
}
```

Call the fetch action from component in the `componentWillMount` method:

```
propTypes: {
  flux: React.PropTypes.object.isRequired
},
componentWillMount() {
  const projectsActions = this.props.flux.getActions('projects');
  return projectsActions.fetch();
}
```

On browser side, the rendering won't be stopped and will resolve the promise instantly.

On server side, `altResolver.render` will fire a first render to collect all the promises needed for a complete rendering. It will then resolve them, and try to re-render the application for a complete markup.

Open `app/actions/project.js`, `app/utils/alt-resolver.js`, `app/stores/project.js` for more information about data-fetching.

## Installation / How-to

I recommend to use [io.js](https://iojs.org/) to take advantages of `ES6` without `--harmony` flag on `NodeJS`.

It's super easy to do with [nvm](https://github.com/creationix/nvm):

* `$ nvm install iojs`
* `$ nvm use iojs`
* `$ nvm alias default iojs` (to make `node` default to `iojs`)

But it works well with `nodejs^0.12.0` as well :)

### Run the project in development:

* `$ npm run dev`

Open your browser to `http://localhost:11000` and you will see the magic happens! Try to disable JavaScript in your browser, you will still be able to navigate between pages of the application. Enjoy the power of isomorphic applications!

### Run the project in production:

* `$ npm run prod`


### Learn more

* [Official ReactJS website](http://facebook.github.io/react/)
* [Official ReactJS wiki](https://github.com/facebook/react/wiki)
* [Official Flux website](http://facebook.github.io/flux/)
* [ReactJS Conf 2015 links](https://gist.github.com/yannickcr/148110d3ca658ad96c2b)
* [Learn ES6](https://babeljs.io/docs/learn-es6/)
* [ES6 Features](https://github.com/lukehoban/es6features#readme)

# Ionic Slides Example

When I first used Ionic Slides (https://ionicframework.com/docs/api/slides) I couldn't find any complete examples I could use as a starting point for my application. Josh Morony's [Creating Ionic Applications with StencilJS](https://www.joshmorony.com/creating-ionic-applications-with-stencil-js/) book introduced me to the topic, but didn't give me the playground I needed to tweak the slides example to better understand how to get text and images to work on the same slide, how to scale slide images to fit the screen, and more.

With that in mind, I decided to craft my own example nd make it available for others interested in learning how to add slides to their Ionic applications (in two different configurations).

To use this sample:

1. Make sure you have [`git`](https://git-scm.com/) and [node.js](https://nodejs.org/en/) installed on your system
2. Open a terminal window or command prompt
3. Execute the following command:

```shell
git clone https://github.com/johnwargo/ionic-slides-example
```

This will copy the source code from GitHub (where I work) to a folder called `ionic-slides-example`. Next, execute the following commands:

```shell
cd ionic-slides-example
npm install
```

Assuming you have the [Ionic CLI](https://ionicframework.com/getting-started) installed, execute the following command:

```shell
ionic serve
```

Your default browser will open then display the following page:

![Home Screen](images/home-page.png)

Play around with the two slides options to see how the app works.

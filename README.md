# Foundation 5 Boilerplate

A custom boilerplate using Foundation 5.

Additions to Foundation's default package include:

* Stylesheets have been broken up into multiple files. One for small, medium and large. As well as a settings file and mixins file.
* A default Javascript class has been added to app.js.
* A small debug element has been added to the bottom left corner to indicate screen width and current stylesheet in use.
* Support for IE8 has been added, thanks to James Cocker. (http://foundation.zurb.com/forum/posts/241-foundation-5-and-ie8)

## Requirements

  * Ruby 1.9+
  * [Node.js](http://nodejs.org)
  * [compass](http://compass-style.org/): `gem install compass`
  * [bower](http://bower.io): `npm install bower -g`

## Quickstart

1. Change into the /library/ directory.
2. Type 'compass watch', press enter.

## Thanks

1. Zurb Foundation
2. James Cocker - IE8 compatibility

-------------------------------------------

# Foundation Compass Template (Original Foundation README)

The easiest way to get started with Foundation + Compass.

## Requirements

  * Ruby 1.9+
  * [Node.js](http://nodejs.org)
  * [compass](http://compass-style.org/): `gem install compass`
  * [bower](http://bower.io): `npm install bower -g`

## Quickstart

  * [Download this starter compass project and unzip it](https://github.com/zurb/foundation-compass-template/archive/master.zip)
  * Run `bower install` to install the latest version of Foundation

Then when you're working on your project, just run the following command:

```bash
bundle exec compass watch
```

## Upgrading

If you'd like to upgrade to a newer version of Foundation down the road just run:

```bash
bower update
```

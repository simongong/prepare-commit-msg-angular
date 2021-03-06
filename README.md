# prepare-commit-msg-angular

[![version](https://img.shields.io/npm/v/prepare-commit-msg-angular.svg?style=flat-square)](http://npm.im/prepare-commit-msg-angular)
[![MIT License](https://img.shields.io/npm/l/prepare-commit-msg-angular.svg?style=flat-square)](http://opensource.org/licenses/MIT)

## Basic Usage
This provides you a binary that you can use as a githook to prepare a commit message following Angular guidelines and display documentation about it.

To be used in addition to [validate-commit-msg](https://github.com/kentcdodds/validate-commit-msg).

* Config for [husky](http://npm.im/husky) :
```json
  "scripts": {
    "preparecommitmsg": "prepare-commit-msg-angular",
  }
```

* Config for [ghooks](http://npm.im/ghooks) :
```json
  "config": {
    "ghooks": {
      "prepare-commit-msg": "prepare-commit-msg-angular $2 $3"
    }
  }
```

## Message Template
By default, the `default.tpl` will be shown in your git editor.

You can also specify your preferred message template by `-t` option.

e.g.
```
    "config": {
        "ghooks": {
            "prepare-commit-msg": "prepare-commit-msg-angular $2 $3 -t tpl_file_path"
        }
    }
```

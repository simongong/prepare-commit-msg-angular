# prepare-commit-msg-angular

[![version](https://img.shields.io/npm/v/prepare-commit-msg-angular.svg?style=flat-square)](http://npm.im/prepare-commit-msg-angular)
[![MIT License](https://img.shields.io/npm/l/prepare-commit-msg-angular.svg?style=flat-square)](http://opensource.org/licenses/MIT)

## Basic Usage
This provides you a binary that you can use as a githook to prepare a commit message following Angular guidelines and display documentation about it.
I recommend
[ghooks](http://npm.im/ghooks) :
```
    "config": {
        "ghooks": {
            "prepare-commit-msg": "prepare-commit-msg-angular $2 $3"
        }
    }
```

To use with [validate-commit-msg](https://github.com/kentcdodds/validate-commit-msg).

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

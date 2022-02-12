# Git Notes

![Build Status]]

## Useful Links

* [git-scm doc](https://git-scm.com/docs)

## Basic Git Commands

### Basic Git Workflow

`% git status` <br>
`% git add {name_file}` <br>
`% git commit` | `% git commit -m "{message}"` <br>
`% git pull origin master` <br>
`% git push origin master` <br>

* **origin** is the name of the remote repository that we cloned from
* **master** means master branch

### Tracked Files

`% mate ~/.gitconfig ## edit .gitconfig file`

* **mate** is a text editor

## Problem I met

### Commit a git deletion

If you deleted a file from the working tree, then commit the deletion:
`git commit -a -m "A file was deleted"`

And push your commit upstream:
`git push`

---

🤖 from [Udemy - Git Complete](https://www.udemy.com/course/git-complete/learn/)
# Challenges: Shell Basics

## Folder Organization

Open **the terminal** and navigate to the folder (for example: Documents or Desktop) where you want to have all spiced-bootcamp content.

- create the `spiced-bootcamp` folder. In side here we are going to have all the files/ content of this bootcamp.

```bash
  mkdir spiced-bootcamp
```

- Verify that the folder was created.

```bash
  ls
```

Search in the output that the folder `spiced-bootcamp` is there.

- Enter the folder `spiced-bootcamp`

```bash
  cd spiced-bootcamp
```

- Verify that this folder is empty.

```bash
  ls
```

It should be an empty output

- Now we are going to create 2 folders:
  - session-notebook
  - challenges

### session-notebook

In the folder session-notebook is where you are going to save your notes from the class. If you want to code along us, you will be coding in this folder.

### challenges

In the challenges folder is where you are going to work solving the challenges.

Your folder structure should look like:

```js
spiced-bootcamp
├── session-notebook
└── challenges
```

## Treasure Hunt

Open **iTerm** and navigate to the folder `challenges` create a **new folder** named `shell-basics`. Inside this folder use the following command to download the challenge files:

> 💡 This command will ask you for permission to download ghcd. This is a tool that we use to
> download challenges from GitHub to your computer. Press <kbd>Enter</kbd> to confirm the download.

```bash
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/shell-basics/treasure-hunt
```

Once the download is complete, navigate into the `shell-basics_treasure-hunt` folder using the `cd` command. Now
the real challenge begins.

**Find the lost diamond of the ancient monarch of treasure island!** Navigate through treasure
island only with the terminal and find the treasure.

Use the following commands:

- `cd` to change directories
- `cd ..` to move up one folder
- `ls` to list files the current folder
- `cat <filename>` to see contents of a file
- `pwd` to see your current directory path

Good luck! 💎

## Notes Project

Inside your `shell-basics` folder, create the following file structure (using `mkdir`,
`touch` and `cd`):

```js
notes
├── released
│   └── public
│   │   └── trash.txt
│   ├── announcement1.txt
│   └── announcement2.txt
└── unreleased
    ├── announcement3.txt
    └── private
        ├── notes1.txt
        └── notes2.txt
```

Update the structure to the following (using `mv`, `rm` and `cd`):

```js
notes
├── private
│   ├── notes1.txt
│   └── notes2.txt
└── public
    ├── released
    │   ├── announcement1.txt
    │   └── announcement2.txt
    └── unreleased
        └── announcement3.txt
```

> 💡 If you are using Mac, you could install the command tree `$ brew install tree` and use
> it to see the file structure in the terminal.

> 💡 If you using Linux (WSL), use your package manager to install the tree package. Under Ubuntu you can do this by executing:
> `apt-get install tree`
